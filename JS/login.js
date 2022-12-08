document.querySelector("#registerNewUser").addEventListener("click", onClick);


function onClick () {
    let register =  document.querySelector("#create");
    register.classList.remove("hidden");

    let login =  document.querySelector("#loginForm");
    login.classList.add("hidden");
    
}
