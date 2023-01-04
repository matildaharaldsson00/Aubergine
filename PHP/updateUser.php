<?php
ini_set("display_errors", 1);
$filename = "../user.json";

// om den efterfrågade metoden är put ska följande utföras 
if ($_SERVER["REQUEST_METHOD"] == "PUT"){
    //hämtar datan som finns i filen
    $currentUserJSON = file_get_contents($filename);
    $currentUserData = json_decode($currentUserJSON, true);

    $requestJSON = file_get_contents("php://input");
    $requestData = json_decode($requestJSON, true);
 
   
    $id = $requestData["id"];
   
        foreach ($currentUserData as $index => $user){
            if ($user["id"] == $requestData["id"]){
                array_splice($currentUserData, $index, 1);
                $users = ["id" => $requestData["id"], "username" => $requestData["username"], "password" => $requestData["password"]];
                $currentUserData[] = $users;
                //sorteras i ordning efter idet. 1,2,3 osv. Annars behåller användaren inte sin "plats".
                //den sorterar en array baserat på den FÖRSTA nyckelns innehåll
                array_multisort($currentUserData);
                file_put_contents($filename, json_encode($currentUserData, JSON_PRETTY_PRINT));
                echo json_encode($users);
            }
        }

}

?>
