<?php

require_once "functions.php";

$loginUser = [];

if (isset($_GET["username"]) && isset($_GET["password"])) {
    $username = $_GET["username"];
    $password = $_GET["password"];
    $json = file_get_contents("PHP/user.json");
    $users = json_decode($json, true);

    foreach ($users as $user) {
        $loginUser = $user[$username] && $user[$password];
    }
}

// $filename = "PHP/user.json";
// $requestMethod = $_SERVER["REQUEST_METHOD"];

// if ($requestMethod != "GET") {
//     $error = ["error" => "Invalid HTTP method! (Only GET is allowed)"];
//     sendJSON($error, 405);
// }

// $users = [];

// if (file_exists($filename)) {
//     $json = file_get_contents($filename);
//     $users = json_decode($json, true);
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
        <input type="text" name="username" id="username" placeholder="Användarnamn">
        <label>Lösenord</label>
        <input type="password" name="password" id="password" placeholder="Lösenord">
        <input type="submit" value="Send" id="submitUser">
        <input type="submit" value="Skapa konto" id="registerNewUser">
    </form>

    <script src="JS/login.js"></script>
</body>
</html>