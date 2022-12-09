document.getElementById("registerNewUser").addEventListener("click", onClick);


function onClick() {
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

