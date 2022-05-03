<?php

if(isset($_POST['data_name']) && !empty($_POST['data_name'])){

    $name_tache = strip_tags($_POST['data_name']);

    require_once('login_pdo.php');
    $sql = 'INSERT INTO `taches` (`name_tache`) VALUES (:name_tache);';
    $query = $db->prepare($sql);
    $query->bindValue(':name_tache', $name_tache, PDO::PARAM_STR);
    $query->execute();

    header('Location: ../index.php');

}