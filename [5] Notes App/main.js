// TODO: Note App

const noteContainer = document.querySelector('.notes-list');
const addBtn = document.getElementById('add-note');
let notes = document.querySelectorAll('.input-box');
const noteText = document.getElementById('note-text');

addBtn.addEventListener('click', () => {
  let tempDiv = document.createElement('div');
  if (noteText.value !== '') {
    tempDiv.innerHTML = `
      <p class="input-box" contenteditable="true">
      ${noteText.value}
      <img src="image/delete.png" alt="delete" class="delete-btn">
            </p>
            `;
    noteText.value = '';
  } else {
    alert('You Should Write The text inside the TextArea');
  }

//   Another Si
  //   noteContainer.appendChild(tempDiv);
//   const deleteBtn = document.querySelector('.delete-btn');
//   deleteBtn.addEventListener('click', (e) => {
//     if (e.target.tagName === 'IMG') {
//       e.target.parentElement.remove();
//     }
//   });

    let newNote = tempDiv.firstElementChild;
    const deleteBtn = newNote.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      newNote.remove();
    });
    noteContainer.appendChild(newNote);
    notes = document.querySelectorAll('.input-box');
});
