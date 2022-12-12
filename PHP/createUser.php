<?php

ini_set("display_errors", 1);
$filename = "user.json";

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

    // If one of the parameters is missing 
   //$requestData[$name], $requestData[$breed], $requestData[$age]
    
    if (!isset($requestData["username"], $requestData["password"])){
        http_response_code(400);
    }
    else { 
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
        file_put_contents($filename, $json);
        echo json_encode($newUser);
    
    } 

} 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/register.css">
    <title>Document</title>
</head>
<body>
    <main>

        <div>
            <form id="create" class="hidden" method="POST">
                <label"><h3>Registrera ny användare</h3></label>
                <label>Användarnamn</label>
                <input type="text" placeholder="Skriv ett användarnamn" id="createUsername">
                <label>Lösenord</label>
                <input type="password" placeholder="Skriv ett lösenord" id="CreatePassword">
                <input type="submit" value="Send" id="submit">
            </form>
        </div>
        
    </main>
    <script src="JS/index.js"></script>
    
</body>
</html>