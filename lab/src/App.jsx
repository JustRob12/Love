// App.jsx
import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      <Flowers />
    </div>
  );
}


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}


export default App;
