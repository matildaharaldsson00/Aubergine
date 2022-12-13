"use strict"
//renderMovies();

const rqst = new Request("../PHP/readMovies.php");
fetch(rqst)
    .then(r => r.json())
    .then(console.log)

       

