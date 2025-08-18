// TODO: Light / Dark Mode

const footerCopyright = document.querySelector('.footer p');
const themeSwitch = document.querySelector('.theme-switch');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

// TODO: Get the Correct Date That is Displayed in the Footer (Automatic Changed not Static)
let myData = new Date().getFullYear();
footerCopyright.textContent = `© ${myData} John Doe. All rights reserved.`;

// NOTE: Sync theme toggle with UI and storage
if (themeSwitch) {
  themeSwitch.addEventListener('change', (event) => {
    const isDark = event.target.checked;
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('bg-web', isDark ? 'dark' : 'light');
    themeSwitch.setAttribute('aria-checked', String(isDark));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('bg-web');
  const isDark = savedMode === 'dark';
  document.body.classList.toggle('dark-mode', isDark);
  if (themeSwitch) {
    themeSwitch.checked = isDark;
    themeSwitch.setAttribute('aria-checked', String(isDark));
  }
});

// Mobile navigation: toggle, close on link click, update ARIA, handle resize & Escape
if (mobileMenuBtn && mobileNav) {
  const setMobileNavState = (isOpen) => {
    mobileNav.classList.toggle('active', isOpen);
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  };

  // Ensure initial state is closed for accessibility
  setMobileNavState(false);

  mobileMenuBtn.addEventListener('click', () => {
    const willOpen = !mobileNav.classList.contains('active');
    setMobileNavState(willOpen);
  });

  // Close menu when any mobile nav link is clicked
  const mobileNavLinks = mobileNav.querySelectorAll('a');
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => setMobileNavState(false));
  });

  // Auto-close on viewport resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
      setMobileNavState(false);
    }
  });

  // Allow closing with Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
      setMobileNavState(false);
    }
  });
}
