UI Dashboards - Full Stack Web Application
This project is a responsive web application built with React and Vite that displays various data dashboards, including cards, charts, and tables. It was created to fulfill a multi-step coding challenge, starting from static UI to a full-stack application with its own backend server.

The application is designed to simulate a mobile UI and includes features like navigation, API data fetching, interactive charts, and local data persistence for uploaded images.

✨ Features
Responsive Mobile-First Design: Styled to match Figma mockups for a clean, modern mobile experience.

Component-Based Architecture: Built with reusable React components for maintainability.

Multi-Page Navigation: Uses React Router for seamless navigation between different dashboard screens via a sidebar menu.

Dynamic Data Fetching: Fetches data from a live API and displays it in various formats.

Interactive Charts: Includes bar and pie charts with tooltips and click interactions, built with Recharts.

Photo Upload & Persistence: Allows users to attach a photo to a user's details, which persists in the browser's local storage.

Full Stack Implementation: Includes a custom Node.js/Express backend server that serves the data, completing the full-stack loop.

🛠️ Technology Stack
Frontend:

React (v18)

Vite - for a fast development experience.

React Router - for client-side routing.

Axios - for making HTTP requests to the backend.

Recharts - for creating interactive charts.

React Icons - for UI icons.

Backend:

Node.js

Express.js - for creating the API server.

CORS - to handle cross-origin requests.

Development:

Concurrently - to run both frontend and backend servers with a single command.

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js (version 16 or later) and npm installed on your computer.

Installation & Setup
Clone the repository to your local machine:

git clone https://github.com/your-username/ui-dashboards.git
cd ui-dashboards

Install all dependencies for both the frontend and backend. This command reads the package.json file and installs everything needed.

npm install

Run the development servers:
This command uses concurrently to start both the Vite frontend server (usually on http://localhost:5173) and the Express backend server (on http://localhost:3001).

npm run dev

Open the application:
Open your web browser and navigate to http://localhost:5173. You should see the "Cards 1" screen of the application.

📜 Available Scripts
In the project directory, you can run:

npm run dev

Runs the frontend and backend servers simultaneously in development mode.

npm run dev:frontend

Starts only the Vite frontend development server.

npm run dev:backend

Starts only the Node.js Express backend server.

npm run build

Builds the app for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance.

npm run preview

Serves the production build from the dist folder locally to preview it before deployment.

📂 Project Structure
Here is an overview of the key files and directories in the project:

ui-dashboards/
├── public/               # Static assets
├── src/
│   ├── api/              # Backend server files
│   │   ├── people.json   # Mock data for users
│   │   ├── products.json # Mock data for products
│   │   └── server.js     # The Express server logic
│   │
│   ├── components/       # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── ...
│   │
│   ├── pages/            # Page components for each route
│   │   ├── Cards1.jsx
│   │   ├── Cards2.jsx
│   │   ├── Charts.jsx
│   │   ├── Users.jsx
│   │   └── UserDetail.jsx
│   │
│   ├── App.jsx           # Main app component with routing logic
│   ├── index.css         # Global CSS styles
│   └── main.jsx          # Entry point of the React application
│
├── .gitignore
├── index.html
├── package.json
└── README.md
