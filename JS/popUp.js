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
  

  <label>Ändra Lösenord</label>
  <input type="text" value="${userGlobal["password"]}" id="updatePassword">

  <div class="popupButtons">
    <input id ="newsubmit" class="User" type="button" value="Uppdatera lösenord">
    <input id ="_${userGlobal["id"]}" class="deleteUser" type="button" value="Radera konto">
    <input id = "logOut" class="User" type="button" value="Logga ut" onClick="window.location.reload(true)">
  </div>
  `;

  //edit button
  document.getElementById("newsubmit").addEventListener("click", editUser)
  //delete button
  document.getElementById(`_${userGlobal["id"]}`).addEventListener("click", deleteUser)
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
  
            if (confirm('Are you sure you want to delete your account')) {
              // delete it!
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
  
              } else {
                  // Do nothing!
                  console.log('Do nothing');
              }
                    //user = userGlobal["username"]
                    //alert(`${user} ditt konto raderades nyss`); 
                   // window.location.reload(true);
                   
          }
      }

  })
}

function editUser(event) {
  event.preventDefault()
 
  let id = userGlobal["id"]
  let name = userGlobal["username"]
  const request = new Request("PHP/login.php");
      fetch(request)
          .then(r => r.json())
          .then(user => {
                user = userGlobal
                let newPassword = document.getElementById("updatePassword").value;
                console.log(newPassword)
                  fetch("PHP/updateUser.php", {
                      method: "PUT",
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({id: id, username: name, password: newPassword})
                  })
                    .then(r => r.json())
                    .then(user => {
                      alert("Du ändrade nyss ditt lösenord")
                      modal.style.display = "none";
                    })     
              
          })

}
