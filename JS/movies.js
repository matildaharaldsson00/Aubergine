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
                let id = movie[i].movieid;
                
                let div = document.createElement("div")
                div.innerHTML = `
                <div id="movie">
                    <img class="picture" src="${img}" alt="picture of movie" id="m${id}">
                </div>
                `;
                document.querySelector("#movieGrid").appendChild(div);
                document.getElementById(`m${id}`).addEventListener("click", showMovie)
                
            }
        })
}

function showMovie (event) {
    event.preventDefault()
    let button_id = event.target.id;
    let id = button_id.slice(1);


    const request = new Request(`PHP/readMovies.php/?id=${id}`);
        fetch(request)
            .then(r => r.json())
            .then( movie => {
                console.log(id)
                
                document.getElementById("currentMovie").innerHTML = "";
                //veriablar för nycklarna i movies.js
                //var tvungen att -1 för annars kom filmen efter den man klickar på
                //förstod ej varför men det funkar hihi
                    let title = movie[id-1].title;
                    let info = movie[id-1].info;
                    let premier = movie[id-1].premier;
                    let rating = movie[id-1].rating;
                    let conspiracy = movie[id-1].conspiracy;
                    let img = movie[id-1].img;

                    let div = document.createElement("div")
                    div.innerHTML = `
                    <div id="container">
                        <h1>${title}</h1>
                        <div>
                            <img class="pictureMovie" src="${img}" alt="picture of movie"">
                            <div>
                                <p>${info}</p>
                                <p>${premier}</p>
                                <p>IMDB: ${rating}/10 &#11088</p>
                            </div>
                        </div>

                        <p>"${conspiracy}"</p>

                        <form id="formComment" action="" method="post">
                            <div>
                                <textarea name="comments" id="comments" >Skriv en kommentar!
                                </textarea>
                            </div>
                            <input type="submit" value="Submit" id="submitComment">
                        </form>

                        
                        <h4>Här kommer kommentarer!</h4>
                      
                    </div>
                    `;
                    document.getElementById("currentMovie").appendChild(div);
                    console.log(title)  
            })
    //visa endast en film
    var b = document.querySelector(".hideMovie");
    if (b.style.display !== "block") {
        b.style.display = "block";
    } 

    var t = document.querySelector(".center");
    if (t.style.display !== "none") {
        t.style.display = "none";
    } 

    
}

/*
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
*/