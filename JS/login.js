document.getElementById("registerNewUser").addEventListener("click", onClick);


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
            //TO_DO: 
            //ska hämta användarens id, inte klart!
            resource.id;
        })
}
