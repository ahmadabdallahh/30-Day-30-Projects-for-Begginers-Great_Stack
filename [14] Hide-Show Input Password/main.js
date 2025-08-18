// TODO: Show/Hide Input Password

const passwordInput = document.querySelector('#passwordInput');
const togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});
