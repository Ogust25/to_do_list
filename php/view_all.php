<?php
    require_once('../php/login_pdo.php');
    $sql = 'SELECT * FROM taches INNER JOIN categorie WHERE type_tache = id_categorie';
    /* $sql = 'SELECT * FROM `taches`,`categorie`'; */
    $query = $db->prepare($sql);
    $query->execute();
    $taches = $query->fetchAll(PDO::FETCH_ASSOC);
?>

<?php foreach($taches as $tache){ ?>

    <div class="bg-white py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none">
        <img class="pr-3" src="<?= $tache['img'] ?>" alt="<?= $tache['alt_img'] ?>">
        <p class="<?= $tache['class'] ?>"><?= $tache['name_tache'] ?></p>
    </div>

<?php } ?>