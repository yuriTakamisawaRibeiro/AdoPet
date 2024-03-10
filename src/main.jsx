import React from 'react';
import ReactDOM from 'react-dom/client';   
import GlobalStyle from './styles/global';

import { SignIn } from './pages/SignIn';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <SignIn/>
  </React.StrictMode>,
)

