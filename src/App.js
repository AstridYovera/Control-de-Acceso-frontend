import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Navbar';
import RegisterVisitor from './RegisterVisitor'; 
import SobreNosotros from './SobreNosotros'; 
import AccessQR from './AccessQR'; 
import './App.css'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Duración de la pantalla de carga

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {loading ? (
          <div className="loading-screen">
            <div className="spinner"></div> {/* Spinner animado */}
            <h1>Bienvenido a CIBERTEC</h1>
          </div>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/visitantes" element={<RegisterVisitor />} />
              <Route path="/accessqr" element={<AccessQR />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
