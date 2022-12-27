<?php
ini_set("display_errors", 1);

$filename = "../user.json";

if ($_SERVER["REQUEST_METHOD"] == "DELETE"){

    $currentUserJSON = file_get_contents($filename);
    $currentUserData = json_decode($currentUserJSON, true);

    $requestJSON = file_get_contents("php://input");
    $requestData = json_decode($requestJSON, true);

    $id = $requestData["id"];

    // kontrollerar om nyckeln "id" finns
    // om inte felmeddelande i $error variabeln 
    // skickar json-svar med satuskod 400 bad request
    if (!isset($requestData["id"])) {
        $error = ["error" => "Bad request!"];
        sendJSON($error, 400);
    }

        //For each user 
        foreach ($currentUserData as $index => $user){
            $emptyObjekt;
            if ($user["id"] == $id){
                $emptyObjekt = $user;
                array_splice($currentUserData, $index, 1);
                $json = json_encode($currentUserData, JSON_PRETTY_PRINT);
                file_put_contents($filename, $json);
                echo json_encode($id);
            }
        }
    
    //felmeddelnade och statuskod 404 not found
    $error = ["error" => "User not found"];
    sendJSON($error, 404);

}

?>
