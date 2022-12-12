<?php 

require_once "functions.php"; 

$requestMethod = $_SERVER["REQUEST_METHOD"];
$onlyMethod = "DELETE";

$user = [];
$fileName = "dogs.json";

if ($requestMethod != $onlyMethod) {
    header("Content-Type: application/json");
    http_response_code(405);
    echo json_encode(["error" => "wrong method used"]);
    exit();
}

if (file_exists("$fileName")) {
    $json = file_get_contents("$fileName");
    $dogs = json_decode($json, true);
}

$requestJson = file_get_contents("php://input");
$requestData = json_decode($requestJson, true);

if($requestMethod == "DELETE") {
    if(!isset($requestData["id"])) { 
    $error = ["error" => "bad request"];
    sendJSON($error, 400);
    }

    $id = $requestData["id"];

    foreach($dogs as $number => $dog) {
        if($dog["id"] == $id) {
            array_splice($dogs, $number, 1);
            $json = json_encode($dogs, JSON_PRETTY_PRINT);
            file_put_contents("$fileName", $json);
            sendJSON($id);
        }
    }

    $error = ["$error" => "not found"];
    sendJSON($error, 404);    
}

?>