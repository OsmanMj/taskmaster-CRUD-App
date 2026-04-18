# TaskMaster: Collaborative Task Management Dashboard

A modern, "SaaS-style" Task Management Dashboard built to demonstrate modern web development fundamentals. The application features a clean UI, a robust task management system with real-time feedback, and dynamic theming and localization.

## 🚀 Features

- **Full CRUD Operations**: Create, read, update, and delete tasks seamlessly.
- **Dynamic Dashboard**: View tasks categorized by priority and track your progress with the built-in statistics overview.
- **Dark & Light Mode**: Integrated native theming utilizing Tailwind CSS's selector-based dark mode (`v4`), persisting your choice.
- **Localization (i18n)**: Instantly switch the entire application's language between English and Turkish (Türkçe).
- **Responsive Layout**: Designed to look stunning on both desktop and mobile devices.
- **Animated Toast Notifications**: Smooth, interactive alerts using `react-hot-toast` for all task modifications.
- **Local Storage Persistence**: Your tasks, theme, and language preferences are automatically saved in the browser.

## 🛠️ Tech Stack

- **ReactJS (v19)** - Frontend framework (Functional Components & Hooks like `useState`, `useEffect`, `useMemo`)
- **TypeScript** - For strict typing and interfaces
- **Vite** - Lightning-fast build tool
- **Tailwind CSS (v4)** - Utility-first styling framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful, consistent iconography
- **UUID** - Generating unique task identifiers

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/OsmanMj/taskmaster-CRUD-App.git
   cd taskmaster-CRUD-App
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`

## 📁 Project Structure

- `/src/components`: Reusable UI elements (Sidebar, TaskCard, TaskModal, ConfirmModal, Statistics).
- `/src/pages`: Main views (Dashboard, Settings).
- `/src/contexts`: Context providers for managing global state (ThemeContext, LanguageContext).
- `/src/interfaces`: TypeScript definitions for data structures (Task).
- `/src/translations`: Dictionary objects for English and Turkish localization.
- `/src/hooks`: Custom React hooks (e.g., `useTasks`).

## 👨‍💻 Developer Notes

This project was built focusing on semantic HTML5 structure, advanced CSS grid/flexbox layouts via Tailwind, and optimized React logic to provide a clean and scalable architecture.

---
*Educational Edition - Built to showcase Frontend Engineering skills.*
