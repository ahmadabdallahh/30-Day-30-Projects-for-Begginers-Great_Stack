// Gallery navigation functionality
const gallery = document.querySelector('.gallery-container');
const grid = document.querySelector('.grid');
const prevBtn = document.querySelector('.nav-button.prev');
const nextBtn = document.querySelector('.nav-button.next');

gallery.addEventListener('wheel', (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
});

prevBtn.addEventListener('click', () => {
  gallery.scrollLeft -= 250;
  scrollBehavior: 'smooth';
});

nextBtn.addEventListener('click', () => {
  gallery.scrollLeft += 250;
  scrollBehavior: 'smooth';
});
