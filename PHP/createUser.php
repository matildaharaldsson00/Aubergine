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
    <title>Document</title>

    <style>
        body{
            height: 100vh;
            margin:0;
            text-align: center;
            justify-content: center;
        }
        #create{
            margin:0;
            display: flex;
            text-align: center;
            justify-content: center;  
        }

    </style>
</head>
<body>
    <main>
        <h1>Users</h1>
        <div>
            <form id="create" method="POST">
                <label"><h4>Registerara ny användare</h4></label>
                <input type="text" placeholder="Skriv ett användarnamn" id="username">
                <input type="password" placeholder="Skriv ett lösenord" id="password">
                <input type="submit" value="Send" id="submit">
            </form>
        </div>
        <div id="resultat">

        </div>
    </main>
</body>
</html>