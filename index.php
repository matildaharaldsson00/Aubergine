<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="CSS/home.css">
    <link rel="stylesheet" href="CSS/register.css">
    <link rel="stylesheet" href="CSS/profile.css">
    <link rel="stylesheet" href="CSS/movies.css">
    <link rel="stylesheet" href="CSS/login.css">
    <link rel="stylesheet" href="CSS/welcome.css">
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
      <header>
        <div>
          <p id="newUser"></p>
          <img src="Bilder/user.png" alt="user" id="user">
        </div>
      </header>

      <h1 id="titleh1">Utfroska Konspirationsteorier om Disney</h1>
      <div class="center">
        <div id="movieGrid"></div>
      <div>
    </wrapper>
   
    <wrapper id="currentMoviePage" class="hideMovie">
      <p>en film</p>
    </wrapper>

    <wrapper id="profilePage">
    </wrapper>

    <script src="JS/login.js"></script>
    <script src="JS/movies.js"></script>
    
  </body>
</html>
