"use strict";
//When the user clicks submit the function CreateNewUser 
//is called which adds the new user to the "user.json" database
document.querySelector("#submit").addEventListener("click", CreateNewUser);

function CreateNewUser (event) {
    //Inbyggd funktion som ser till att sidan inte laddar om  
    event.preventDefault();
    //
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    
    const request = new Request("PHP/createUser.php"); 
    fetch(request, {
        body: JSON.stringify({username: username, password: password}),
        header: {"Content-Type": "application/json"},
        method: "POST"
    })
        .then(r => r.json())
        .then(resultat => {
            document.querySelector("#username").value = "";
            document.querySelector("#username").value = "";
        })
     
}