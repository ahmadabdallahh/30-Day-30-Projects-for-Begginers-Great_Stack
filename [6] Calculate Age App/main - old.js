// TODO: Calculate Age App
// IDEA: Check if the input is not empty before proceeding

const myDate = document.getElementById('birthDate');
const myForm = document.forms[0];
const ageRestult = document.querySelector('.age-result');
const calcBtn = document.getElementById('calcBtn');
const errorMsg = document.getElementById('errorMessage');

// NOTE: Prevent the form from submitting and reloading the page
myForm.addEventListener('submit', (e) => e.preventDefault());

function calculateAge() {
  // HACK: Get the current date using the Date object
  const birthDate = new Date(myDate.value);
  let y1 = birthDate.getFullYear();
  let m1 = birthDate.getMonth() + 1; // HINT: Remember months are zero-based in JS
  let d1 = birthDate.getDate(); // HINT: This gives you the day of the month

  const currentDate2 = new Date();
  let y2 = currentDate2.getFullYear();
  let m2 = currentDate2.getMonth() + 1; // HINT: Remember months are zero-based in JS
  let d2 = currentDate2.getDate(); // HINT: This gives you the day of the month

  let d3, m3, y3;

  y3 = y2 - y1;
  m3 = m2 - m1;
  d3 = d2 - d1;

  if (d3 < 0) {
    m3--;
    d3 += 30;
  }
  if (m3 < 0) {
    y3--;
    m3 += 12;
  }

  if (y3 < 0) {
    errorMsg.style.display = 'block';
    return;
  }

  ageRestult.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;
}

calcBtn.addEventListener('click', () => calculateAge());
