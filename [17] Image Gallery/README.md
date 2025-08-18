# Image Gallery

A responsive, interactive image gallery that displays portrait photographs with smooth navigation controls. Built with vanilla HTML, CSS, and JavaScript.

# Screen Shot

![Screenshot of the Image Gallery](images/web-preview.png)

## Features

- **Horizontal Scrolling Gallery**: Shows multiple images in a horizontal layout
- **Navigation Controls**: Left/right arrow buttons for easy navigation
- **Multiple Navigation Methods**:
  - Click navigation buttons
  - Mouse wheel scrolling
  - Touch swipe gestures (mobile)
  - Keyboard arrow keys
- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: CSS transitions for polished user experience
- **Grayscale Effect**: Images display in black and white with hover color effect
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Project Structure

```
[17] Image Gallery/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Styling and responsive design
├── ⚡ main.js             # Gallery functionality and navigation
└── 📖 README.md           # Project documentation
```

## How It Works

### HTML Structure

- **Gallery Container**: Wraps the entire gallery with overflow hidden
- **Image Grid**: Flexbox layout containing individual image cards
- **Navigation Buttons**: Previous/Next buttons with chevron icons
- **Image Cards**: Individual containers for each portrait image

### CSS Features

- **Flexbox Layout**: Horizontal scrolling with `display: flex`
- **Responsive Grid**: Adapts from 3 columns on desktop to single column on mobile
- **Mobile-First**: Responsive design that works on all devices

### JavaScript Functionality

- **Button Navigation**: Click handlers for left/right navigation
- **Wheel Scrolling**: Mouse wheel support for horizontal scrolling
- **Touch Support**: Swipe gestures for mobile devices
- **Keyboard Navigation**: Arrow key support for accessibility
- **Smooth Scrolling**: CSS scroll-behavior for polished navigation

## Usage

### Basic Navigation

1. **Click Navigation**: Use the left/right arrow buttons
2. **Mouse Wheel**: Scroll horizontally with your mouse wheel
3. **Keyboard**: Use left/right arrow keys
4. **Touch**: Swipe left/right on mobile devices

## Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Navigate through the gallery using any supported method
4. Customize images, colors, or layout as needed

## Browser Compatibility Notes

- **CSS Scroll Snap**: May not work in older browsers
- **Touch Events**: Mobile-specific features require touch-enabled devices
- **CSS Custom Properties**: Fallback colors provided for older browsers

# Demo

Demo URL : https://simplle-image-gallery.vercel.app/

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
