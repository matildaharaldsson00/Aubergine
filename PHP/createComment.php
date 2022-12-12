<?php
ini_set("display_errors", 1);
$filename = "comments.json";

if (!file_exists($filename)) {
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    header("Content-Type: application/json");
    file_put_contents($filename, json_encode([]));
} 

if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $currentCommentJSON = file_get_contents($filename);
    $currentCommentData = json_decode($currentCommentJSON, true);
    
    // Get request (post) data and decode from JSOn to PHP
    $requestJSON = file_get_contents("php://input");
    $requestData = json_decode($requestJSON, true);

    // If one of the parameters is missing 
   //$requestData[$name], $requestData[$breed], $requestData[$age]
    
    if (!isset($requestData["movieId"], $requestData["commentId"],$requestData["userId"],$requestData["date"],$requestData["comment"])){
        http_response_code(400);
    }
    else { 
        $highestId = 0;
        foreach ($currentCommentData as $comment){
            if($comment["commentId"] > $highestId){
                $highestId = $comment["commentId"];
            }
        }
        $id = $highestId + 1;
        //the other parameters...
        $comment = $requestData["commentId"];
        $userId = $requestData["userId"];
        $date = $requestData["date"];
        $movie = $requestData["movieId"];

        $newComment = ["movieId" => $id, "userId" => $username, "date" => $date];
        $currentCommentData[] = $newComment;
        $json = json_encode($currentCommentData, JSON_PRETTY_PRINT);
        file_put_contents($filename, $json);
        echo json_encode($newComment);
    
    } 

} 

?>
