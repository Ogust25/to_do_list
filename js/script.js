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
        //console.log(data);

        /* Supprime la vue actuelle */
        boxAjax.replaceChildren();
        
        /* Création des taches en fonction de la vue choisie */
        data.forEach(e => {
            let div = "";
            let img = "";
            let p = "";
            
            if (e.type_tache == "1") {
                div= newElem("div", {"class":"w-full bg-white cursor-pointer py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none"});
                div.classList.add("divAjax");
                img = newElem("img", {"class":"pr-3", "src":e.img, "alt":e.alt_img});
                p = newElem("p", {"class":"text-gray-700"}, e.name_tache);
            }else{
                div= newElem("div", {"class":"w-full bg-white cursor-pointer py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none"});
                div.classList.add("divAjax");
                img = newElem("img", {"class":"pr-3", "src":e.img, "alt":e.alt_img});
                p = newElem("p", {"class":"text-gray-300 line-through"}, e.name_tache);
            }

            div.addEventListener('click', ()=>{

                /* Indique si la tache et validé ou non */
                let etat = 0;
                if (e.type_tache == 1) {
                    etat = 2;
                }else{
                    etat = 1;
                }

                /* Coche ou decoche la tache */
                function tacheCheck(url, etat) {
                    const nom = div.childNodes[2].firstChild.nodeValue;
                    const form = new FormData();
                    form.append("name", nom);
                    form.append("etat", etat);

                    fetch(url, {
                        method: 'POST',
                        body: form
                    })
                    .then(data => {return data.json()})
                    .then(data =>{
                        console.log(data);
                    })
                }
                tacheCheck('./php/check_tache.php', etat);
            })

            placeElem(img, div);
            placeElem(p, div);
            placeElem(div, boxAjax);
        });
    })
}
/* Call pour afficher la vue all au chargement de la page */
ajax("./php/view_all.php");


/* Compteur de tache restante */
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