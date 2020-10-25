


function add_user_fn(){

    user_name = document.getElementById("User_name").value;

    localStorage.setItem("User", user_name);

    window.location = "kwitter_room.html";
}