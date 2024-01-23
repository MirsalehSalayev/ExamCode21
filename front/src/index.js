import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./reset.css"
import "./App.css";
import App from './App';
import { HelmetProvider } from "react-helmet-async"
import WishlistProvider from './context/wishlistContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <WishlistProvider>

        <App />
      </WishlistProvider>

    </HelmetProvider>
  </React.StrictMode>
);
