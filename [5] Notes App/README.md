# Notes App

A simple, colorful Notes App built with HTML, CSS, and JavaScript. This project allows users to quickly add, edit, and delete notes in a visually appealing interface.

## Features

- **Add Notes:** Click the "Add Note" button to create a new note. Notes are editable directly on the page.
- **Edit Notes:** Click inside any note to edit its content.
- **Delete Notes:** Click the trash/delete icon on a note to remove it.
- **Colorful Notes:** Notes are displayed in alternating pastel colors for easy organization.
- **Responsive Design:** The layout adapts to different screen sizes for mobile and desktop use.

## How It Works

- The app uses a contenteditable `<p>` element for each note, allowing direct editing.
- Notes are displayed in a grid layout.
- Each note includes a delete button (trash icon) for easy removal.
- The app is styled with a modern, clean look using CSS.

## File Structure

```
[5] Notes App/
├── index.html      # Main HTML file
├── style.css       # App styling
├── main.js         # App logic (add, edit, delete notes)
├── notepad.ico     # Favicon for the app
└── image/
    └── delete.png  # Delete/trash icon for notes
```

## Usage

1. Open `index.html` in your web browser.
2. Type a note in the textarea and click "Add Note" to create a new note.
3. Edit any note by clicking inside it.
4. Delete a note by clicking the trash icon in the note's corner.

## Customization

- You can change the note colors by editing the `.input-box:nth-child()` selectors in `style.css`.
- The delete icon can be replaced by changing `image/delete.png`.

## Screenshots

_(Add screenshots here if desired)_

## License

This project is for educational purposes and is free to use and modify.
