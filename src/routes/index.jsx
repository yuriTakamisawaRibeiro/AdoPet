import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function RoutesIndex() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);

        const sessionTimeout = setTimeout(() => {
          signOut(auth);
          setIsAuthenticated(false);
        }, 120 * 60 * 1000);

        return () => clearTimeout(sessionTimeout);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
        {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}