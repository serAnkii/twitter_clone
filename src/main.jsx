import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider appId={""} serverUrl={""}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </MoralisProvider>
);