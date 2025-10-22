# Visual Theme Editor

A visual theme editor that provides a WYSIWYG experience for customizing e-commerce storefronts. This editor allows merchants to edit their theme settings in real-time with instant visual feedback.

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

1. **Navigate to the project directory**:
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


