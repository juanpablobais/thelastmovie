import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      if (username.length < 4) {
        throw new Error('El nombre de usuario debe tener al menos 4 caracteres.');
      }
      if (!/^(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(password)) {
        throw new Error('La contraseña debe tener al menos 6 caracteres y estar compuesta por letras y números.');
      }
      await auth.createUserWithEmailAndPassword(email, password);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container w-50">
        <h1 className="mb-4 text-center">Regístrate</h1>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleRegister}>
        <div className="mb-2 form-group text-center">
  <label htmlFor="username">Nombre de usuario</label>
  <input
    type="text"
    className="form-control"
    id="username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    minLength="4"
    required
  />
</div>
<div className="mb-2 form-group text-center">
  <label htmlFor="email">Correo electrónico</label>
  <input
    type="email"
    className="form-control"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
</div>
<div className="mb-2 form-group text-center">
  <label htmlFor="birthdate">Fecha de nacimiento</label>
  <input
    type="date"
    className="form-control"
    id="birthdate"
    value={birthdate}
    onChange={(e) => setBirthdate(e.target.value)}
    required
  />
</div>
<div className="form-group text-center">
  <label htmlFor="password">Contraseña</label>
  <input
    type="password"
    className="form-control"
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    minLength="6"
    pattern="^(?=.*[a-z])(?=.*[0-9]).{6,}$"
    required
  />
</div>

          <div className="d-flex justify-content-center">
            <Link to="/Login" className="btn btn-link mr-3">¿Ya tienes una cuenta? Inicia sesión</Link>
            
          </div>
          <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary ">Regístrate</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
