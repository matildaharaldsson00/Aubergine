<?php
ini_set("display_errors", 1);

//require_once "PHP/functions.php";

$filename = "../movie.json";

if (!file_exists($filename)) {
    //$_SERVER är en array där request metoden är nyckeln
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    file_put_contents($filename, []);
}

$movieJSON = file_get_contents($filename);
$movieData = json_decode($movieJSON, true);

if ($_SERVER["REQUEST_METHOD"] == "GET") {
  
    //header('Content-Type: application/json');
    http_response_code(200);
    //echo json_encode($movieData);
    
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
    <link rel="stylesheet" href="../CSS/movie.css">
    <title>Document</title>
</head>

<body>
    <div id="wrapper">
    <div id="movieGrid"><?php
 foreach($movieData as $movie) {
    //echo $movie["title"];
   ?>
    <img src="<?php  echo $movie["Img"]; ?>">
    <?php
 }
 ?>
 
    </div>

    <script src="../JS/movies.js"></script>
</body>
</html>