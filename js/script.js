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
    .then(res => res.text())
    .then(data => {
        testNode.innerHTML = data;
    })
}
ajax("./php/view_all.php");