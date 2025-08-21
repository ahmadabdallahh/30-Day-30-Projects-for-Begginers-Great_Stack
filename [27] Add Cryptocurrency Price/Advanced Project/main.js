// Crypto Tracker - fetch live prices using public API (CoinGecko)

const rowsEl = document.getElementById('rows');
const statusEl = document.getElementById('status');
const searchInput = document.getElementById('search');
const currencySelect = document.getElementById('currency');
const refreshBtn = document.getElementById('refreshBtn');
const autoBtn = document.getElementById('autoBtn');

let timerId = null;
let cache = [];

function apiUrl(currency) {
  const vs = currency.toLowerCase();
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h`;
}

async function fetchData() {
  const currency = currencySelect.value || 'USD';
  statusEl.textContent = 'Loading…';
  try {
    const res = await fetch(apiUrl(currency));
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const data = await res.json();
    cache = data;
    render();
    const time = new Date().toLocaleTimeString();
    statusEl.textContent = `Updated ${time}`;
  } catch (err) {
    console.error(err);
    statusEl.textContent = 'Failed to load prices. Retrying…';
  }
}

function formatCurrency(value) {
  const currency = currencySelect.value || 'USD';
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
    }).format(value);
  } catch {
    return `${currency} ${value.toLocaleString()}`;
  }
}

function createRow(coin, index) {
  const row = document.createElement('div');
  row.className = 'row';
  row.innerHTML = `
		<span class="idx">${index + 1}</span>
		<span class="coin">
			<img src="${coin.image}" alt="${coin.name}" />
			<span class="name">${coin.name}</span>
			<span class="symbol">${coin.symbol}</span>
		</span>
		<span class="price">${formatCurrency(coin.current_price)}</span>
		<span class="change">${changeBadge(coin.price_change_percentage_24h)}</span>
		<span class="cap">${formatCurrency(coin.market_cap)}</span>
		<span class="vol">${formatCurrency(coin.total_volume)}</span>
	`;
  return row;
}

function changeBadge(pct) {
  const val = Number(pct || 0).toFixed(2);
  const up = Number(val) >= 0;
  const cls = up ? 'up' : 'down';
  const sign = up ? '+' : '';
  return `<span class="badge ${cls}">${sign}${val}%</span>`;
}

function render() {
  const query = (searchInput.value || '').trim().toLowerCase();
  const filtered = cache.filter(
    (c) =>
      c.name.toLowerCase().includes(query) ||
      c.symbol.toLowerCase().includes(query)
  );
  rowsEl.innerHTML = '';
  filtered.forEach((coin, i) => rowsEl.appendChild(createRow(coin, i)));
}

function startAuto() {
  if (timerId) clearInterval(timerId);
  autoBtn.setAttribute('aria-pressed', 'true');
  autoBtn.textContent = 'Auto: On';
  timerId = setInterval(fetchData, 60000); // 60s
}

function stopAuto() {
  if (timerId) clearInterval(timerId);
  autoBtn.setAttribute('aria-pressed', 'false');
  autoBtn.textContent = 'Auto: Off';
}

// events
refreshBtn.addEventListener('click', fetchData);
autoBtn.addEventListener('click', () => {
  const isOn = autoBtn.getAttribute('aria-pressed') === 'true';
  if (isOn) stopAuto();
  else startAuto();
});
searchInput.addEventListener('input', render);
currencySelect.addEventListener('change', fetchData);

document.addEventListener('DOMContentLoaded', () => {
  fetchData();
  startAuto();
});
