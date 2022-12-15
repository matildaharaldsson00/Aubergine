<?php

ini_set("display_errors", 1);

$filename = "../movie.json";


if (!file_exists($filename)) {
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    file_put_contents($filename);
} 


$currentMovieJSON = file_get_contents($filename);
$currentMovieData = json_decode($currentMovieJSON, true);

//04
if ($_SERVER["REQUEST_METHOD"] == "GET"){

    if ($currentMovieData == []) {
        $movies = [];
        echo json_encode($movies);
    } else {
        echo json_encode($currentMovieData);
    }

} 



?>