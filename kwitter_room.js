
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyA7re2D19gJpprmMdob1ibKK2usm-xAdFs",
      authDomain: "my-first-kwitter.firebaseapp.com",
      databaseURL: "https://my-first-kwitter.firebaseio.com",
      projectId: "my-first-kwitter",
      storageBucket: "my-first-kwitter.appspot.com",
      messagingSenderId: "645633143232",
      appId: "1:645633143232:web:13011faacac3c0d7aa1825"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user = localStorage.getItem("User");

document.getElementById("welcome_user").innerHTML = "Welcome " + user;

function logout(){
      window.location = "index.html";

      localStorage.removeItem("User");
}



function add_room_fn(){
      room_name = document.getElementById("roomname").value;
      if(room_name == ""){
            document.getElementById("error").innerHTML = "Please mention a roomname to start chating";
            setTimeout(function(){document.getElementById("error").innerHTML = "";}, 2000);
      }
      else{
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
            document.getElementById("roomname").innerHTML = "";
      }
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Roomname - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("user", name);
      window.location = "kwitter_page.html";
}