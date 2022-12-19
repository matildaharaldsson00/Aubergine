"use strict"
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style. alignItems = "center";
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function popUp (){
  document.getElementById("popUpUser").innerHTML = `<h4>${userGlobal["username"]}</4>`;
  document.querySelector(".deleteButton").innerHTML = `
  <label>Användarnamn</label>
  <input type="text" placeholder="${userGlobal["username"]}" id="updateUsername">
  <label>Lösenord</label>
  <input type="password" placeholder="${userGlobal["password"]}" id="updatePassword">
  <input id = "submitChange" type="button" value="Skicka">
  <input id= "-${userGlobal["id"]}" type="button" value="Radera">
  `;

  //delete button
  document.getElementById(`-${userGlobal["id"]}`).addEventListener("click", deleteUser)
}


function deleteUser(event) {
  event.preventDefault()
  const request = new Request("PHP/login.php");
  fetch(request)
      .then(r => r.json())
      .then(user => {
        console.log(user)
        
        let button_id = event.target.id;
        //med slice(1) tar vi bort knabbetns "-" så idet endast blir siffran
        //alltså användarens id
        let buttonId = button_id.slice(1);

        for (let i = 0; i < user.length; i++) {
          if (user[i].id == buttonId) {
    
              fetch("PHP/deleteUser.php", {
                  method: "DELETE",
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({id: buttonId})
              })
                  .then(r => r.json())
                  .then(user => {
                    user = userGlobal["username"]
                    alert(`${user} ditt konto raderades nyss`); 
                    window.location.reload(true);
                  })  
          }
      }

  })
}