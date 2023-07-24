import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import DestinationDetailsPage from "./Components/Main Page/DestinationDetailsPage";
import { lazy, Suspense, useEffect, useState } from 'react';
import Loader from './Components/Main Page/Loader';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';


const Home = lazy(() => import("./Pages/Home"));
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const Main = lazy(() => import("./Pages/Main"));
const Chat = lazy(() => import("./Pages/Chat"));


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    // Clean up the listener on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
       <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/destination/:id" element={<DestinationDetailsPage />} />
            <Route path="/chat" element={<Chat />} />
              <Route
                path="/main"
                element={<Main isAuthenticated={isAuthenticated} />}
              />
          </Routes>
        </Suspense>
    </BrowserRouter>
  );
}


export default App;