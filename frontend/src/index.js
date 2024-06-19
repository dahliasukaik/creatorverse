// src/index.js
import '@picocss/pico/css/pico.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
