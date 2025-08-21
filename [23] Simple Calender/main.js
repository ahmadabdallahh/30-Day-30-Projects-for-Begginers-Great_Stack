// Mini Calendar - Vanilla JS

const monthLabel = document.getElementById('monthLabel');
const daysGrid = document.getElementById('daysGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const todayBtn = document.getElementById('todayBtn');

// State
let activeDate = new Date(); // tracks which month/year is displayed
let selectedDate = null; // tracks user selection

function getMonthLabel(date) {
  const formatter = new Intl.DateTimeFormat(undefined, {
    month: 'long',
    year: 'numeric',
  });
  return formatter.format(date);
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function areSameDay(a, b) {
  return (
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function createDayCell(date, { isOutside, isToday, isSelected }) {
  const button = document.createElement('button');
  button.className =
    'day' +
    (isOutside ? ' outside' : '') +
    (isToday ? ' today' : '') +
    (isSelected ? ' selected' : '');
  button.type = 'button';
  button.setAttribute('role', 'gridcell');
  button.setAttribute('tabindex', '-1');
  button.dataset.iso = date.toISOString();

  const span = document.createElement('span');
  span.className = 'num';
  span.textContent = String(date.getDate());
  button.appendChild(span);

  button.addEventListener('click', () => {
    selectedDate = new Date(date);
    render();
  });

  button.addEventListener('keydown', handleGridKeydown);
  return button;
}

function render() {
  // label
  monthLabel.textContent = getMonthLabel(activeDate);

  // grid
  daysGrid.innerHTML = '';
  daysGrid.setAttribute('aria-label', getMonthLabel(activeDate));
  daysGrid.setAttribute('role', 'rowgroup');

  const start = startOfMonth(activeDate);
  const end = endOfMonth(activeDate);

  // Determine the first cell date (start from Sunday of the first week that contains the 1st)
  const firstWeekday = start.getDay(); // 0=Sun..6=Sat
  const firstCell = new Date(start);
  firstCell.setDate(start.getDate() - firstWeekday);

  // We render 6 weeks (6*7=42 cells) to keep UI stable
  for (let i = 0; i < 42; i++) {
    const cellDate = new Date(firstCell);
    cellDate.setDate(firstCell.getDate() + i);

    const isOutside = cellDate.getMonth() !== activeDate.getMonth();
    const today = new Date();
    const isToday = areSameDay(cellDate, today);
    const isSelected = areSameDay(cellDate, selectedDate);

    const cell = createDayCell(cellDate, { isOutside, isToday, isSelected });
    daysGrid.appendChild(cell);
  }

  // Focus first day of current month for keyboard users
  const firstOfMonthSelector = `.day:not(.outside)`;
  const firstOfMonth = daysGrid.querySelector(firstOfMonthSelector);
  if (firstOfMonth) firstOfMonth.setAttribute('tabindex', '0');
}

function changeMonth(delta) {
  activeDate = new Date(
    activeDate.getFullYear(),
    activeDate.getMonth() + delta,
    1
  );
  render();
}

function goToToday() {
  const now = new Date();
  activeDate = new Date(now.getFullYear(), now.getMonth(), 1);
  render();
  // Focus today's cell if visible
  const todayCell = Array.from(daysGrid.children).find((el) =>
    el.classList.contains('today')
  );
  if (todayCell) todayCell.focus();
}

// Keyboard navigation within grid
function handleGridKeydown(e) {
  const current = e.currentTarget;
  switch (e.key) {
    case 'ArrowLeft':
      moveFocus(current, -1);
      break;
    case 'ArrowRight':
      moveFocus(current, 1);
      break;
    case 'ArrowUp':
      moveFocus(current, -7);
      break;
    case 'ArrowDown':
      moveFocus(current, 7);
      break;
    case 'Home':
      focusEdge(current, 'start');
      break;
    case 'End':
      focusEdge(current, 'end');
      break;
    case 'PageUp':
      changeMonth(-1);
      focusEdgeByDate('match');
      break;
    case 'PageDown':
      changeMonth(1);
      focusEdgeByDate('match');
      break;
    case 'Enter':
    case ' ':
      current.click();
      break;
    default:
      return;
  }
  e.preventDefault();
}

function moveFocus(current, delta) {
  const cells = Array.from(daysGrid.querySelectorAll('.day'));
  const index = cells.indexOf(current);
  const nextIndex = Math.max(0, Math.min(cells.length - 1, index + delta));
  cells[nextIndex].focus();
}

function focusEdge(current, where) {
  const cells = Array.from(daysGrid.querySelectorAll('.day'));
  if (where === 'start') cells[0].focus();
  else cells[cells.length - 1].focus();
}

function focusEdgeByDate() {
  // try to focus the first day of displayed month after month change
  const firstOfMonth = daysGrid.querySelector('.day:not(.outside)');
  if (firstOfMonth) firstOfMonth.focus();
}

// Events
prevBtn.addEventListener('click', () => changeMonth(-1));
nextBtn.addEventListener('click', () => changeMonth(1));
todayBtn.addEventListener('click', goToToday);

// Initialize
render();
