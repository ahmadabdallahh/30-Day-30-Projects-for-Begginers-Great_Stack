// The main bug in this code is that it does not handle invalid or future dates properly,
// and it does not show/hide the error message or result container as intended.
// Additionally, the calculation for days (d3) uses getDayOfMonth(y1, m1), which gives the number of days in the *birth month*,
// not the previous month of the current date, which is needed when borrowing days.
// This can lead to incorrect age calculation, especially around month boundaries.

const myInputBox = document.getElementById('birthDate');
myInputBox.max = new Date().toISOString().split('T')[0];
const myForm = document.forms[0];
const errorMsg = document.querySelector('.error-message');
const resultContainer = document.getElementById('resultContainer');

function getDayOfMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function calcAge() {
  // Hide previous error/result
  errorMsg.style.display = 'none';
  resultContainer.style.display = 'none';

  if (myInputBox.value === '') {
    errorMsg.textContent = 'Please select a valid date.';
    errorMsg.style.display = 'block';
    return;
  }

  let birthDate = new Date(myInputBox.value);
  let today = new Date();

  // Check for future date
  if (birthDate > today) {
    errorMsg.textContent = 'Please select a valid date.';
    errorMsg.style.display = 'block';
    return;
  }

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    // Borrow days from previous month of current date
    let prevMonth = m2 - 1;
    let prevYear = y2;
    if (prevMonth === 0) {
      prevMonth = 12;
      prevYear--;
    }
    d3 = getDayOfMonth(prevYear, prevMonth) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  // If the calculation results in negative years, it's an invalid date
  if (y3 < 0) {
    errorMsg.textContent = 'Please select a valid date.';
    errorMsg.style.display = 'block';
    return;
  }

  resultContainer.innerHTML = `Your Age Is : Year ${y3} , Month : ${m3} & Days : ${d3}`;
  resultContainer.style.display = 'block';
}

myForm.addEventListener('submit', (e) => e.preventDefault());
