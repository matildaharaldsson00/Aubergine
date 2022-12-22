"use strict"


function CreateNewComment (event) {
    //Inbyggd funktion som ser till att sidan inte laddar om  
    event.preventDefault();
    
    let comment = document.querySelector("#comments").value;
    let date = document.querySelector("#comments").value;
    document.querySelector("#comments").value = "";
        
    const request = new Request("PHP/createComment.php"); 
    fetch(request, {
        body: JSON.stringify({comment: comment, movieid: movieGlobal["movieid"], date: date, userid: userGlobal["id"]}),
        header: {"Content-Type": "application/json"},
        method: "POST"
    })
        .then(r => r.json())
        .then( comments => {
            console.log(comments)
            //så att kommentaren ska synas direkt
            showComment (movieGlobal);

        })
}


function showComment (movie) {
    document.querySelector("#hereComesTheComments").innerHTML = "";
    const request = new Request("PHP/readComments.php");
        fetch(request)
            .then(r => r.json())
            .then( comments => {
            
                for (let i = 0; i < comments.length; i++) {
                    if(comments[i].movieid == movie["movieid"]){

                        console.log(comments[i])
                        let comment = comments[i].comment;
                        let date = comments[i].date;
                        let likes = comments[i].likes;
                        let id = comments[i].commentid;
                        //idet på personen som har skrivit kommentaren
                        let userid = comments[i].userid;
                        //fetcha login.php för att få tillgång till alla users 
                        fetch("PHP/login.php")
                            .then(r => r.json())
                            .then(resource => {
                                console.log(resource)
                                //forEach user om useridet ppå den som har skrivit kommentaren är detsamma som 
                                //idet i users.json console.log användarnamnet 
                                resource.forEach(user => {
                                    if (userid == user["id"]){
                                        let username = user["username"]
                                        console.log(username)
                                   
                                        //på så vis kan vi komma åt användarnamnet som finns i users.json
                                        let div = document.createElement("div")
                                        div.innerHTML = `

                                            <h4><img src="Bilder/user.png" class="userIcon2"> ${username}</h4>
                                            <p>${date}</p>
                         
                                        <p>${comment}</p>
                                        <div id="k">
                                        <button class="likeButton" id="likeButton_${id}" name="like" data="${id}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg> ${likes}</button>
                                        </div>
                                        `;
                                        document.querySelector("#hereComesTheComments").appendChild(div);
                                        document.querySelector("#likeButton_" + id + "").addEventListener("click", createNewLike);
                            
                                    }
                                    
                                }) 
                            })
                        }
                    }
                    }       
                    
                )
}


/*

function changeHear1 () {
    var x = document.querySelector(".heartOne");
    if (x.style.display !== "none") {
        x.style.display = "none";
    } 

    var y = document.querySelector(".heartTwo");
    if (y.style.display !== "block") {
        y.style.display = "block";
    } 
}

function changeHear2 () {
    var x = document.querySelector(".heartTwo");
    if (x.style.display !== "none") {
        x.style.display = "none";
    } 

    var y = document.querySelector(".heartOne");
    if (y.style.display !== "block") {
        y.style.display = "block";
    } 
}

*/
function createNewLike (event) {
    event.preventDefault();

    var commentid = event.target.getAttribute("data");

    console.log(commentid);

    const request = new Request("PHP/likes.php"); 
    fetch(request, {
        body: JSON.stringify({commentid: commentid}),
        header: {"Content-Type": "application/json"},
        method: "POST"
        })
        .then(r => r.json())
        .then( likes => {
            console.log(likes);
            event.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg> ${likes} `;
        })
}