// Text to Speech Converter - Web Speech API Implementation

// Get DOM elements
const textInput = document.getElementById('textInput');
const speechOptions = document.getElementById('speechOptions');
const listenBtn = document.getElementById('listenBtn');

let voices = [];
let speech = new SpeechSynthesisUtterance();

// Populate voices and dropdown
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    // Clear existing options
    speechOptions.innerHTML = '';
    voices.forEach((voice, i) => {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${voice.name} (${voice.lang})${voice.default ? ' [default]' : ''}`;
        speechOptions.appendChild(option);
    });
    // Set default voice
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
}

// Initial population and on change
window.speechSynthesis.onvoiceschanged = populateVoices;
populateVoices();

// Change voice when user selects a different option
speechOptions.addEventListener('change', () => {
    const selectedIndex = parseInt(speechOptions.value, 10);
    if (!isNaN(selectedIndex) && voices[selectedIndex]) {
        speech.voice = voices[selectedIndex];
    }
});

// Listen button event
listenBtn.addEventListener('click', () => {
    speech.text = textInput.value;
    window.speechSynthesis.cancel(); // Stop any current speech
    window.speechSynthesis.speak(speech);
});
