import React from 'react';
import ReactDOM from 'react-dom/client';   
import GlobalStyle from './styles/global';
import { Contact } from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Contact/>
  </React.StrictMode>
)

