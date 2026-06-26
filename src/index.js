import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
 * GitHub Pages SPA Redirect Support
 * Restores the original URL after the custom 404.html redirects
 * all requests back to the application root.
 */
const redirect = sessionStorage.getItem('redirect');

if (redirect) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', redirect);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Performance monitoring
reportWebVitals();