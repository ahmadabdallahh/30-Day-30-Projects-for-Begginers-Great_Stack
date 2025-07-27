const toastContainer = document.getElementById('toast-container');

function showToast(message, type = '') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  if (type) toast.classList.add(type);
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
