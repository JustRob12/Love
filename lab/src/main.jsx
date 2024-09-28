import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Flower from './Flower.jsx';
import './index.css';
import * as serviceWorkerRegistration from '/service-worker.js'; // Import the service worker registration

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Flower />
  </StrictMode>
);

// Register the service worker  
serviceWorkerRegistration.register();
