import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';


import { CameraManager } from './managers/CameraManager.mjs';
import { SceneManager } from './managers/SceneManager.mjs';
import { LightManager } from './managers/LightManager.mjs';
import { PlayerObject } from './managers/objectsmanager/PlayerObject.mjs';
import { scene, camera, lightManager, sceneManager, cameraManager } from './managerScript.js';
document.addEventListener('DOMContentLoaded', () => {
const sceneManager = new SceneManager();
const scene = sceneManager.getScene();
const lightManager = new LightManager(scene);


const lightButton = document.querySelector('.btn-light');
lightButton.addEventListener('click', () => {
  lightManager.toggleLight(); // Active ou désactive les lumières
});

 // Par défaut, la caméra est sur la vue définie par CameraManager

const lookAtButton = document.querySelector('.btn-look-at');
// Variables pour gérer le toggle
let isDefaultView = true; // Par défaut, la caméra est sur la vue définie par CameraManager
lookAtButton.addEventListener('click', () => {
  if (isDefaultView) {
    // Aller vers une case spécifique
    const cellId = 'Z1'; // La case à regarder
    const cellPosition = sceneManager.getCellPosition(cellId); // Obtenir les coordonnées de la cellule

    if (cellPosition) {
      // Utilise CameraManager pour orienter la caméra vers la cellule
      cameraManager.lookAt(cellPosition.x, 0, cellPosition.z);
      console.log(`La caméra regarde la cellule ${cellId} à la position :`, cellPosition);
    } else {
      console.warn(`Cellule ${cellId} introuvable.`);
    }
  } else {
    // Revenir à la vue par défaut définie par CameraManager
    cameraManager.lookAt(0, 10, 60); // Regarder le centre par défaut
    console.log('La caméra est revenue à la vue par défaut.');
  }

  // Inverser l'état du toggle
  isDefaultView = !isDefaultView;
});


// Gestionnaire pour le bouton Grid Setup
const gridButton = document.querySelector('.btn-grid');
  if (gridButton) {
    gridButton.addEventListener('click', () => {
      console.log('Bouton Toggle Grid cliqué.');
      sceneManager.toggleGrid(); // Utilise l'instance existante de managerScript.js
    });
  } else {
    console.error('Bouton Toggle Grid introuvable.');
  }
});