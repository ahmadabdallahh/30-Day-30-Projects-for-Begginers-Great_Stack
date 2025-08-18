## Dark–Light Mode Portfolio

A simple, responsive portfolio layout that supports dark and light themes. The theme is toggled with a switch in the header and persisted using localStorage. Built with semantic HTML, modern CSS (custom properties), and vanilla JavaScript.

### Features

- **Theme toggle**: Switch between light and dark themes via the header toggle
- **Persistence**: Remembers your choice using localStorage (`bg-web` key)
- **Responsive UI**: Adaptive layout, mobile header, and accessible controls
- **Polish**: Smooth transitions, subtle animations, and Font Awesome icons
- **Dynamic footer year**: Year auto-updates from JavaScript

### Responsive design

- **Breakpoints**
  - ≤ 1024px: Reduced header padding; smaller search box; nav link text labels hidden; profile info hidden.
  - ≤ 768px: Desktop nav and search hidden; mobile menu button shown; `.mobile-nav.active` becomes visible; hero titles scale down; buttons stack; projects grid switches to 1 column; skills stack vertically; user profile hidden; tighter header spacing.
  - ≤ 480px: Tighter container/header padding; smaller logo and hero elements; reduced section paddings for compact view.
- **Mobile navigation**: The mobile menu appears when the element `.mobile-nav` has the `active` class.
- **Fluid layout**: Grids and typography scale for comfortable reading and interaction on small screens.

### Tech stack

- **HTML5**
- **CSS3**: custom properties, responsive design, animations
- **JavaScript**: minimal DOM scripting, localStorage
- **Font Awesome** (CDN)

### Project structure

```
├── 📁 image/
│   └── 🖼️ doctor-illustration.png
├── 🌐 index.html
├── 📄 main.js
└── 🎨 style.css
```

### How it works

- **CSS variables**: Light theme values are defined in `:root`. The `.dark-mode` class overrides these variables.
- **Toggle logic** (`main.js`):
  - Click on the element with class `theme-switch` toggles `document.body.classList.toggle('dark-mode')`.
  - The current mode is stored in localStorage under `bg-web` as `"dark"` or `"light"`.
  - On `DOMContentLoaded`, the saved preference is applied.
- **Footer year**: Updates automatically with `new Date().getFullYear()`.

### Run locally

- **Option 1**: Open `index.html` directly in your browser.
- **Option 2**: Use a local dev server (e.g., VS Code Live Server) for best results with asset paths and caching.

### Customization

- **Colors**: Update theme values in `style.css` under `:root` (light) and `.dark-mode` (dark).
- **Default theme**: The page defaults to light mode unless localStorage has `bg-web = "dark"`.
- **Icons**: Replace or extend icons via Font Awesome classes in `index.html`.
- **Profile & content**: Edit text and sample items in the `About`, `Projects`, and `Contact` sections.

# Demo
Demo URL : https://dark-lightt-mode.vercel.app/

### License

No explicit license provided. Intended for learning/demo purposes. Add a license file if you plan to distribute.
