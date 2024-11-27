<?php

require_once './Classes-php/Manager.class.php';
require_once './menu.php';
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
<link rel="stylesheet" href="./style.css">
<link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet"/>
<body  id="menuBg" class="menu-bg">
<div class="menu-content" style="display: block;">
        <!-- Logo Simplonia -->
<!-- <img id="simploniaLogo" style="margin-top:0px" src="./src/img/SimploniaLogo.png" alt="SimploniaTitle"/> -->


<?php

$heroes = $manager->getHero(); // Récupère les données des héros

if (!empty($heroes)) {
    // Affichage du tableau HTML
    echo '<img src="./src/sprite/aqua_idle.gif" id="aqua" style="display: block; width: 10%; height: auto; filter: hue-rotate(180deg);" alt="SimploniaButton" />';
    echo '<table border="1" id="tablePhp" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">';
    echo '<thead>';
    echo '<tr>';
    // Afficher les noms des colonnes dynamiquement
    foreach (array_keys($heroes[0]) as $columnName) {
        echo '<th style="background-color: #f2f2f2; text-align: left;">' . htmlspecialchars($columnName) . '</th>';
    }
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';
    // Remplir les données
    foreach ($heroes as $hero) {
        echo '<tr>';
        foreach ($hero as $value) {
            echo '<td>' . htmlspecialchars($value) . '</td>';
        }
        echo '</tr>';
    }
    echo '</tbody>';
    echo '</table>';

    // Génère les données JSON pour les injecter dans JavaScript
    $heroesJson = json_encode($heroes, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
    echo '<script>';
    echo 'const heroesData = ' . $heroesJson . ';'; // Injection des données JSON dans une variable JavaScript
    echo '</script>';
} else {
    echo '<p>Aucun héros trouvé.</p>';
}
?>

</div>


<script>
    if (heroesData && Array.isArray(heroesData)) {
        // Stocke les données dans le local storage
        localStorage.setItem('heroes', JSON.stringify(heroesData));

        console.log('Données des héros sauvegardées dans le localStorage');
    } else {
        console.error('Aucune donnée de héros à sauvegarder.');
    }
</script>
<!-- <script src="./three/managerScript.js"></script>
<script src="./three/interfaceLogique.js"></script>
<script src="./three/gameLogique.js"></script> -->
<script src="./script.js"></script> 

</body>





