function addRoom(){

 localStorage.setItem("room_name", room_name);

 <input type="text" id="room_name" class="form-control" placeholder="Nome da Sala">
    
 </input>

    
window.location = "chat_page.html"

}



function getData()
{
firebase.database().ref("/").on('Value', function (snapshot)
{
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.Key;
    Room_names = childKey;
    //Comece a programar aqui

    //Termine de programar aqui
});
});
}
getData();