const btnAll = document.querySelector('#btnAll');
const btnEnCours = document.querySelector('#btnEnCours');
const btnFinies = document.querySelector('#btnFinies');
const testNode = document.querySelector('#testNode');

btnAll.addEventListener("click", function(){
    btnAll.style.color = "rgb(139 92 246)";
    btnEnCours.style.color = "rgb(107 114 128)";
    btnFinies.style.color = "rgb(107 114 128)";
    /* affiche la vue all */
    ajax("./php/view_all.php");
})

btnEnCours.addEventListener("click", function(){
    btnEnCours.style.color = "rgb(139 92 246)";
    btnAll.style.color = "rgb(107 114 128)";
    btnFinies.style.color = "rgb(107 114 128)";
    /* affiche la vue encours */
    ajax("./php/view_enCours.php");
})

btnFinies.addEventListener("click", function(){
    btnFinies.style.color = "rgb(139 92 246)";
    btnAll.style.color = "rgb(107 114 128)";
    btnEnCours.style.color = "rgb(107 114 128)";
    /* affiche la vue fini */
    ajax("./php/view_fini.php");
})

function ajax(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        data.forEach(e => {
            const div= newElem("div", {"class":"bg-white py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none"});
            const img = newElem("img", {"class":"pr-3", "src":e.img, "alt":e.alt_img});
            const p = newElem("p", {"class":e.class}, e.name_tache);
            
            placeElem(img, div);
            placeElem(p, div);
            placeElem(div, testNode);
        });
    })
}
ajax("./php/view_all.php");

function newElem(el, attribut, content=""){
    const newElem = document.createElement(el);
    const newContent = document.createTextNode(content);
    newElem.appendChild(newContent);
    for(let key in attribut) {
        newElem.setAttribute(key, attribut[key]);
    }
    return newElem;
}

function placeElem(elem, ref){
    ref.insertBefore(elem, null);
}

/*
    <div class="bg-white py-4 pl-5 pr-2 flex items-center border-b shadow-md lg:shadow-none">
        <img class="pr-3" src="<?= $tache['img'] ?>" alt="<?= $tache['alt_img'] ?>">
        <p class="<?= $tache['class'] ?>"><?= $tache['name_tache'] ?></p>
    </div> 
*/