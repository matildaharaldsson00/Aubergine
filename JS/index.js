
// const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const object = {};
    formData.forEach((value, key) => (object[key] = value));
    const json = JSON.stringify(object);

    const add_rqst = new Request("createUser.php", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: json
    });

    fetch(add_rqst)
        .then(response => response.json())
        .then(resource => {
            console.log(resource)
            
            if(resource.erro) {
                alert("An error occured, try again!")
            } else {
                document.getElementById("username").value = "";
                document.getElementById("password").value = "";
            }
        });
});