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
//skapar en låda men lägger inget i lådan
// deklarera en tom variabel


function CreateNewUser (event) {
    //Inbyggd funktion som ser till att sidan inte laddar om  
    //event innehåller information om vad som nyss har hänt MÅSTE vara event
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

//document.querySelector("#logOut").addEventListener("click", logOut)






