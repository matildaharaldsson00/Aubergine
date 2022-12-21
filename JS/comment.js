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
                        div.innerHTML = `
                        <p>${comment}</p>
                        <p>${date}</p>
                        <button id="likeButton_${id}" name="like" data="${id}">Likes: ${likes}</button>
                        
                        `;
                        document.querySelector("#hereComesTheComments").appendChild(div);
                        document.querySelector("#likeButton_" + id + "").addEventListener("click", createNewLike, {once: true});
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