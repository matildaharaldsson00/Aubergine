<?php

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
    <form action="PHP/login.php" id="loginForm" method="POST">
        <h3>Logga in</h3>
        <label>Användarnamn</label>
        <input type="text" name="username" id="username" placeholder="Användarnamn">
        <label>Lösenord</label>
        <input type="password" name="password" id="password" placeholder="Lösenord">
        <input type="submit" value="Send" id="submitUser" name="loginSubmit">
        <input type="submit" value="Skapa konto" id="registerNewUser">
    </form>

    <div id="WelcomeBack">
        <h2>Välkommen tillbaka <?php //echo  $username ?></h2>
    </div>

    <script src="JS/index.js"></script>
    <script src="JS/login.js"></script>
</body>
</html>