// TODO: How To Show Password Strength Using HTML CSS And JavaScript on Website

const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('toggle-visibility');
const meterFill = document.getElementById('meter-fill');
const strengthText = document.getElementById('strength-text');

const reqs = {
  length: document.getElementById('req-length'),
  lower: document.getElementById('req-lower'),
  upper: document.getElementById('req-upper'),
  number: document.getElementById('req-number'),
  symbol: document.getElementById('req-symbol'),
};

const patterns = {
  lower: /[a-z]/,
  upper: /[A-Z]/,
  number: /\d/,
  symbol: /[^A-Za-z0-9]/,
};

function evaluatePassword(value) {
  const results = {
    length: value.length >= 8,
    lower: patterns.lower.test(value),
    upper: patterns.upper.test(value),
    number: patterns.number.test(value),
    symbol: patterns.symbol.test(value),
  };

  const passed = Object.values(results).filter(Boolean).length;

  // Base score by count + bonus for length > 12 and variety
  let score = passed / 5; // 0..1
  if (value.length >= 12) score += 0.1;
  if (results.lower && results.upper && results.number && results.symbol)
    score += 0.1;
  score = Math.min(score, 1);

  return { results, score };
}

function updateUI({ results, score }) {
  // Update checklist
  Object.entries(results).forEach(([key, ok]) => {
    reqs[key].classList.toggle('ok', ok);
  });

  // Update meter
  const percentage = Math.round(score * 100);
  meterFill.style.width = `${percentage}%`;

  // Text feedback
  let label = 'Very weak';
  if (percentage >= 80) label = 'Strong';
  else if (percentage >= 60) label = 'Good';
  else if (percentage >= 40) label = 'Fair';
  else if (percentage >= 20) label = 'Weak';

  strengthText.textContent = value
    ? `Strength: ${label}`
    : 'Start typing to evaluate password strength.';
}

passwordInput.addEventListener('input', (e) => {
  const value = e.target.value;
  const evaluation = evaluatePassword(value);
  updateUI(evaluation);
});

toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  toggleBtn.setAttribute('aria-pressed', String(isPassword));
});
