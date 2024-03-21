import React from 'react';
import ReactDOM from 'react-dom/client';   
import GlobalStyle from './styles/global';

import { DescriptionPetRegister } from "./pages/DescriptionPetRegister"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <DescriptionPetRegister />
  </React.StrictMode>
)

