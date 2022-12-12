<?php

require_once "functions.php";

$filename = "PHP/user.json";
$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod != "GET") {
    $error = ["error" => "Invalid HTTP method! (Only GET is allowed)"];
    sendJSON($error, 405);
}

$users = [];

if (file_exists($filename)) {
    $json = file_get_contents($filename);
    $users = json_decode($json, true);
}

$requestJSON = file_get_contents("php://input");
$requestData = json_decode($requestJSON, true);

$username = $requestData["username"];
$password = $requestData["password"];

// fungerar inte, men ska gå igenom alla users för att se om användarnamnet stämmer 
// for($users as $user) {
//     if ($username == $valueUsername && $password == $valuePassword) {
    
//     }
// }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/login.css">
    <title>Document</title>
    
</head>
<body>
    <form id="loginForm" >
        <h3>Logga in</h3>
        <label>Användarnamn</label>
        <input type="text" name="username" id="username" placeholder="Användarnamn" value="<?php $valueUsername ?>">
        <label>Lösenord</label>
        <input type="password" name="password" id="password" placeholder="Lösenord" value="<?php $valuePassword ?>">
        <input type="submit" value="Send" id="submitUser">
        <input type="submit" value="Skapa konto" id="registerNewUser">
    </form>

    <script src="JS/login.js"></script>
</body>
</html>