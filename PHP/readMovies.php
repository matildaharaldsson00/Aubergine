<?php
ini_set("display_errors", 1);

require_once "functions.php";

$filenameMovies = "movie.json";
$requestMethod = $_SERVER["REQUEST_METHOD"];

//error om det inte fungerar att läsa in filmerna
if ($requestMethod != "GET") {
    $error = ["error" => "Invalid HTTP method! (Only GET is allowed"];
    sendJSON($error, 405);
}

$movies = [];

//kolla om filen med filmer finns och läser in innehållet
if(file_exists($filenameMovies)) {
    $json = file_get_contents($filenameMovies);
    $movies = json_decode($json, true);
}

?>