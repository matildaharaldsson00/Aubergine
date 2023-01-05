"use strict";
var userGlobal 
//When the user clicks submit the function CreateNewUser 
//is called which adds the new user to the "user.json" database
document.querySelector("#submit").addEventListener("click", CreateNewUser);
//document.querySelector("#submitUser").addEventListener("click", logIn);
document.querySelector("#conspiracyTheoriesButton").addEventListener("click", showMovies);
document.querySelector("#conspiracyTheoriesButton2").addEventListener("click", showMovies);

function showMovies (event) {
    event.preventDefault()
    //välkomen försivnner och filmerna visas
    var b = document.querySelector(".allMovies");
    if (b.style.display !== "block") {
        b.style.display = "block";
    } 

    var z = document.querySelector(".hideCastle");
    if (z.style.display !== "none") {
        z.style.display = "none";
    } 

    var t = document.querySelector("#Welcome");
    if (t.style.display !== "none") {
        t.style.display = "none";
    } 

    var e = document.querySelector(".allMovies");
    if (e.style.display !== "block") {
        e.style.display = "block";
    } 

    var l = document.querySelector("#WelcomeBack");
    if (l.style.display !== "none") {
        l.style.display = "none";
    } 

    
}

function CreateNewUser (event) {
    //Inbyggd funktion som ser till att sidan inte laddar om  
    //event innehåller information om vad som nyss har hänt MÅSTE vara event
    event.preventDefault();

    //tom variabel som fylls om användarnamn eller lösenord redan finns
    let foundUser = "";
    
    let username = document.querySelector("#createUsername").value;
    let password = document.querySelector("#createPassword").value;

    const request1 = new Request("PHP/login.php");
    fetch(request1)
    .then(r => r.json())
    .then(resource => {
        console.log(resource)
        resource.forEach(user => {
            if(username == user["username"] || password == user["password"]) {
                foundUser = user;
                console.log(user)
            } 
            
        })
        if(foundUser !== ""){
            document.querySelector("#createUsername").value = "";
            document.querySelector("#createPassword").value = "";
            document.querySelector("#message").innerHTML = "Användarnamn eller lösenord finns redan!";
            document.querySelector("#message").style.color = "red";
            
        
            
        } else {
            console.log("good job")

            
            const request = new Request("PHP/createUsers.php"); 
            fetch(request, {
            body: JSON.stringify({username: username, password: password}),
            header: {"Content-Type": "application/json"},
            method: "POST"
            })
                .then(r => r.json())
                .then(resultat => {
                    userGlobal = resultat
                    console.log(resultat)
                    document.querySelector("#createUsername").value = "";
                    document.querySelector("#createPassword").value = "";

                    popUp();
                })
        
            var x = document.querySelector("#Welcome");
            if (x.style.display !== "block") {
                x.style.display = "block";
            } 
        
            var y = document.querySelector("#create");
            var b = document.querySelector("#b");
            if (y.style.display !== "none" && b.style.display !== "none") {
                y.style.display = "none";
                b.style.display = "none";
            } 
            document.querySelector("#name").innerHTML = `Välkommen ${username} till Disney Mystery Club`;
            console.log(username)
        
            document.querySelector("#newUser").innerHTML = `${username}`;
        
        }

    })
    
}





