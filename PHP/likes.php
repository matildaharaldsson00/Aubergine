<?php

//Vi valde att behålla llikes.php och likes.json för att visa att vi förökte
//Det var svårt att klura ut på egen hand så vi hoppade över den biten. 
ini_set("display_errors", 1);
$filename = "../comments.json";


if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $currentCommentJSON = file_get_contents($filename);
    $currentCommentData = json_decode($currentCommentJSON, true);
    
    // Get request (post) data and decode from JSOn to PHP
    $requestJSON = file_get_contents("php://input");
    $requestData = json_decode($requestJSON, true);

    // If one of the parameters is missing 
   //$requestData[$name], $requestData[$breed], $requestData[$age]
    
    $comments = [];

    if (file_exists($filename)) {
        $json = file_get_contents($filename);
        $comments = json_decode($json, true);
    }
    
   foreach ($comments as $index => $comment) {
        if ($comment["commentid"] == $requestData["commentid"]) {
            $comment["likes"] = $comment["likes"] + 1;
            $comments[$index] = $comment;

        $json = json_encode($comments, JSON_PRETTY_PRINT);
        file_put_contents($filename, $json);
        echo json_encode($comment["likes"]);
        }
    }

} 

?>