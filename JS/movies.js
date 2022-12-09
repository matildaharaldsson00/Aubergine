"use strict"
/*
renderMovies ();

function renderMovies () {
    const request = new Request ("PHP/readMovies.php");
    fetch(request)
        .then(r=> r.json())
        .then(movie => {
            document.getElementById("movieGrid").innerHTML = "";
            for (let i = 0; i < movie.length; i++) {
                let id = movie[i].id;
                let title = movie[i].title;
                let Img = movie[i].Img;

                let div = document.createElement("div")
                div.innerHTML = `
                <div class ="movie">
                    <p>hej</p>
                    
                </div>   

                `;
                document.getElementById("movieGrid").appendChild(div);
            }

        })
       
}
*/
showDiv();

function showDiv() {
    const request = new Request("PHP/readMovies.php"); 
    fetch(request)
        .then(r => r.json())
        .then( movie => {
            document.getElementById("movieGrid").innerHTML = "";
            for (let i = 0; i < dog.length; i++) {
                //console.log(array[i])
                let title = movie[i].title;
                

                let div = document.createElement("div")
                div.innerHTML = `
                <div class="info">
                    <p>${title}</p>
                </div>
                `;
                document.querySelector("#movieGrid").appendChild(div);
            }
        })
}
