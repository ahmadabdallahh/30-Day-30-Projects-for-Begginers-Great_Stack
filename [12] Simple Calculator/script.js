// TODO: Simple Calculator
let displayValue = '';
const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function appendOperator(operator) {
  display.value += operator;
}

function calculate() {
  display.value = eval(display.value);
}

// Add keyboard support for calculator input
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if ((key >= '0' && key <= '9') || key === '.') {
    appendNumber(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    appendOperator(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

// Add support for copying the current display value to clipboard when user presses Ctrl+C or Cmd+C
display.addEventListener('keydown', function (event) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
    event.preventDefault();
    if (display.value) {
      // Use Clipboard API if available
      if (navigator.clipboard) {
        navigator.clipboard.writeText(display.value);
      } else {
        // Fallback for older browsers
        display.select();
        document.execCommand('copy');
        display.setSelectionRange(display.value.length, display.value.length); // Deselect
      }
    }
  }
});
