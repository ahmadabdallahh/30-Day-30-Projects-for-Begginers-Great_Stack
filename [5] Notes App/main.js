// TODO: Note App

const noteContainer = document.querySelector('.notes-list');
const addBtn = document.getElementById('add-note');
let notes = document.querySelectorAll('.input-box');

addBtn.addEventListener('click', () => {
  let tempDiv = document.createElement('div');
  tempDiv.innerHTML = `
    <p class="input-box" contenteditable="true">
      <img src="image/delete.png" alt="delete" class="delete-btn">
    </p>
  `;

    let newNote = tempDiv.firstElementChild;
    const deleteBtn = newNote.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      newNote.remove();
    });
    noteContainer.appendChild(newNote);
    notes = document.querySelectorAll('.input-box');
});
