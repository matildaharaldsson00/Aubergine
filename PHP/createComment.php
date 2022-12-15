<?php 
ini_set("display_errors", 1);
$filename = "../comments.json";

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
    

    
        $highestId = 0;
        foreach ($currentCommentData as $comment){
            if($comment["commentid"] > $highestId){
                $highestId = $comment["commentid"];
            }
        }
        $id = $highestId + 1;
        $comment = $requestData["comment"];
        $movieid = $requestData["movieid"];
        $userid = $requestData["userid"];
        $date = date("m.d.y");
       
        $newComment = ["commentid" => $id, "movieid" => $movieid, "comment" => $comment, "date" => $date, "userid" => $userid, "likes" => 0];
        $currentCommentData[] = $newComment;
        $json = json_encode($currentCommentData, JSON_PRETTY_PRINT);
        header("Content-Type: application/json");
        file_put_contents($filename, $json);
        echo json_encode($newComment);
    
    

} 

?>


