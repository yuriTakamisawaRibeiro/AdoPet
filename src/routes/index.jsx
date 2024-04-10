import { useState, useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function RoutesIndex() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuário está autenticado
        console.log("autenticado")
        setIsAuthenticated(true);
      } else {
        // Usuário não está autenticado
        console.log("nao autenticado")
        setIsAuthenticated(false);
      }
    });

    return () => {
      unsubscribe(); // Cancela o listener de autenticação ao desmontar o componente
    };
  }, []); // O array vazio assegura que este efeito só será executado uma vez

  return (
    <BrowserRouter>
       {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}