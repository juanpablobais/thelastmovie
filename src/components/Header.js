import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const isUserLoggedIn = false; // asumiendo que hay una variable que indica si el usuario inició sesión o no

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand mx-auto" to="/">The Last Movie</Link>
        <div className="d-flex align-items-center justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile/123">Mi Perfil</Link>
            </li>
          </ul>
          <div className="ms-3">
            {isUserLoggedIn ? (
              <button className="btn btn-outline-dark btn-sm">Cerrar sesión</button>
            ) : (
              <Link className="btn btn-outline-dark btn-sm" to="/login">Iniciar sesión</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
