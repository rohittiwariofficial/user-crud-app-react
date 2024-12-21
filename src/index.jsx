import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' instead of 'react-dom'

import App from './App'; // Import your main App component
import './index.css';

// Create a root element and render your app inside it
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(<App />); // Render your app
