    function send(){


user_name =  document.getElementById("user_name").value;




        firebase.database().ref(room_name).push({
            name:user_name,
        message:msg,
        like:0
        });
    
    }
