const form = document.getElementById('signup-form');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const termsInput = document.getElementById('terms');
const statusEl = document.getElementById('form-status');

const setFieldState = (groupId, message = '', isValid = null) => {
  const group = document.getElementById(groupId);
  if (!group) return;
  const errorEl = group.querySelector('.error-message');
  if (errorEl) errorEl.textContent = message;
  group.classList.remove('has-error', 'has-success');
  if (isValid === true) group.classList.add('has-success');
  if (isValid === false) group.classList.add('has-error');
};

const namePattern = /^[A-Za-z\s'.-]{3,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

const validators = {
  fullName: (value) => {
    if (!value.trim()) return 'Full name is required';
    if (!namePattern.test(value.trim()))
      return 'Enter at least 3 characters (letters, spaces, apostrophes, dots, and hyphens allowed)';
    return '';
  },
  email: (value) => {
    if (!value.trim()) return 'Email is required';
    if (!emailPattern.test(value.trim())) return 'Enter a valid email address';
    return '';
  },
  password: (value) => {
    if (!value) return 'Password is required';
    if (!passwordPattern.test(value))
      return 'Min 8 chars incl. upper, lower, number, and symbol';
    return '';
  },
  confirmPassword: (value) => {
    if (!value) return 'Please confirm your password';
    if (value !== passwordInput.value) return 'Passwords do not match';
    return '';
  },
  terms: (checked) => {
    if (!checked) return 'You must accept the terms to continue';
    return '';
  },
};

const validateField = (input) => {
  const { id, type } = input;
  const value = type === 'checkbox' ? input.checked : input.value;
  const validator = validators[id];
  if (!validator) return true;
  const message = validator(value);
  const isValid = message === '';
  setFieldState(`group-${id}`, message, isValid);
  if (id === 'terms') {
    const termsError = document.getElementById('error-terms');
    if (termsError) termsError.textContent = message;
  }
  return isValid;
};

const attachLiveValidation = (input) => {
  const handler = () => validateField(input);
  input.addEventListener('input', handler);
  input.addEventListener('blur', handler);
  if (input.type === 'checkbox') input.addEventListener('change', handler);
};

[
  fullNameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
  termsInput,
].forEach((el) => {
  if (el) attachLiveValidation(el);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  statusEl.textContent = '';

  const fields = [
    fullNameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    termsInput,
  ];
  const results = fields.map((el) => validateField(el));
  const allValid = results.every(Boolean);

  if (!allValid) {
    statusEl.textContent = 'Please fix the highlighted fields and try again.';
    return;
  }

  statusEl.textContent = 'Success! Your form is valid.';
  form.reset();
  // Clear visual states after reset
  [
    'group-fullName',
    'group-email',
    'group-password',
    'group-confirmPassword',
  ].forEach((id) => setFieldState(id, '', null));
  document.getElementById('error-terms').textContent = '';
});
