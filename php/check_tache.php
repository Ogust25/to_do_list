<?php

require_once('login_pdo.php');

$name_tache = $_POST['name'];
$etat_tache = $_POST['etat'];

$sql = 'UPDATE taches SET type_tache = :etat_tache WHERE name_tache = :name_tache';
$query = $db->prepare($sql);
$query->bindValue(':etat_tache', $etat_tache, PDO::PARAM_STR);
$query->bindValue(':name_tache', $name_tache, PDO::PARAM_STR);
$query->execute();

$res = ["res" => "tache validé"];
echo json_encode($res);