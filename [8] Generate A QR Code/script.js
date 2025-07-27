// TODO: [8] QR Generator

const imageContainer = document.querySelector('.image-container');
const qrText = document.querySelector('.qr-input');
const generateBtn = document.querySelector('.generate-btn');
const errorMessage = document.querySelector('.error-message');

function generateQR() {
  let qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
  imageContainer.innerHTML = `<img src="${qrLink}" alt="QR Code">`;
}

generateBtn.addEventListener('click', () => {
  if (qrText.value === '') {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    generateQR();
  }
});
