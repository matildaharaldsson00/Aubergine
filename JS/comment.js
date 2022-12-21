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
                       // let name = 
                        /*
                        let div = document.createElement("div")
                        div.innerHTML = `
                        <p>${comment}</p>
                        <p>${date}</p>
                        <p>${likes}</p>                    
                        `;
                        document.querySelector("#hereComesTheComments").appendChild(div);
    */
                        let div = document.createElement("div")
                        div.classList.add("commentWrapper")
                        div.innerHTML = `
                        <p class="commentContent">${comment}</p>
                        <p class="commentDate">${date}</p>
                        <button id="likeButton_${id}" class="allLikeButtons" name="like" data="${id}">Likes: ${likes}</button>
                        
                        `;
                        document.querySelector("#hereComesTheComments").appendChild(div);
                        document.querySelector("#likeButton_" + id + "").addEventListener("click", createNewLike, {once: true});
                    }
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
                                        <h5>${username} ${date}</h5>
                                        <p>${comment}</p>
                                        
                                        <button class="likeButton" id="likeButton_${id}" name="like" data="${id}">${likes}</button>
                                        
                                        `;
                                        document.querySelector("#hereComesTheComments").appendChild(div);
                                        document.querySelector("#likeButton_" + id + "").addEventListener("click", createNewLike);
                            
                                    }
                                    
                                }) 
                            })
                        }
                    
                    
                }
            })
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
            event.target.innerHTML = `Likes: ${likes} `;
        })
}