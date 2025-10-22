# Visual Theme Editor

It lets users edit a website’s look in real-time. You can change the Header, Hero section, Products, and Footer. You can either be in Edit Mode to make changes or Preview Mode to see how it looks live.

## Features

- **Real-time Visual Updates**: Changes in the settings panel instantly reflect in the preview
- **Edit Mode & Preview Mode**: Toggle between editing with settings panel and full preview mode with working links
- **Inline Editing**: Click directly on text elements in the hero section to edit them
- **Component-based Settings**: Organized settings panel with tabs for Header, Hero, Products, and Footer
- **JSON Export**: Save button outputs the complete theme configuration as JSON

## How to Run Locally

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone the Repo and and navigate to project directory**:
   ```bash
   cd theme-editor
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - The application will run on `http://localhost:5173`

## How to Use the Editor

### Edit Mode

1. **Settings Panel**: On the right side, you'll find the settings panel with four tabs:
   - **Header**: Configure logo/site name display, upload logo URL, and manage navigation links
   - **Hero**: Change hero image, title, and call-to-action button
   - **Products**: Edit headline and control the number of products displayed
   - **Footer**: Add, edit, or remove footer links

2. **Inline Editing**: Click directly on the hero title or button text to edit in place

3. **Add/Remove Links**: Use the "+" button to add new navigation or footer links, and the trash icon to remove them

### Preview Mode

1. Click the **Preview** button in the top toolbar
2. All links and buttons become fully functional only in preview mode.
3. The settings panel is hidden to show the full preview
4. Click **Edit** to return to editing mode

### Saving Your Work

Click the **Save** button in the top toolbar to:
- Outputs the complete theme configuration (JSON) to the browser console

## How state works
1. The main App keeps all the data in React’s useState.
2. **Important states:**
 - themeConfig → current theme settings
 - isEditMode → are we editing or just previewing?
 - showSettings → do we show the settings panel?
3. **Updating state:**
Whenever you make a change (like editing a title), the app creates a new copy of the theme data and updates themeConfig. This way React updates the components automatically.

## How changes flow
1. Settings Panel:
   - You type something or change a setting.
   - The panel calls an update function.
   - App updates themeConfig → React re-renders the components → changes appear immediately.
3. Inline Edit:
   - You click on text (like the hero title).
   - Type your new text.
   - Press Enter → state updates → component shows the new text instantly.
5. Preview Mode:
   - Click “Preview”.
   - Edit panel hides.
   - Buttons and links work normally.
   - Inline editing is turned off.

## Summary
- App loads default theme.
- Renders all sections (Header, Hero, Products, Footer).
- SettingsPanel lets you change anything.
- InlineEdit lets you type directly on the page.
- Edit Mode → you can change things.
- Preview Mode → see how the website will look with working links and buttons.
