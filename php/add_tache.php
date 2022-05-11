<?php
var_dump($_POST['nomTache']);
$name_tache = $_POST['nomTache'];
require_once('login_pdo.php');
$sql = 'INSERT INTO `taches` (`name_tache`) VALUES (:name_tache);';
$query = $db->prepare($sql);
$query->bindValue(':name_tache', $name_tache, PDO::PARAM_STR);
$query->execute();
