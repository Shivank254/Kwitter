
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();