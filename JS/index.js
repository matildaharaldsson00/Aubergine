"use strict";
//When the user clicks submit the function CreateNewUser 
//is called which adds the new user to the "user.json" database
document.querySelector("#submit").addEventListener("click", CreateNewUser);
//document.querySelector("#submitUser").addEventListener("click", logIn);

/*
function logIn (event) {
    
}

*/



function CreateNewUser (event) {
    //Inbyggd funktion som ser till att sidan inte laddar om  
    event.preventDefault();
    //
    let username = document.querySelector("#createUsername").value;
    let password = document.querySelector("#CreatePassword").value;
    
    const request = new Request("PHP/createUser.php"); 
    fetch(request, {
        body: JSON.stringify({username: username, password: password}),
        header: {"Content-Type": "application/json"},
        method: "POST"
    })
        .then(r => r.json())
        .then(resultat => {
            document.querySelector("#createUsername").value = "";
            document.querySelector("#CreatePassword").value = "";
        })
     
}

