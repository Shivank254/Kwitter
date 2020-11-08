
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

room_name = localStorage.getItem("room_name");

user_in_website = localStorage.getItem("User");

function send(){
    msg = document.getElementById("msg").value;

    if(msg == ""){
        alert("Please write a message to send");
    }
    else{
        firebase.database().ref(room_name).push({
            name:user_in_website,
            message:msg,
            like:0
        });
        document.getElementById("msg").innerHTML = "";
    }
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
console.log(row);   
//End code
 } });  }); }
getData();



function updateLike(message_id){
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
    });
    console.log(updated_likes);
}

function logout_kwitter_chating_page(){
    window.location = "kwitter_room.html";

      localStorage.removeItem("room_name");

      localStorage.removeItem("user");
}