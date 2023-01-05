<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="CSS\styling.css">
    <link rel="stylesheet" type="text/css" href="CSS\profile.css">
    <link rel="stylesheet" type="text/css" href="CSS\register.css">
    <link rel="stylesheet" type="text/css" href="CSS\movies.css">
    <link rel="stylesheet" type="text/css" href="CSS\login.css">
    <link rel="stylesheet" type="text/css" href="CSS\index.css">
    <link rel="stylesheet" type="text/css" href="CSS\popUp.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Disney Mystery Club</title>
  </head>
  <body>
    <div class="paris"> <img src="Bilder\paris.png" alt="" class="hideCastle"> </div>
    <wrapper 
    id="loginPage"  class="hideloginPage">
    <h2 id="n">Välkommen till Mystery Disney Club!</h2>
      <form action="PHP/login.php" id="loginForm" method="GET">
          <h3>Logga in</h3>
          <label>Användarnamn</label>
          <input type="text" name="username" id="username" placeholder="Användarnamn">
          <label>Lösenord</label>
          <input type="password" name="password" id="password" placeholder="Lösenord">
          <input type="submit" value="Send" id="submitUser" name="loginSubmit">
          <input type="submit" value="Skapa konto" id="registerNewUser">
          <p id="message2"></p>
      </form>

      <div id="WelcomeBack">
          <div><style>
  h2 {color:black;}
</style>
              <h2  id="name2"></h2>
              <button id="conspiracyTheoriesButton2">Utforska konspirationsteorier här!</button>
          </div>
      </div>
    </wrapper>

    <wrapper id="registerPage" class="hideregisterPage">
    <h2 id="b">Välkommen till Mystery Disney Club!</h2>
      <main>
          <div>
              <form id="create" class="hidden" method="POST">
                  <label"><h3>Registrera ny användare</h3></label>
                  <label>Användarnamn</label>
                  <input type="text" placeholder="Skriv ett användarnamn" id="createUsername">
                  <label>Lösenord</label>
                  <input type="password" placeholder="Skriv ett lösenord" id="createPassword">
                  <input type="submit" value="Send" id="submit">
                  <p id="message"></p>
              </form>
          </div>
      </main>

      <div id="Welcome">
        <div>
            <h2 id="name"></h2>
            <button id="conspiracyTheoriesButton">Utforska konspirationsteorier här!</button>
        </div>
      </div>
    </wrapper>
    
    <wrapper class="allMovies" class="hideMovies">

    <div class="navbar">
      <img src="Bilder/home.png" id="goBack" class="homeIcon">
      <div>
        <p id="newUser"></p>
        <img src="Bilder/user.png" id="myBtn" class="userIcon">
      </div>  
      <div id="myModal" class="modal">
    <!-- Modal content -->
        <div class="modal-content">
          <span class="close">&times;</span>
          <div id="popUpUser"></div>
          <div class ="deleteButton"></div>
        </div>
      </div>
 
    </div>


    <!-- /////// 
    <div class="navbar">
      <input id = "logOut" type="button" value="Logga ut" onClick="window.location.reload(true)">
        <div class="profileOverlay" onclick="showPopup()">Click me!
        <span class ="popupContent" id = "popupItem">Hello, change password</span>  
      </div>
      


          <p id="newUser"></p>
          <img src="Bilder/user.png" id="userIcon">
        </div>
      </div>-->
      

    
      <div class="center">
        <style> h1 {color:black; padding-bottom:35px;} </style>
        <h1 id="titleh1">Utforska Konspirationsteorier om Disney</h1>
        <div id="movieGrid"></div>
      </div>

      <div id="currentMoviePage" class="hideMovie">
        <div id="currentMovie"></div>
      </div>

    </wrapper>
   
    

    <wrapper id="profilePage">
    </wrapper>

    <script src="JS/index.js"></script>
    <script src="JS/login.js"></script>
    <script src="JS/profile.js"></script>
    <script src="JS/movies.js"></script>
    <script src="JS/comment.js"></script>
    <script src="JS/popUp.js"></script>
  </body>
</html>