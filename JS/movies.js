"use strict";

showDiv();



function showDiv() {
    const request = new Request("PHP/readMovies.php"); 
    fetch(request)
        .then(r => r.json())
        .then( movie => {
            document.getElementById("movieGrid").innerHTML = "";
            for (let i = 0; i < movie.length; i++) {
         
                let img = movie[i].img;
                let movieid = movie[i].movieid;
                
                let div = document.createElement("div")
                div.innerHTML = `
                <div class="movie${movieid}">
                    <img src="${img}" alt="picture of movie">
                </div>
                `;
                document.querySelector("#movieGrid").appendChild(div);
                document.querySelector(`.movie${movieid}`).addEventListener("click", onClickMovie)
                
            }
        })
}

function onClickMovie (event) {
    event.preventDefault()
    let picture = event.target.id;
    let id = picture.slice(5);

    const requestReadOne = new Request(`PHP/readOneMovie.php/?id=${id}`);
        fetch(requestReadOne)
            .then(r => r.json())
            .then(movie => {
                
            })
}