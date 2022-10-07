import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BuscaProvider } from './providers/busca';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BuscaProvider>
      <App />
    </BuscaProvider>
  </React.StrictMode>
);
