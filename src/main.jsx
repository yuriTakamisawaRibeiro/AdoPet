import React from 'react';
import ReactDOM from 'react-dom/client';   
import GlobalStyle from './styles/global';
import { Home } from './pages/Home'
import { PetRegisterHeader } from './components/PetRegisterHeader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <PetRegisterHeader />
  </React.StrictMode>
)

