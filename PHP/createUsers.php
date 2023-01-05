<?php

ini_set("display_errors", 1);
$filename = "../user.json";

// if file user.json does not exist create it!
if (!file_exists($filename)) {
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    header("Content-Type: application/json");
    file_put_contents($filename, json_encode([]));
} 

if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $currentUserJSON = file_get_contents($filename);
    $currentUserData = json_decode($currentUserJSON, true);
    
    // Get request (post) data and decode from JSOn to PHP
    $requestJSON = file_get_contents("php://input");
    $requestData = json_decode($requestJSON, true);

   
        $highestId = 0;
        foreach ($currentUserData as $user){
            if($user["id"] > $highestId){
                $highestId = $user["id"];
            }
        }
        $id = $highestId + 1;
        //the other parameters...
        $username = $requestData["username"];
        $password = $requestData["password"];


        $newUser = ["id" => $id, "username" => $username, "password" => $password];
        $currentUserData[] = $newUser;
        $json = json_encode($currentUserData, JSON_PRETTY_PRINT);
        //defienra att det vi skickar ut är json 
        header("Content-Type: application/json");
        file_put_contents($filename, $json);
        echo json_encode($newUser);

} 

?>