document.getElementById("registerNewUser").addEventListener("click", onClick);

//MovieGrid visas när användaren trycker på knappen om utforska teorier..
function showMovies (event) {
    event.preventDefault()
    //välkomen försivnner och filmerna visas
    var b = document.querySelector(".hideMovies");
    if (b.style.display !== "block") {
        b.style.display = "block";
    } 

    var t = document.querySelector("#Welcome");
    if (t.style.display !== "none") {
        t.style.display = "none";
    } 

    
}

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

//when user clicks sumbit the function logIn is called to check if the user exists in the database
document.querySelector("#submitUser").addEventListener("click", logIn);

function logIn (event) {
    event.preventDefault();

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let logedInUser = [];

    fetch("PHP/login.php")
        .then(r => r.json())
        .then(resource => {
            resource.forEach(user => {
                if(username == user.username && password == user.password) {
                    // spara infomationen om den inloggade användaren i logedInUser
                }
            })
        })
}