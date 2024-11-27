import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';

document.addEventListener("DOMContentLoaded", function () {
  console.log("hello" );
  
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
  if (!buttonPlay) {
    console.error("Le bouton 'buttonPlay' est introuvable dans le DOM !");
    return;
  }

  // Masquer les éléments existants
  const menuBody = document.getElementById("menuBg");
  const simploniaLogo = document.getElementById("simploniaLogo");
  const tablePhp = document.getElementById("tablePhp");

  menuContent.style.display = "none";
  aqua.style.display = "none";
  tablePhp.style.display = "none";

  // Créer les nouveaux éléments
  const contentFlexMenuGame = document.createElement("div");
  const containerMenuGame = document.createElement("div");
  const canvasGame = document.createElement("canvas");
  canvasGame.id ="gameCanvas"

  // Appliquer le CSS aux nouveaux éléments
  menuBg.style.cssText = `
    display: flex;
    align-items: center;
    flex-direction: column;
  `;
  function loadScript(src) {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = src;
    document.head.appendChild(script); 
  }
  
  
  // loadScript('./three/godMode.js');
  loadScript('./three/managerScriptPrincipal.mjs');
  loadScript('./three/interfaceLogique.js');
  loadScript('./three/gameLogique.js');


  contentFlexMenuGame.style.cssText = `
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid yellow;
    width: 99vw;
    height: 500px;
    background: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(10px);
  `;

  containerMenuGame.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 30%;
    min-width: 400px;
    height: 400px;
    overflow-y: auto;
    padding: 15px;
    border: 2px solid yellow;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: inset 20px 20px 60px #bebebe,
    inset -20px -20px 60px #ffffff;
  `;

  canvasGame.style.cssText = `
    border: 2px solid black;
    width:700px
    min-width: 700px;
    height: 600px;
    background: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(10px); 
  `;

  simploniaLogo.style.cssText = `    
width: 40%;
position:absolute;
top:-65px;
z-index: 1;

`
  // Ajouter les nouveaux éléments au DOM
  menuBody.appendChild(simploniaLogo)
  menuBody.appendChild(contentFlexMenuGame);
  contentFlexMenuGame.appendChild(containerMenuGame);
  contentFlexMenuGame.appendChild(canvasGame);

  // Récupérer les héros depuis le localStorage
  const storedHeroes = JSON.parse(localStorage.getItem("heroes"));
  if (storedHeroes) {
    console.log("Héros récupérés depuis le localStorage :", storedHeroes);

    // Mapper les héros en cartes
    storedHeroes.forEach(hero => {
      const heroCard = document.createElement("div");
      heroCard.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100px;
        height: 150px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        text-align: center;
        font-size: 12px;
      `;

      // Ajouter le contenu de la carte
      heroCard.innerHTML = `<div>
        <strong>${hero.name_Hero || "Inconnu"}</strong>
        <p>XP: ${hero.xp_Hero || 0}</p>
        <p>Niveau: ${hero.lvl_Hero || 0}</p>
        <p>Rôle: ${hero.role_name || "N/A"}</p>
        </div>
      `;

      // Ajouter la carte au conteneur
      containerMenuGame.appendChild(heroCard);
    });
  } else {
    console.warn("Aucun héros trouvé dans le localStorage.");
  }
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
