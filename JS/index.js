
//visa alla filmer

renderMovies();

function renderMovies() {
    document.getElementById("moviesPage").innerHTML = "";
    const get_rqst = new Request("readMovies.php");

    fetch(get_rqst)
        .then((response) => response.json())
        .then((resource) => {
            let div = document.createElement("div");
            div.classList.add("moviesDiv");
            div.innerHTML = `
            <p ckass="title">${movie.title}</p>
            <p class="info">${movie.info}</p>
            <p class="premie">${movie.premie}</p>
            <p class="rating">${movie.rating}</p>
            `;

            document.getElementById("moviePage").appendChild(div);
        })
}