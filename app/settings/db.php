<?php

$host = "database";
$dbname = "game";
$login = "root";
$mdp = "root";

/**
 * try connection
 * catch and display the error and stop process
 */
try{
    $db = new PDO(
        'mysql:host='.$host.';dbname='.$dbname.';charset=UTF8',
        $login,
        $mdp
    );
    // $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(Exception $e){
    die('Erreur:'.$e->getMessage());
}