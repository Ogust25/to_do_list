<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Primary Meta Tags -->
    <title>To Do List</title>
    <meta name="title" content="To Do List">
    <meta name="description" content="Site de tache à faire.">
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://metatags.io/">
    <meta property="og:title" content="To Do List">
    <meta property="og:description" content="Site de tache à faire.">
    <meta property="og:image" content="https://augustg.promo-106.codeur.online/to_do_list/">
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://metatags.io/">
    <meta property="twitter:title" content="To Do List">
    <meta property="twitter:description" content="Site de tache à faire.">
    <meta property="twitter:image" content="https://augustg.promo-106.codeur.online/to_do_list/">
    <!-- Link -->
    <link rel="stylesheet" href="./dist/output.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="./assets/images/filled_check.png" type="image/x-icon">
</head>
<body class="h-screen w-screen flex flex-col items-center justify-between bg-main outfit bg-small-custom sm:bg-full-custom bg-phone sm:bg-max bg-no-repeat">
    <header class="w-screen h-1/4 flex items-end justify-center">
        <div class="w-5/6 lg:w-1/3 flex flex-col justify-between pb-5">
            <h1 class="text-2xl text-white font-bold pb-5 pt-20">A Faire</h1>
            <form id="formAdd" method="post" class="bg-white py-4 px-2 rounded-lg flex items-center">
                <img class="px-2" src="./assets/images/empty_check.png" alt="checkbox vide">
                <input id="inputAdd" class="outline-none" name="data_name" type="text" placeholder="Ajouter une tâche">
            </form>
        </div>
    </header>
    <main class="w-screen h-full flex flex-col items-center">
        <section class="w-5/6 lg:w-1/3 flex flex-col lg:shadow-md lg:rounded-lg">

            <!-- AXAJ -->
            <div id="boxAjax"></div>
            
            <div class="lg:flex lg:justify-between lg:bg-white lg:rounded-lg">
                <!-- Boite nombre restant -->
                <?php $i = ""; ?>
                <div class="bg-white py-4 pl-5 pr-2 flex items-center lg:rounded-br-none rounded-b-lg shadow-md lg:shadow-none">
                    <p class="text-gray-400" id="counter"></p>
                </div>
                <!-- Boite menu -->
                <div class="shadow-md lg:shadow-none lg:rounded-t-none lg:rounded-bl-none bg-white py-4 px-2 rounded-lg flex items-center mt-5 lg:mt-0 justify-evenly">
                    <button class="text-violet-500 font-bold" id="btnAll">Toutes</button>
                    <button class="text-gray-500 font-bold lg:pl-5" id="btnEnCours">En cours</button>
                    <button class="text-gray-500 font-bold lg:px-5" id="btnFinies">Finies</button>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <p class="py-10 text-gray-500">August Gros 2022 - Made with &#36;<!-- &hearts; --></p>
    </footer>
<script src="./js/Sortable.js"></script>    
<script src="./js/script.js"></script>

</body>
</html>