<?php 

require_once "functions.php"; 

$requestMethod = $_SERVER["REQUEST_METHOD"];
$onlyMethod = "DELETE";

$user = [];
$fileName = "user.json";

if ($requestMethod != $onlyMethod) {
    header("Content-Type: application/json");
    http_response_code(405);
    echo json_encode(["error" => "wrong method used"]);
    exit();
}

if (file_exists("$fileName")) {
    $json = file_get_contents("$fileName");
    $user = json_decode($json, true);
}

$requestJson = file_get_contents("php://input");
$requestData = json_decode($requestJson, true);

if($requestMethod == "DELETE") {
    if(!isset($requestData["id"])) { 
    $error = ["error" => "bad request"];
    sendJSON($error, 400);
    }

    $id = $requestData["id"];

    foreach($user as $users => $user) {
        if($user["id"] == $id) {
            array_splice($user, $users, 1);
            $json = json_encode($user, JSON_PRETTY_PRINT);
            file_put_contents("$fileName", $json);
            sendJSON($id);
        }
    }

    $error = ["$error" => "not found"];
    sendJSON($error, 404);    
}

?>