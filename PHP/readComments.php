<?php
ini_set("display_errors", 1);

$filename = "../comments.json";


if (!file_exists($filename)) {
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    file_put_contents($filename);
} 

$currentCommentJSON = file_get_contents($filename);
$currentCommentData = json_decode($currentCommentJSON, true);

//04
if ($_SERVER["REQUEST_METHOD"] == "GET"){

    if ($currentCommentData == []) {
        $comments = [];
        echo json_encode($comments);
    } else {
        echo json_encode($currentCommentData);
    }

} 
?>