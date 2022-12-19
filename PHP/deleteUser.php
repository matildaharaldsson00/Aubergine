<?php
ini_set("display_errors", 1);
$filename = "user.json";

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
  // Hämtar användarens id från user databasen
  $username, $password = $_POST['id'];

  // Skickar en delete request to apin för att ta bort 
  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_URL => "user.json",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST => "DELETE",
  ));
  $response = curl_exec($curl);
  $err = curl_error($curl);
  curl_close($curl);

  if ($err) {
    // Om det blir ett fel att radera användaren 
    echo "Error deleting user: $err";
  } else {
    // ladda om sidan när kontot är raderat
    location.reload(true);
  }
}
