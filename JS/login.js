document.querySelector("#registerNewUser").addEventListener("click", onClick);


function onClick () {
    let register =  document.querySelector("#create");
    register.classList.remove("hidden");

    let login =  document.querySelector("#loginForm");
    login.classList.add("hidden");
    
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