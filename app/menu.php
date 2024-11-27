<?php

require_once './Classes-php/Manager.class.php';
require_once './settings/db.php';
$manager = new App\Classes\Manager($db);


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {
  // Appel de la méthode pour créer le héros
  $manager->createHero();

  // Redirection pour éviter la resoumission du formulaire
  header('Location: ' . $_SERVER['PHP_SELF']);
  exit;
}

if (isset($_GET['action']) && $_GET['action'] === 'getHeroes') {
  $manager->getHeroJSON(); // Retourne les données en JSON
  exit;
}

?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="./style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
    rel="stylesheet" />
    <script type="module" src="./script.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r152/three.min.js"></script>

  
  
</head>

<body class="menu-bg">
  <?
  // MARK: Accueil
  ?>
  <!-- ------------ -->
  <!-- Page Accueil -->
  <!-- ------------ -->
  <div class="accueil-content">
    <!-- Logo Simplonia -->
    <img
      id="simploniaLogo"
      src="./src/img/SimploniaLogo.png"
      alt="SimploniaTitle" />
    <!-- Bouton Commencer -->
    <div class="simplonia-accueil-button" id="commencerButton">
      <img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" />
      <div class="text">Commencer</div>
    </div>
  </div>

  <?
  // MARK: Menu Principal
  ?>
  <!-- ------------------- -->
  <!-- Page Menu Principal -->
  <!-- ------------------- -->
  <div class="menu-content">
    <!-- Logo Simplonia -->
    <img
      id="simploniaLogo"
      src="./src/img/SimploniaLogo.png"
      alt="SimploniaTitle" />
    <!-- Bouton Jouer -->
    <div class="simplonia-menu-button">
      <img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" />
      <div class="text">Jouer</div>
    </div>

    <!-- Bouton Personnages -->
    <div class="simplonia-menu-button" id="personnagesButton">
      <img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" />
      <div class="text">Personnages</div>
    </div>

    <!-- Bouton Crédits -->
    <div class="simplonia-menu-button" id="creditsButton">
      <img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" />
      <div class="text">Crédits</div>
    </div>
  </div>

  <?
  // MARK: Options






  // MARK: Personnage
  ?>
  <!-- ------------------------ -->
  <!-- Page Options Personnages -->
  <!-- ------------------------ -->
  <div class="personnages-content">
    <!-- Logo Simplonia -->
    <img
      id="simploniaLogo"
      src="./src/img/SimploniaLogo.png"
      alt="SimploniaTitle" />
    <!-- Bouton Ajouter Personnage -->
    <div class="simplonia-personnages-button" id="ajouterPersonnageButton">
      <img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" />
      <div class="text">Ajouter Personnage</div>
    </div>

    <!-- Bouton Modifier Personnage -->
    <div class="simplonia-personnages-button">
      <img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" />
      <div class="text">Modifier Personnage</div>
    </div>

    <!-- Bouton Supprimer Personnage -->
    <div class="simplonia-personnages-button">
      <img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" />
      <div class="text">Supprimer Personnage</div>
    </div>

    <!-- Bouton Retour dans Personnages -->
    <div
      class="simplonia-personnages-retour-button"
      id="retourPersonnagesButton">
      <img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" />
      <div class="text">Retour</div>
    </div>
  </div>

  <?
  // MARK: Crédits
  ?>
  <!-- ------------ -->
  <!-- Page Crédits -->
  <!-- ------------ -->
  <div class="credits-content">
    <!-- Logo Simplonia -->
    <img
      id="simploniaLogo"
      src="./src/img/SimploniaLogo.png"
      alt="SimploniaTitle" />

    <!-- Crédits des codeurs -->
    <div class="text-credits">
      <p>
        Jeu créé par :<br /><br /><br />
        BROUTIN Florent<br /><br />
        CRÉTEUR Térence<br /><br />
        VANHERZECKE Yohann
      </p>
    </div>

    <!-- Bouton Retour dans Crédits -->
    <div class="simplonia-credits-retour-button" id="retourCreditsButton">
      <img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" />
      <div class="text">Retour</div>
    </div>
  </div>

  <?
  // MARK: Ajouter






  // MARK: Personnage
  ?>
  <!-- ----------------------- -->
  <!-- Page Ajouter Personnage -->
  <!-- ----------------------- -->
  <div class="ajouter-personnage-content">
    <!-- Logo Simplonia -->
    <img
      id="simploniaLogo"
      src="./src/img/SimploniaLogo.png"
      alt="SimploniaTitle" />
    <!-- Titre de la Page -->
    <div class="simplonia-ajouter-personnage-title">
      <img style=" width:1020px; height: 130px" src="./src/img/SimploniaBouton.png" alt="SimploniaTitle" />
      <div class="text">Ajouter Personnage</div>
    </div>
    <!-- Contenu de la Page -->
    <?php
    $manager->getForm();
    ?>
  </div>

  <?
  // MARK: Main Menu






  // MARK: Theme
  ?>
  <!-- Musique Menu Principal -->
  <audio id="mainMenuTheme" src="./src/audio/Basileus.mp3" loop></audio>

 

</body>

</html>