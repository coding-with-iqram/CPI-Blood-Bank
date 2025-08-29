import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // ✅ Add this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ✅ Register service worker
serviceWorkerRegistration.register();
