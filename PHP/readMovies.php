<?php
ini_set("display_errors", 1);

require_once "functions.php";

$filename = "movie.json";

if (!file_exists($filename)) {
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    file_put_contents($filename);
}

$movieJSON = file_get_contents($filename);
$movieData = json_decode($movieJSON, true);

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if ($movieData == []) {
        $movies = [];
        echo json_encode($movies);
    } else {
        echo json_encode($movieData);
    }
}


/*
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

*/


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/movie.css">
    <title>Document</title>
</head>

<body>
    <div id="movieGrid">
 
    </div>

    <script src="JS/movies.js"></script>
</body>
</html>