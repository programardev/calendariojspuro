//Definindo elementos base
const title = document.querySelector('title');
const body = document.querySelector('body');

//funções
function setTitle(txt) {
    title.innerText = txt;
}

function renderCalendar(){
    const table = document.createElement('table');
    table.setAttribute('border',1);
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.appendChild(td);
    table.appendChild(tr);
    td.innerText = "O mês vem aqui";

    const tr2 = document.createElement('tr');
    const td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.innerText = 'Aqui começa os dias...';
    table.appendChild(tr2);
    body.appendChild(table);
}

function init(){
    setTitle("Calendário em JS PURO");
    renderCalendar();
}

//Inicia tudo
init();