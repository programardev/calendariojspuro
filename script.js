//Definindo elementos base
const title = document.querySelector('title');
const body = document.querySelector('body');


//funções
function setTitle(txt) {
    title.innerText = txt;
}

function init(){
    setTitle("Calendário em JS PURO");
}

//Inicia tudo
init();