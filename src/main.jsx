import React from 'react';
import ReactDOM from 'react-dom/client';   
import GlobalStyle from './styles/global';
import { RoutesIndex } from './routes';

// import AppRoutes from "./routes/app.routes"; // Modificado para importar o componente corretamente

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RoutesIndex/>
  </React.StrictMode>
)

