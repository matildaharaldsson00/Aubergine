<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="CSS/home.css">
    <link rel="stylesheet" href="CSS/register.css">
    <link rel="stylesheet" href="CSS/profile.css">
    <link rel="stylesheet" href="CSS/movie.css">
    <link rel="stylesheet" href="CSS/login.css">
    <link rel="stylesheet" href="CSS/welcome.css">
    <link rel="stylesheet" href="CSS/movies.css">
    <title>Disney Mystery Club</title>
  </head>
  <body>

    <wrapper id="loginPage">
      <?php require_once "PHP/login.php";?>
    </wrapper>

    <wrapper id="registerPage">
    <?php require_once "PHP/createUser.php";?>
    </wrapper>

    <wrapper id="currentMoviePage">
    </wrapper>

    <wrapper id="profilePage">
    </wrapper>


    
  </body>
</html>
