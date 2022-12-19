<?php
ini_set("display_errors", 1);
$filename = "user.json";
// Får det nya lösenordet från användaren 
$newPassword = $_POST['new_password'];

// Hashar det nya lösenordet genom att använda password_hash
$hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

// sparar det nya lösenordet i "user.json" 
file_put_contents('user.json', $hashedPassword);

echo "Password updated successfully!";

?>
