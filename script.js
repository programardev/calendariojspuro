//Definindo elementos base e variáveis globais
const title = document.querySelector('title');
const body = document.querySelector('body');
const weekDays = ['Dom','Seg', 'Ter','Qua', 'Qui', 'Sex', 'Sab'];
const months = [
    'Janeiro','Fevereiro','Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
var table;
var dateTime = new Date();
dateTime.setDate(1);
dateTime.setMonth(1);
var day = dateTime.getDate();
var month = dateTime.getMonth();
var year = dateTime.getFullYear();
var wday = dateTime.getDay();

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
    td.innerText = `${months[month]} ${year}`;
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
    const startDay = wday;
    var nDay = 1;
    var x = 1;
    while(nDay <= getLastDay(dateTime)){
        const td = document.createElement('td');
        if (x <= startDay){
            td.innerText = '';
        } else {
            td.innerText = nDay;
            nDay++;
        }
        tr.appendChild(td);
        if (x % 7 === 0){
            tbody.appendChild(tr);
            tr = document.createElement('tr');
        }
        x++;
    }
    
    const cols = 6 - getLastWeekDay(dateTime);
    for (let x=0; x < cols;x++){
        const td = document.createElement('td');
        td.innerText = '';
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
    table.appendChild(tbody);
}

function lastDateOfMonth(date){
    var copyDate = new Date(date);
    copyDate.setMonth(date.getMonth()+1);
    copyDate.setDate(1);
    copyDate.setDate(copyDate.getDate()-1);
    return copyDate;
}

function getLastDay(date){
    return lastDateOfMonth(date).getDate();
}

function getLastWeekDay(date){
    return lastDateOfMonth(date).getDay();
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