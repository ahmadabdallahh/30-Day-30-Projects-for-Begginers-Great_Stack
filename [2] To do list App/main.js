// TODO: To do list App

const inputBox = document.getElementById('input-box');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('.add-btn');

function addTask() {
  if (inputBox.value === '') {
    alert('You should not write the Empty Field');
  } else {
    let liElement = document.createElement('li');

    // Use HTML template string to include check bubble, task text, and delete button
    liElement.innerHTML = `
      <span class="check-bubble"></span>
      <p>${inputBox.value}</p>
      <span class="delete-btn">&times;</span>
    `;

    // NOTE: Append list item to container
    listContainer.appendChild(liElement);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener(
  'click',
  (e) => {
    const target = e.target;
    const listItem = target.closest('li');

    if (!listItem) return;

    if (target.classList.contains('check-bubble')) {
      listItem.classList.toggle('checked');
      target.classList.toggle('checked');
      saveData();
    } else if (target.tagName === 'LI' || target.tagName === 'P') {
      listItem.classList.toggle('checked');
      const checkBubble = listItem.querySelector('.check-bubble');
      if (checkBubble) {
        checkBubble.classList.toggle('checked');
      }
      saveData();
    } else if (target.classList.contains('delete-btn')) {
      listItem.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem('data');
}

showList();
