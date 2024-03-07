import React from 'react';
import ReactDOM from 'react-dom/client';   
import {SignUp} from './pages/SignUp/index';
import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <SignUp/>
  </React.StrictMode>,
)

