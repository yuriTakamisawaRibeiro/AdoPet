import React from 'react';
import ReactDOM from 'react-dom/client';   
import GlobalStyle from './styles/global';



import { Home } from './pages/Home';
import {AboutUs} from "./pages/AboutUs"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home/>
  </React.StrictMode>
)

