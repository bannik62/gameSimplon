document.addEventListener("DOMContentLoaded", function () {
  // MARK:Sections Pages
  // Sections des Pages
  const accueilContent = document.querySelector(".accueil-content");
  const menuContent = document.querySelector(".menu-content");
  const personnagesContent = document.querySelector(".personnages-content");
  const creditsContent = document.querySelector(".credits-content");
  const ajouterPersonnageContent = document.querySelector(
    ".ajouter-personnage-content"
  );

  // MARK:Boutons
  // Boutons
  const commencerButton = document.getElementById("commencerButton");
  const personnagesButton = document.getElementById("personnagesButton");
  const creditsButton = document.getElementById("creditsButton");
  const retourPersonnagesButton = document.getElementById(
    "retourPersonnagesButton"
  );
  const retourCreditsButton = document.getElementById("retourCreditsButton");
  const ajouterPersonnageButton = document.getElementById(
    "ajouterPersonnageButton"
  );
  const retourAjouterPersonnageButton = document.getElementById(
    "retourAjouterPersonnageButton"
  );
  const buttonPlay = document.querySelector(".simplonia-menu-button");

  // MARK:Audio
  // Audio
  const mainMenuTheme = document.getElementById("mainMenuTheme");

  buttonPlay.addEventListener("click", function () {
    // alert("pret a jouer ?");
    const menuBg = document.getElementById("menuBg");
    const simploniaLogo = document.getElementById("simploniaLogo");
    const tablePhp = document.getElementById("tablePhp");
    const canvasGame = document.createElement("canvas");
    const contentFLexMenuGame = document.createElement("div");
    const containerMenuGame = document.createElement("div");

    menuContent.style.display = "none";
    //image dysplay none sans instance ?
    aqua.style.display = "none";
    simploniaLogo.style.display = "none";
    console.log(simploniaLogo);

    tablePhp.style.display = "none";

    const storedHeroes = JSON.parse(localStorage.getItem("heroes"));
    if (storedHeroes) {
      console.log("Héros récupérés depuis le localStorage :", storedHeroes);
    }
    contentFLexMenuGame.cssText = `    
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid red; 
    width: 100vw; 
    height: 500px
    background: rgba(0, 0, 0, 0.5); /* Couleur de fond semi-transparente */
    backdrop-filter: blur(10px); /* Effet de flou */
   ` ;

    // containerMenuGame.

    canvasGame.cssText = `
    border: 2px solid black; 
    width:  80%; 
    min-width:400px
    height: 400px
    background: rgba(0, 0, 0, 0.5); /* Couleur de fond semi-transparente */
    backdrop-filter: blur(10px); /* Effet de flou */
    `;

    menuBg.cssText = ` 
    display : flex,
    alignItems : center,
    `;

     menuBg.appendChild(contentFLexMenuGame);
    contentFLexMenuGame.appendChild(canvasGame);
    contentFLexMenuGame.appendChild(containerMenuGame);
  });

  // MARK:Fonctions
  // Fonctions des affichages des Pages
  commencerButton.addEventListener("click", function () {
    accueilContent.style.display = "none";
    menuContent.style.display = "flex";
    mainMenuTheme.play();
  });

  personnagesButton.addEventListener("click", function () {
    menuContent.style.display = "none";
    personnagesContent.style.display = "flex";
  });

  creditsButton.addEventListener("click", function () {
    menuContent.style.display = "none";
    creditsContent.style.display = "flex";
  });

  retourPersonnagesButton.addEventListener("click", function () {
    personnagesContent.style.display = "none";
    menuContent.style.display = "flex";
  });

  retourCreditsButton.addEventListener("click", function () {
    creditsContent.style.display = "none";
    menuContent.style.display = "flex";
  });

  ajouterPersonnageButton.addEventListener("click", function () {
    personnagesContent.style.display = "none";
    ajouterPersonnageContent.style.display = "flex";
  });

  retourAjouterPersonnageButton.addEventListener("click", function () {
    ajouterPersonnageContent.style.display = "none";
    personnagesContent.style.display = "flex";
  });

  const sprite = document.getElementById("sprite");
  const roleSelector = document.getElementById("role-selector");

  // Ajoute un écouteur d'événements au changement de sélection
  roleSelector.addEventListener("change", function () {
    const selectedOption = roleSelector.options[roleSelector.selectedIndex];
    const hueRotation = selectedOption.getAttribute("data-color") || "0"; // Par défaut, 0

    // Applique la rotation de teinte
    sprite.style.filter = `hue-rotate(${hueRotation}deg)`;
  });
});
