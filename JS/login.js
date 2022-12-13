document.getElementById("registerNewUser").addEventListener("click", onClick);

//MovieGrid visas när användaren trycker på knappen om utforska teorier..
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


document.querySelector("#submitUser").addEventListener("click", login);

function login (event) {
    event.preventDefault();

    const rqst = new Request("PHP/login.php");
    fetch(rqst)
        .then(r => r.json())
        .then((resource) => {
            resource.forEach((user) => {
                let div = document.createElement("div");
                div.classList.add("welocomeUser");
                div.innerHTML = `
                <p>${user.username} är inloggad!</p>
                `;
            })
        })
}


