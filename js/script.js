const btnAll = document.querySelector('#btnAll');
const btnEnCours = document.querySelector('#btnEnCours');
const btnFinies = document.querySelector('#btnFinies');
const boxAjax = document.querySelector('#boxAjax');

/* Affiche la vue all */
btnAll.addEventListener("click", function(){
    btnAll.style.color = "rgb(139 92 246)";
    btnEnCours.style.color = "rgb(107 114 128)";
    btnFinies.style.color = "rgb(107 114 128)";
    
    ajax("./php/view_all.php");
})

/* Affiche la vue enCours */
btnEnCours.addEventListener("click", function(){
    btnEnCours.style.color = "rgb(139 92 246)";
    btnAll.style.color = "rgb(107 114 128)";
    btnFinies.style.color = "rgb(107 114 128)";
    
    ajax("./php/view_enCours.php");
})

/* affiche la vue fini */
btnFinies.addEventListener("click", function(){
    btnFinies.style.color = "rgb(139 92 246)";
    btnAll.style.color = "rgb(107 114 128)";
    btnEnCours.style.color = "rgb(107 114 128)";
    
    ajax("./php/view_fini.php");
})

/* AJAX */
function ajax(url) {

    fetch(url, {
        method: "POST",
    })
    .then(res => res.json())
    .then(data => {

        /* Supprime la vue actuelle */
        boxAjax.replaceChildren();
        
        /* Création des taches en fonction de la vue choisie */
        data.forEach(e => {
            let div = "";
            let img = "";
            let p = "";
            
            if (e.type_tache == "1") {
                div= newElem("div", {"class":"w-full bg-white cursor-pointer py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none","data-status":"1"});
                div.classList.add("divAjax");
                img = newElem("img", {"class":"pr-3", "src":e.img, "alt":e.alt_img});
                p = newElem("p", {"class":"text-gray-700"}, e.name_tache);
            }else{
                div= newElem("div", {"class":"w-full bg-white cursor-pointer py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none","data-status":"2"});
                div.classList.add("divAjax");
                img = newElem("img", {"class":"pr-3", "src":e.img, "alt":e.alt_img});
                p = newElem("p", {"class":"text-gray-300 line-through"}, e.name_tache);
            }

            div.addEventListener('click', ()=>{
                /* Indique si la tache et validé ou non */
                let etat = 0;
                let img = "";
                let alt = "";
                let classT = "";
                
                if (e.type_tache == 1) {
                    etat = 2;
                    img = "./assets/images/filled_check.png";
                    alt = "logo de tache terminé";
                    classT = "text-gray-300 line-through";
                }else{
                    etat = 1;
                    img = "./assets/images/empty_check.png";
                    alt = "logo de tache non-terminé";
                    classT = "text-gray-700";
                }

                /* Coche ou decoche la tache */
                function tacheCheck(url, etat, img, alt, classT) {
                    const nom = div.childNodes[2].firstChild.nodeValue;
                    const form = new FormData();
                    form.append("name", nom);
                    form.append("etat", etat);
                    form.append("img", img);
                    form.append("alt", alt);
                    form.append("classT", classT);

                    fetch(url, {
                        method: 'POST',
                        body: form
                    })
                    .then(data => {return data.json()})
                    .then(data =>{
                        //console.log(data);
                        div.childNodes[1].src = data[2].img_tache;
                        div.childNodes[1].alt = data[3].alt_tache;
                        div.childNodes[2].classList.value = data[4].classT_tache;
                    })
                }

                /* Compteur de tache restante */
                if (div.getAttribute("data-status") == 1) {
                    div.setAttribute("data-status", "2")
                }else{
                    div.setAttribute("data-status", "1")
                }

                let nbrTaches = document.querySelectorAll("[data-status='1']").length;
                document.querySelector('#counter').childNodes[0].nodeValue = `${nbrTaches} tâches restantes`;

                tacheCheck('./php/check_tache.php', etat, img, alt, classT);
            })

            placeElem(img, div);
            placeElem(p, div);
            placeElem(div, boxAjax);
        });
    })
}
/* Call pour afficher la vue all au chargement de la page */
ajax("./php/view_all.php");

/* Add tache */
const formAdd = document.querySelector('#formAdd');
const inputAdd = document.querySelector('#inputAdd')

formAdd.addEventListener('submit', (e)=>{
    e.preventDefault();
    let newTache = inputAdd.value;
    const form = new FormData();
    form.append("nomTache", newTache);

    fetch('./php/add_tache.php', {
        method: 'POST',
        body: form
    })
    .then(data => {
        return data.json()
    })
    .then(data =>{
    })

    let div = newElem("div", {"class":"w-full bg-white cursor-pointer py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none"});
    div.classList.add("divAjax");
    let img = newElem("img", {"class":"pr-3", "src":"./assets/images/empty_check.png", "alt":"tache non terminé"});
    let p = newElem("p", {"class":"text-gray-700"}, newTache);

    placeElem(img, div);
    placeElem(p, div);
    placeElem(div, boxAjax);
})



/* Compteur de tache restante depuis la bdd */
function tacheConteur() {
    fetch("./php/view_enCours.php")
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        let count = 0;
        for (let i = 0; i < data.length; i++) {
            count++;
        }
        document.querySelector('#counter').innerHTML = `${count} tâches restantes`;
    });
}
tacheConteur();

/* Fonction pour créer et placer des elements */
function newElem(el, attribut, content=""){
    const newElem = document.createElement(el);
    const newContent = document.createTextNode(content);
    newElem.appendChild(newContent);
    for(let key in attribut) {
        newElem.setAttribute(key, attribut[key]);
    }
    return newElem;
}
function placeElem(elem, ref, ou=null){
    ref.insertBefore(elem, ou);
}

new Sortable(boxAjax, {
    animation: 150,
    ghostClass: 'blue-background-class'
});

