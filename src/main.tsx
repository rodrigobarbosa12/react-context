import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import AuthProcider from './providers/AuthProcider';


/**
 * PASSO 2
 * Envolva o provider em toda a aplicação.
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProcider>
      <App />
    </AuthProcider>
  </React.StrictMode>
)
