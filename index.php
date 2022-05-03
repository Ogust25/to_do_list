<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <link rel="stylesheet" href="./dist/output.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="shortcut icon" href="./assets/images/filled_check.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
</head>
<body class="h-screen w-screen flex flex-col items-center justify-between bg-main outfit bg-small-custom sm:bg-full-custom bg-phone sm:bg-max bg-no-repeat">
    <header class="w-screen h-1/4 flex items-end justify-center">
        <div class="w-5/6 lg:w-1/3 flex flex-col justify-between pb-5">
            <h1 class="text-2xl text-white font-bold pb-5 pt-20">A Faire</h1>
            <div class="bg-white py-4 px-2 rounded-lg flex items-center">
                <img class="px-2" src="./assets/images/empty_check.png" alt="checkbox vide">
                <input type="text" placeholder="Ajouter une tâche">
            </div>
        </div>
    </header>
    <main class="w-screen h-full flex flex-col items-center">
       <section class="w-5/6 lg:w-1/3 flex flex-col lg:shadow-md lg:rounded-lg">
            <!-- Boite exemple checked -->
            <div class="bg-white py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none">
                <img class="pr-3" src="./assets/images/filled_check.png" alt="checkbox vide">
                <p class="text-gray-300 line-through">Trouver un stage</p>
            </div>
            <!-- Boite exemple non-checked -->
            <div class="bg-white py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none">
                <img class="pr-3" src="./assets/images/empty_check.png" alt="checkbox vide">
                <p class="text-gray-700">Trouver un stage</p>
            </div>
            <div class="lg:flex lg:justify-between lg:bg-white lg:rounded-lg">
                <!-- Boite nombre restant -->
                <div class="bg-white py-4 pl-5 pr-2 flex items-center lg:rounded-br-none rounded-b-lg shadow-md lg:shadow-none">
                    <p class="text-gray-400">5 tâches restantes</p>
                </div>
                <!-- Boite menu -->
                <div class="shadow-md lg:shadow-none lg:rounded-t-none lg:rounded-bl-none bg-white py-4 px-2 rounded-lg flex items-center mt-5 lg:mt-0 justify-evenly text-gray-500">
                    <p class="font-bold">Toutes</p>
                    <p class="font-bold lg:pl-5">En cours</p>
                    <p class="font-bold lg:px-5">Finies</p>
                </div>
            </div>
       </section>
    </main>
    <footer>
        <p class="py-10 text-gray-500">August Gros 2022 - Made with &#36;<!-- &hearts; --></p>
    </footer>
<script src="./js/script.js"></script>
</body>
</html>