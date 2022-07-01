const input = document.getElementById('entry');
const add = document.getElementById('add');
const date = document.getElementById('date');
const list = document.getElementById('list');
let dateToday = new Date().toDateString();
date.innerText = dateToday;
const clear = document.getElementById('clear');

add.addEventListener('click', (e) => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.append(addCheckbox());
    list.append(li);
    input.value = '';
});

function addCheckbox(){
    const checkElem = document.createElement('input');
    checkElem.type = 'checkbox';
    checkElem.classList.add('check');
    return checkElem;
};
clear.addEventListener('click', (e) => {
    const deletedTasks = document.querySelectorAll('input[type="checkbox"]:checked');
    deletedTasks.forEach(el => el.parentNode.remove());
});
