"use strict";
//When the user clicks submit the function CreateNewUser 
//is called which adds the new user to the "user.json" database
document.querySelector("#submit").addEventListener("click", CreateNewUser);
//document.querySelector("#submitUser").addEventListener("click", logIn);
document.getElementById("conspiracyTheoriesButton").addEventListener("click", showMovies);

/*
function logIn (event) {
    
}

*/


function CreateNewUser (event) {
    //Inbyggd funktion som ser till att sidan inte laddar om  
    event.preventDefault();
    
    let username = document.querySelector("#createUsername").value;
    let password = document.querySelector("#createPassword").value;

    if (username === "" || password === "") {
        document.querySelector("#message").innerHTML = "Du måste fylla i användarnamn och lösenord!";
        document.querySelector("#message").style.color = "red";
        //window.alert("Du måste fylla i användarnamn och lösenord!");
    } else {
        //username töms
        document.querySelector("#createUsername").value = "";
        
        const request = new Request("PHP/createUser.php"); 
        fetch(request, {
            body: JSON.stringify({username: username, password: password}),
            header: {"Content-Type": "application/json"},
            method: "POST"
        })
            .then(r => r.json())
            .then(resultat => {
                document.querySelector("#createUsername").value = "";
                document.querySelector("#createPassword").value = "";
            })

            var x = document.querySelector("#Welcome");
            if (x.style.display !== "block") {
                x.style.display = "block";
            } 
        
            var y = document.querySelector("#create");
            if (y.style.display !== "none") {
                y.style.display = "none";
            } 
            document.querySelector("#name").innerHTML = `Välkomen ${username} till Disney Mystery Club`;
            console.log(username)

            document.querySelector("#newUser").innerHTML = `${username}`;
            
    }
}

/*

function showMovies (event) {
    event.preventDefault()
   
    var x = document.querySelector("#movies");
    if (x.style.display !== "block") {
        x.style.display = "block";
    } 

    var y = document.querySelector("#Welcome");
    if (y.style.display !== "none") {
        y.style.display = "none";
    } 
}

*/
