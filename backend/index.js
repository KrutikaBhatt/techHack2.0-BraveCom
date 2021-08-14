const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
app.use(cors())
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
  debug: true
});
const bodyParser = require('body-parser')
const path = require("path")
var xss = require("xss")
const { v4: uuidV4 } = require('uuid')

// APIs
const blogRoutes = require('./routes/Blog');
const eventsRoutes = require('./routes/Events');
const useroutes = require('./routes/User');

app.use(bodyParser.json())
sanitizeString = (str) => {
	return xss(str)
}

app.use('/peerjs', peerServer);

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
	res.status(200).send("Hello from backend");
})

app.use('/blog',blogRoutes);
app.use('/event',eventsRoutes);
app.use('/user',useroutes);
connections = {}
messages = {}
timeOnline = {}

io.on('connection', (socket) => {

	socket.on('join-call', (path) => {
		if(connections[path] === undefined){
			connections[path] = []
		}
		connections[path].push(socket.id)

		timeOnline[socket.id] = new Date()

		for(let a = 0; a < connections[path].length; ++a){
			io.to(connections[path][a]).emit("user-joined", socket.id, connections[path])
		}

		if(messages[path] !== undefined){
			for(let a = 0; a < messages[path].length; ++a){
				io.to(socket.id).emit("chat-message", messages[path][a]['data'], 
					messages[path][a]['sender'], messages[path][a]['socket-id-sender'])
			}
		}

		console.log(path, connections[path])
	})

	socket.on('signal', (toId, message) => {
		io.to(toId).emit('signal', socket.id, message)
	})

	socket.on('chat-message', (data, sender) => {
		data = sanitizeString(data)
		sender = sanitizeString(sender)

		var key
		var ok = false
		for (const [k, v] of Object.entries(connections)) {
			for(let a = 0; a < v.length; ++a){
				if(v[a] === socket.id){
					key = k
					ok = true
				}
			}
		}

		if(ok === true){
			if(messages[key] === undefined){
				messages[key] = []
			}
			messages[key].push({"sender": sender, "data": data, "socket-id-sender": socket.id})
			console.log("message", key, ":", sender, data)

			for(let a = 0; a < connections[key].length; ++a){
				io.to(connections[key][a]).emit("chat-message", data, sender, socket.id)
			}
		}
	})

	socket.on('disconnect', () => {
		var diffTime = Math.abs(timeOnline[socket.id] - new Date())
		var key
		for (const [k, v] of JSON.parse(JSON.stringify(Object.entries(connections)))) {
			for(let a = 0; a < v.length; ++a){
				if(v[a] === socket.id){
					key = k

					for(let a = 0; a < connections[key].length; ++a){
						io.to(connections[key][a]).emit("user-left", socket.id)
					}
			
					var index = connections[key].indexOf(socket.id)
					connections[key].splice(index, 1)

					console.log(key, socket.id, Math.ceil(diffTime / 1000))

					if(connections[key].length === 0){
						delete connections[key]
					}
				}
			}
		}
	})
})

const mongoose_option ={
    useNewUrlParser :true,
    useUnifiedTopology:true
}

mongoose.connect("mongodb+srv://krutika:krutika123@cluster0.cwqdg.mongodb.net/share_care?retryWrites=true&w=majority",mongoose_option)
    .then(()=>{
        server.listen(4001,()=> console.log("Backend Server running at port 4001"))
    }).catch((error)=>{console.log("The error occured in Monogodb connection ",error.message)})

mongoose.set('useFindAndModify',false);