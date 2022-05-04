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

/* Création des taches en AJAX */
function ajax(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        boxAjax.replaceChildren();

        data.forEach(e => {
            let div = "";
            let img = "";
            let p = "";
            
            if (e.type_tache == "1") {
                div= newElem("div", {"class":"bg-white py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none"});
                img = newElem("img", {"class":"pr-3", "src":e.img, "alt":e.alt_img});
                p = newElem("p", {"class":"text-gray-700"}, e.name_tache);
            }else{
                div= newElem("div", {"class":"bg-white py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none"});
                img = newElem("img", {"class":"pr-3", "src":e.img, "alt":e.alt_img});
                p = newElem("p", {"class":"text-gray-300 line-through"}, e.name_tache);
            }

            placeElem(img, div);
            placeElem(p, div);
            placeElem(div, boxAjax);
        });
    })
}
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