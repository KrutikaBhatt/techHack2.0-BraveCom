function JoinMeet(){
        
    let RoomID = document.getElementById("inputId").value;
    console.log(RoomID);
    if(RoomID.length > 5){
        var request = new XMLHttpRequest();
        var url = `http://localhost:3030/`+RoomID
        request.open("GET", url , true);
        window.location.replace(url);
        
    }
    else{
        alert('The RoomID is incorrect')
    }
}
