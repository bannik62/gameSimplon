import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';

import { SceneManager } from './managers/SceneManager.mjs';
import { LightManager } from './managers/ClassLightManager.mjs';
import { CameraManager } from './managers/ClassCameraManager.mjs';
// import { PlayerObject } from './src/managers/objectsmanager/PlayerObject.mjs';
console.log("manager !");

// Création de la scène
const sceneManager = new SceneManager();
const scene = sceneManager.getScene();

//modification de la scéne 
sceneManager.addMap(600, 600, "./three/assets/textures/map.jpg");
sceneManager.setRotation(Math.PI / 5, 0, 0);
sceneManager.setSky("./three/assets/textures/ciel.jpg") // Laisser à configurer plus tard
sceneManager.setBackground("blue");
sceneManager.addHelpers(
  600, // Taille de la grille
  26, // Nombre de divisions
  { color1: 0xff0000, color2: 0x00ff00 }, // Couleurs : rouge et vert
  10, // Taille des axes
  { x: 0, y: 0.9, z: 0 } // Position de la grille
);
// Vérification après ajout
console.log('Grille initialisée :', sceneManager.gridHelper);
// Initialisation des lumières (sans les activer immédiatement)
const lightManager = new LightManager(scene);
lightManager.startLight()
lightManager.addDirectionalLight(0xffffff, 1, { x: 10, y: 15, z: 5 });
lightManager.addHemisphereLight()

// Initialisation de la caméra
const cameraManager = new CameraManager({
  position: { x: 0, y: 10, z: 200 },
  fov: 80,
});
const camera = cameraManager.getCamera();

// Récupérer le canvas
const canvas = document.querySelector("#gameCanvas"); // Sélectionne le canevas
console.log("canvas ", canvas);

// Initialise le WebGLRenderer avec le canevas
const renderer = new THREE.WebGLRenderer({ canvas });

// Définit les dimensions du renderer à celles du canevas
renderer.setSize(600, 500); 

// Ajuste le pixel ratio pour la qualité d'affichage
// renderer.setPixelRatio(canvas.devicePixelRatio); 
// Gestion du redimensionnement
window.addEventListener('resize', () => {
  const width = canvas.innerWidth;
  const height = canvas.innerHeight;

  // Met à jour la caméra
  cameraManager.onResize(width, height);

  // Met à jour le renderer
  renderer.setSize(width, height);
});



function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera, canvas.clientHeight);
}
animate();
// exporte des objet
export { scene, camera, lightManager, sceneManager, cameraManager };
