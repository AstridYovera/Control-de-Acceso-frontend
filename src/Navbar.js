import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import './Navbar.css'; 
import logo from './img/logoCiber.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="CIBERTEC Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/register-visitor">Inicio</Link></li>
        <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
        <li><Link to="/visitantes">Visitantes</Link></li>
        <li><Link to="/accessqr">AccessQR</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
