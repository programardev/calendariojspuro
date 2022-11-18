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
var day = dateTime.getDate();
var month = dateTime.getMonth();
var year = dateTime.getFullYear();
var wday = dateTime.getDay();

//funções
function setTitle(txt) {
    title.innerText = txt;
}

function setDateVars(){
    dateTime.setDate(1);
    day = dateTime.getDate();
    month = dateTime.getMonth();
    year = dateTime.getFullYear();
    wday = dateTime.getDay();
}

function initTable() {
    const existTable = document.querySelector('table');
    if (existTable){
        existTable.remove();
    }
    table = document.createElement('table');
    table.setAttribute('border',0);
    table.setAttribute('cellspacing',0);
    table.setAttribute('cellpadding',0);
}

function renderWeekDays(){
    const tr = document.createElement('tr');
    tr.setAttribute('class','weekdays');
    for (const day of weekDays){
        const td = document.createElement('td');
        td.innerText = day;
        tr.appendChild(td)
    }
    return tr;
}

function prevMonth(){
    dateTime.setMonth(dateTime.getMonth()-1);
    setDateVars();
    renderCalendar();
}

function nextMonth(){
    dateTime.setMonth(dateTime.getMonth()+1);
    setDateVars();
    renderCalendar();
}

function buttonPrev(){
    const button = document.createElement('button');
    button.innerText = "<<";
    button.addEventListener('click', prevMonth);
    return button;
}

function buttonNext(){
    const button = document.createElement('button');
    button.innerText = ">>";
    button.addEventListener('click', nextMonth);
    return button;
}

function renderMonthName(){
    const tr = document.createElement('tr');

    const tdLeft = document.createElement('td');
    tdLeft.setAttribute('class','button');
    tdLeft.appendChild(buttonPrev());

    const tdRight = document.createElement('td');
    tdRight.appendChild(buttonNext());
    tdRight.setAttribute('class','button');

    const td = document.createElement('td');
    td.setAttribute('colspan',5);
    
    tr.appendChild(tdLeft);
    tr.appendChild(td);
    tr.appendChild(tdRight);
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