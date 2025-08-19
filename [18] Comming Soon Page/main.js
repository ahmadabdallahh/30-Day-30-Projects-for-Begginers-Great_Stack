// Coming Soon Page - Countdown Timer and Form Handling

// Set the launch date (30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 1);

// Countdown Timer Function
function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM elements
    document.getElementById('days').textContent = days
        .toString()
        .padStart(2, '0');
    document.getElementById('hours').textContent = hours
        .toString()
        .padStart(2, '0');
    document.getElementById('minutes').textContent = minutes
        .toString()
        .padStart(2, '0');
    document.getElementById('seconds').textContent = seconds
        .toString()
        .padStart(2, '0');

    // Add animation class when numbers change
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    countdownNumbers.forEach((number) => {
        number.classList.add('pulse');
        setTimeout(() => {
            number.classList.remove('pulse');
        }, 200);
    });

    // Check if countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML =
            "<h2>🎉 We're Live! 🎉</h2>";
    }
}

// Email Form Handling
const emailForm = document.getElementById('email-form');
const submitBtn = emailForm.querySelector('.submit-btn');

emailForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    if (email) {
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Subscribing...</span>';

        // Simulate API call
        setTimeout(() => {
            // Show success message
            submitBtn.innerHTML = '<span>✓ Subscribed!</span>';
            submitBtn.style.background = 'var(--gradient-accent)';

            // Reset form after delay
            setTimeout(() => {
                emailForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML =
                    '<span>Notify Me</span><div class="btn-icon">→</div>';
                submitBtn.style.background = 'var(--gradient-primary)';
            }, 2000);
        }, 1500);
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzSKjLk2GHPrXayMgaEjRK5MGvlP-9dhUv4Tz-yYqU7KlqBYh4CWFYn9FZ3fHV1VPEz/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            if (response.ok) {
                console.log('Success!', response);
            } else {
                console.error('Failed to submit:', response.statusText);
            }
        })
        .catch((error) => console.error('Error!', error.message));
});

// Add CSS animation for number changes
const style = document.createElement('style');
style.textContent = `
    .pulse {
        animation: pulse 0.2s ease-in-out;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Initialize countdown
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function () {
    // Parallax effect for floating shapes
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');

        shapes.forEach((shape, index) => {
            const speed = 0.5 + index * 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1
                }deg)`;
        });
    });

    // Add hover effects to countdown items
    const countdownItems = document.querySelectorAll('.countdown-item');
    countdownItems.forEach((item) => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Smooth reveal animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.hero-section > *');
    animatedElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
