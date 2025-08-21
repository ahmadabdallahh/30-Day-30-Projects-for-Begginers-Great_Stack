// TODO: Drag/Drop app

const items = document.querySelectorAll('.list .drag-item');
const rightBox = document.querySelector('.right');
const hint = document.querySelector('.hint');

for (let list of items) {
  list.addEventListener('dragstart', (e) => {
    let selected = e.target;

    rightBox.addEventListener('dragover', (e) => {
      e.preventDefault();
    //   hint.style.display = 'block';
    });

    rightBox.addEventListener('drop', (e) => {
      rightBox.append(selected);
      selected.value = null;
      hint.style.display = 'none';
    });
  });
}
