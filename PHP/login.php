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