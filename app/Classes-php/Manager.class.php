<?php

namespace App\Classes;

use PDO;

class Manager
{
    private $db;

    public function __construct(PDO $db)
    {
        $this->setDb($db);
    }

    public function setDb($db)
    {
        $this->db = $db;
    }


    public function getDb()
    {
        return $this->db;
    }



    // MARK: Get Hero
    // Récupère les données des héros depuis la base
    public function getHero()
{
    $req = $this->db->query('
        SELECT Hero.name_Hero, Hero.lvl_Hero, Role.role_name, Role.sprite_color_Role
        FROM Hero
        LEFT JOIN Role ON Hero.id_Role = Role.id_Role

    ');
    return $req->fetchAll(PDO::FETCH_ASSOC);
}

    // MARK: Create Hero
    // Méthode pour afficher le formulaire et traiter l'ajout du héros
    public function createHero()
    {

        $name_Hero = $_POST['name_Hero'];
        $id_Role = $_POST['id_Role'];
        $xp_Hero = 0;
        $lvl_Hero = 0;

        $req = $this->db->prepare('INSERT INTO Hero (name_Hero, xp_Hero, lvl_Hero, id_Role) VALUES (:name_Hero, :xp_Hero, :lvl_Hero, :id_Role)');
        $req->execute(array(
            'name_Hero' => $name_Hero,
            'xp_Hero' => $xp_Hero,
            'lvl_Hero' => $lvl_Hero,
            'id_Role' => $id_Role
        ));
    }


    // MARK: getHeroJSON
    /**
     * Retourne les données des héros en JSON
     *
     * @return void
     */
    public function getHeroJSON()
    {
        $heroes = $this->getHero(); // Récupère les données avec la méthode existante
        header('Content-Type: application/json'); // Définit le type de réponse en JSON
        echo json_encode($heroes); // Convertit le tableau PHP en JSON
        exit;
    }



    /**
     * Récupère la liste des rôles (id, nom et couleur) pour le formulaire
     *
     * @return array
     */
    public function getRolesWithColors()
    {
        $req = $this->db->query('SELECT id_Role, role_name, sprite_color_Role FROM Role');
        return $req->fetchAll(PDO::FETCH_ASSOC);
        
    }


    // MARK: getForm
    /**
     * Affiche le formulaire pour ajouter un héros
     *
     * @return void
     */
    public function getForm()
    {

        $roles = $this->getRolesWithColors();


        echo '<div class="simplonia-form-container">';
        echo '<div class="simplonia-form-content-img">';
        echo '<img id="sprite" class="sprite-menu" src="./src/sprite/aqua_idle.gif">';
        echo '</div>';
        echo '<div class="simplonia-form-content">';
        echo '<form method="post" action="">';

        // Champ texte (Nom du héros)
        echo '<div class="simplonia-personnages-button" style="position: relative; display: inline-block;">';
        echo '<img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" style="display: block; width: 100%; height: auto;">';
        echo '<input type="text" class="simplonia-input" name="name_Hero" placeholder="Nom du héros" required style=" position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: none; background: transparent; text-align: center; outline: none; color: black !important; font-size: 32px; font-family: Special Elite, cursive; font-weight: bold; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);">';
        echo '<style> input::placeholder {color: black;} </style>';
        echo '</div>';

        // Menu déroulant (Choix de la classe)
        echo '<div class="simplonia-personnages-button" style="position: relative; display: inline-block;">';
        echo '<img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" style="display: block; width: 100%; height: auto;">';
        echo '<select id="role-selector" name="id_Role" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; border: none; background: transparent; text-align: center; color: black; font-size: 32px; font-family: Special Elite, cursive; outline: none; font-weight: bold; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); appearance: none; text-align-last: center;">';
        foreach ($roles as $role) {
        echo '<option value="' . $role['id_Role'] . '" data-color="' . $role['sprite_color_Role'] . '">' . $role['role_name'] . '</option>';
        }
        echo '</select>';
        echo '</div>';

        // Bouton submit et retour avec tout leurs styles
        echo '</div>';
        echo '</div>';

        // Conteneur pour aligner les deux boutons côte à côte
        echo '<div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px;">';

        // Premier bouton (Ajouter le héros)
        echo '<div class="simplonia-personnages-button" style="position: relative; display: inline-block;">';
        echo '<img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" style="display: block; width: 100%; height: 95px;">';
        echo '<button type="submit" name="submit" value="Ajouter le hero" style=" position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: auto; background: transparent; border: none; color: black; font-size: 32px; font-family: Special Elite, cursive; font-weight: bold; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); cursor: pointer; outline: none; text-align: center;">Ajouter le héros</button>';
        echo '</div>';

        // Deuxième bouton (Retour)
        echo '<div class="simplonia-ajouter-personnage-retour-button" id="retourAjouterPersonnageButton" style="position: relative; display: inline-block;">';
        echo '<img src="./src/img/SimploniaBouton.png" alt="SimploniaButton" style="display: block; width: 100%; height: 95px;">';
        echo '<button type="button" style=" position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: auto; background: transparent; border: none; color: black; font-size: 32px; font-family: Special Elite, cursive; font-weight: bold; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); cursor: pointer; outline: none; text-align: center;">Retour</button>';
        echo '</div>';
        echo '</div>';
        echo '</form>';
    }
}
