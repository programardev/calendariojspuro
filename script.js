//Definindo elementos base e variáveis globais
const title = document.querySelector('title');
const body = document.querySelector('body');
const weekDays = ['Dom','Seg', 'Ter','Qua', 'Qui', 'Sex', 'Sab'];
var table;


//funções
function setTitle(txt) {
    title.innerText = txt;
}

function initTable() {
    table = document.createElement('table');
    table.setAttribute('border',1);
}

function renderWeekDays(){
    const tr = document.createElement('tr');
    for (const day of weekDays){
        const td = document.createElement('td');
        td.innerText = day;
        tr.appendChild(td)
    }
    return tr;
}

function renderMonthName(){
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.setAttribute('colspan',7);
    tr.appendChild(td);
    td.innerText = "Janeiro";
    return tr;
}

function renderHeader(){
    const thead = document.createElement('thead');
    const trMonth = renderMonthName();
    const trWeekDays = renderWeekDays();
    thead.appendChild(trMonth);
    thead.appendChild(trWeekDays);
    table.appendChild(thead);
}

function renderBody(){
    const tbody = document.createElement('tbody');

    let tr = document.createElement('tr');
    for(let x=1; x <= 31; x++){
        const td = document.createElement('td');
        td.innerText = x;
        tr.appendChild(td);
        if (x % 7 === 0){
            tbody.appendChild(tr);
            tr = document.createElement('tr');
        }
    }
    

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