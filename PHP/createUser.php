<?php 

ini_set("display_errors", 1);

require_once "PHP/functions.php";

$filename = "users.json";
$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod != "POST") {
    $error = ["error" => "Invalid HTTP method! (Only POST is allowed)"];
    sendJSON($error, 405);
}

$users = [];

if (file_exists($filename)) {
    $json = file_get_contents($filename);
    $users = json_decode($json, true);
}

$requestJSON = file_get_contents("php://input");
$requestData = json_decode($requestJSON, true);

if (!isset($requestData["username"], $requestData["password"])) {
    $error = ["error" => "Bad request!"];
    sendJson($error, 400);
}

$username = $requestData["username"];
$password = $requestData["password"];

if ($username == "" || $password = "") {
    $error = ["error" => "Bad request!"];
    sendJson($error, 400);
}

$highestId = 0;
foreach ($users as $user) {
    if ($user["userId"] > $highestId) {
        $highestId = $user["id"];
    }
}

$nextId = $highestId + 1;

$newUser = ["userId" => $nextId, "username" => $username, "password" => $password];
$users[] = $newUser;
$json = json_decode($user, JSON_PRETTY_PRINT);
file_put_contents($filename, $json);

sendJSON($newUser);

?>