<?php

ini_set("display_errors", 1);

$filename = "../movie.json";


if (!file_exists($filename)) {
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    file_put_contents($filename);
} 


$currentDogJSON = file_get_contents($filename);
$currentDogData = json_decode($currentDogJSON, true);

//04
if ($_SERVER["REQUEST_METHOD"] == "GET"){

    if ($currentDogData == []) {
        $dogs = [];
        echo json_encode($dogs);
    } else {
        echo json_encode($currentDogData);
    }

} 



?>