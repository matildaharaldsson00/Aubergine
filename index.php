<?php
/*ini_set("display_errors", 1);

$filenameMovies = "movie.php";
require_once "PHP/functions.php";
*/
?>

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
    <link rel="stylesheet" href="CSS/index.css">
    <title>Disney Mystery Club</title>
  </head>
  <body>

    <wrapper id="loginPage"  class="hideloginPage">
      <?php require_once "PHP/login.php";?>
    </wrapper>

    <wrapper id="registerPage" class="hideregisterPage">
      <?php require_once "PHP/createUser.php";?>
    </wrapper>

    <wrapper id="allMovies" class="hideMovies">
      <?php require_once "PHP/readMovies.php";?>
    </wrapper>

    <wrapper id="currentMoviePage">
    </wrapper>

    <wrapper id="profilePage">
    </wrapper>

    <script src="JS/login.js"></script>
    
  </body>
</html>
