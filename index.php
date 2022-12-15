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

    <wrapper class="allMovies" class="hideMovies">
      <div class="navbar">
        <div>
          <p id="newUser"></p>
          <img src="Bilder/user.png" id="userIcon">
        </div>
      </div>

    
      <div class="center">
        <h1 id="titleh1">Utfroska Konspirationsteorier om Disney</h1>
        <div id="movieGrid"></div>
      </div>

      <div id="currentMoviePage" class="hideMovie">
        <div id="currentMovie"></div>
      </div>

    </wrapper>
   
    

    <wrapper id="profilePage">
    </wrapper>

    <script src="JS/login.js"></script>
    <script src="JS/movies.js"></script>
    
  </body>
</html>
