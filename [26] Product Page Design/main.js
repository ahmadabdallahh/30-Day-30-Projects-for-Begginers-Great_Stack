// TODO: Product Page Design

const productImg = document.querySelector('.hero img');
const btnDots = document.getElementsByTagName('button');

// TODO: Old Code
// btnDots[0].onclick = function (e) {
//     productImg.src = 'images/image1.png';
//     for (bt of btnDots) {
//         bt.classList.remove("active")
//     }
//     this.classList.add("active")
// };

// btnDots[1].onclick = () => productImg.src = 'images/image2.png';
// btnDots[2].onclick = () => productImg.src = 'images/image3.png';

// Array of image sources
const images = ['images/image1.png', 'images/image2.png', 'images/image3.png'];

const dotButtons = document.querySelectorAll('.dots .dot');
const productImage = document.querySelector('.hero img');

dotButtons.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        // NOTE: Update product image source
        productImage.src = images[idx];

        // TODO: Remove 'active' class from all dots
        dotButtons.forEach((dot) => dot.classList.remove('active'));

        // HACK: Add 'active' class to the clicked dot
        this.classList.add('active');
    });
});
