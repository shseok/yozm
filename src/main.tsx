import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import './main.scss';
import { AuthProvider } from '@/context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
