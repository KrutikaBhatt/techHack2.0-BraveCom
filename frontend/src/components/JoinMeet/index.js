import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import "./styles/joinmeet.css"
import pinkimage from "../../images/pink_rice.png"

class JoinMeet extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/inspire/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/inspire/${url}`
		}
	}

	render() {
		return (
			
				
			<div className="container2">
				
				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "200px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", }}>Start a meeting</p>
					<Input placeholder="ROOM CODE" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px", background: "pink", color:"black" }}>Go</Button>
				</div>
			</div>
		
		)
	}
}

export default JoinMeet;