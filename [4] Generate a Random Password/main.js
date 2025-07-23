// TODO: Generate A Random Password

const passwordBox = document.querySelector('.password-box input');
const generateBtn = document.querySelector('.generate-btn');
const copyIcon = document.querySelector('.copy-icon');

const length = 16;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      // Optional: Show success feedback
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
    });
}

generateBtn.addEventListener('click', () => generatePassword());
copyIcon.addEventListener('click', () => copyPassword());
