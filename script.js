//Definindo elementos base
const title = document.querySelector('title');
const body = document.querySelector('body');
var table;

//funções
function setTitle(txt) {
    title.innerText = txt;
}

function initTable() {
    table = document.createElement('table');
    table.setAttribute('border',1);
}

function renderHeader(){
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.setAttribute('colspan',7);
    tr.appendChild(td);
    td.innerText = "O mês vem aqui";
    
    const tr2 = document.createElement('tr');
    
    const td2 = document.createElement('td');
    td2.innerText = 'Dom';
    const td3 = document.createElement('td');
    td3.innerText = 'Seg';
    const td4 = document.createElement('td');
    td4.innerText = 'Ter';
    const td5 = document.createElement('td');
    td5.innerText = 'Qua';
    const td6 = document.createElement('td');
    td6.innerText = 'Qui';
    const td7 = document.createElement('td');
    td7.innerText = 'Sex';
    const td8 = document.createElement('td');
    td8.innerText = 'Sab';
    
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tr2.appendChild(td6);
    tr2.appendChild(td7);
    tr2.appendChild(td8);
    
    thead.appendChild(tr);
    thead.appendChild(tr2);
    table.appendChild(thead);
}

function renderBody(){
    const tbody = document.createElement('tbody');

    const tr = document.createElement('tr');
    
    const td2 = document.createElement('td');
    td2.innerText = '1';
    const td3 = document.createElement('td');
    td3.innerText = '2';
    const td4 = document.createElement('td');
    td4.innerText = '3';
    const td5 = document.createElement('td');
    td5.innerText = '4';
    const td6 = document.createElement('td');
    td6.innerText = '5';
    const td7 = document.createElement('td');
    td7.innerText = '6';
    const td8 = document.createElement('td');
    td8.innerText = '7';
    
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    
    tbody.appendChild(tr);
    table.appendChild(tbody);
}

function renderCalendar(){
    initTable();
    renderHeader();
    renderBody();
    body.appendChild(table);
}

function init(){
    setTitle("Calendário em JS PURO");
    renderCalendar();
}

//Inicia tudo
init();