<?php
ini_set("display_errors", 1);

//status kod 

$filename = "users.json";

function sendJSON ($data, $statusCode = 200) {
    header("Content-Type: application/json");
    http_response_code($statusCode);
    echo json_encode($data);
    exit();
}
?>