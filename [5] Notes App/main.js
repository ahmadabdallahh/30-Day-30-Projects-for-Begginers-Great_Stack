// TODO: Note App

const noteContainer = document.querySelector('.notes-list');
const addBtn = document.getElementById('add-note');
let notes = document.querySelectorAll('.input-box');
const noteText = document.getElementById('note-text');
const errorMsg = document.querySelector('.error-message');

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
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
    return; // Prevent adding empty note
  }

  //   IMPORTANT => Another Solution but has some of bugs
  //   noteContainer.appendChild(tempDiv);
  //   const deleteBtn = document.querySelector('.delete-btn');
  //   deleteBtn.addEventListener('click', (e) => {
  //     if (e.target.tagName === 'IMG') {
  //       e.target.parentElement.remove();
  //     }
  //   });

  let newNote = tempDiv.firstElementChild;
//   const deleteBtn = newNote.querySelector('.delete-btn'); // Error
  const deleteBtn = newNote.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    // newNote.remove(); // Error
    newNote.remove();
    saveData();
  });
  noteContainer.appendChild(newNote);
  notes = document.querySelectorAll('.input-box');
  saveData();
});


// Save notes to localStorage
function saveData() {
  localStorage.setItem('data', noteContainer.innerHTML);
}

// Load notes from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const data = localStorage.getItem('data');
  if (data) {
    noteContainer.innerHTML = data;
    // Re-attach delete event listeners to all delete buttons
    const allNotes = noteContainer.querySelectorAll('.input-box');
    allNotes.forEach(note => {
      const deleteBtn = note.querySelector('.delete-btn');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
          note.remove();
          saveData();
        });
      }
    });
  }
});
