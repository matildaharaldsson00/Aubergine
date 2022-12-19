document.getElementById("registerNewUser").addEventListener("click", onClick);

//MovieGrid visas när användaren trycker på knappen om utforska teorier..



//onClick bestämmer vad som ska synas
function onClick(event) {
    //Ser till att sidan inte laddas om när man skickar ett formulär.
    event.preventDefault()
   
    console.log("hej")
    var x = document.querySelector(".hideregisterPage");
    if (x.style.display !== "block") {
        x.style.display = "block";
    } 

    var y = document.querySelector(".hideloginPage");
    if (y.style.display !== "none") {
        y.style.display = "none";
    } 
}



//==================================================================
//when user clicks sumbit the function logIn is called to check if the user exists in the database
document.querySelector("#submitUser").addEventListener("click", logIn);

function logIn (event) {
    event.preventDefault();

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    //username töms
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";

    const request = new Request("PHP/login.php");
    fetch(request)
        .then(r => r.json())
        .then(resource => {
            console.log(resource)
            resource.forEach(user => {
                if(username == user.username && password == user.password) {
                    console.log(user)
                    userGlobal = user

                    var x = document.querySelector("#WelcomeBack");
                    if (x.style.display !== "block") {
                        x.style.display = "block";
                    } 
                
                    var y = document.querySelector("#loginForm");
                    if (y.style.display !== "none") {
                        y.style.display = "none";
                    } 

                    document.querySelector("#name2").innerHTML = `Välkomen tillbaka ${username} till Disney Mystery Club`;
                    console.log(username)

                    document.querySelector("#newUser").innerHTML = `${username}`;

                    popUp();
                    // spara infomationen om den inloggade användaren i logedInUser
                } else {
                    document.querySelector("#message2").innerHTML = "Fel användarnamn eller lösenord";
                    document.querySelector("#message2").style.color = "red";
                }
                
            })

        })
        
}



