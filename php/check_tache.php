<?php

require_once('login_pdo.php');

$name_tache = $_POST['name'];
$etat_tache = $_POST['etat'];
$img_tache = $_POST['img'];
$alt_tache = $_POST['alt'];
$classT_tache = $_POST['classT'];

$sql = 'UPDATE taches SET type_tache = :etat_tache WHERE name_tache = :name_tache';
$query = $db->prepare($sql);
$query->bindValue(':etat_tache', $etat_tache, PDO::PARAM_STR);
$query->bindValue(':name_tache', $name_tache, PDO::PARAM_STR);
$query->execute();

$res = [["name_tache" => $name_tache],["etat_tache" => $etat_tache],["img_tache" => $img_tache],["alt_tache" => $alt_tache],["classT_tache" => $classT_tache]];
echo json_encode($res);