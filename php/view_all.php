<?php
    require_once('./login_pdo.php');
    $sql = 'SELECT * FROM taches INNER JOIN categorie WHERE type_tache = id_categorie';
    $query = $db->prepare($sql);
    $query->execute();
    $taches = $query->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($taches);
?>