// TODO: Light / Dark Mode

const footerCopyright = document.querySelector('.footer p');
const themeSwitch = document.querySelector('.theme-switch');

// TODO: Get the Correct Date That is Displayed in the Footer (Automatic Changed not Static)
let myData = new Date().getFullYear();
footerCopyright.textContent = `© ${myData} John Doe. All rights reserved.`

// IMPORTANT:
// themeSwitch.addEventListener("change", () => {
//     if (themeSwitch.checked) {
//         document.body.classList.add('dark-mode');
//     } else {
//         document.body.classList.remove('dark-mode');
//     }
// })

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
