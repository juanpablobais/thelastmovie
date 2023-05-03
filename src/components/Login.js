import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';

function Login() {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(`${username}@example.com`, password);
      history.push('/dashboard');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await auth.sendPasswordResetEmail(`${username}@example.com`);
      alert('Se ha enviado un correo electrónico para restablecer tu contraseña.');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container w-50">
        <h1 className="mb-4 text-center">Iniciar Sesión</h1>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-link mr-3" onClick={handlePasswordReset}>
              ¿Olvidaste tu contraseña?
            </button>
            <Link to="/Register" className="btn btn-link">¿No tienes una cuenta? Regístrate</Link>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mr-3">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
