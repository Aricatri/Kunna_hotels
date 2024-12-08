import React, { useState, useEffect } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  // Estado para el modo actual
  const [currState, setCurrState] = useState('Sign Up');

  // Estado para saber si el usuario está logueado
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Estado para almacenar el nombre del usuario
  const [username, setUsername] = useState('');

  // Efecto para cargar el estado desde localStorage
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedIn');
    const storedUsername = localStorage.getItem('username');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      setUsername(storedUsername || 'Usuario'); // Recuperar el nombre si está disponible
    }
  }, []);

  // Función para manejar login/signup
  const handleAuthAction = () => {
    if (currState === 'Login') {
      // Simular login
      const enteredName = document.getElementById('username-input').value;
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', enteredName); // Guardar el nombre
      setUsername(enteredName);
      setIsLoggedIn(true);
      setShowLogin(false); // Cerrar el popup
    } else {
      // Simular creación de cuenta
      alert('Cuenta creada con éxito.');
      setCurrState('Login');
    }
  };

  // Función para logout
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  if (isLoggedIn) {
    // Si está logueado, muestra un mensaje
    return (
      <div className="login-popup">
        <div className="login-popup-container">
          <h2>
            Bienvenido de nuevo, <span>{username}</span>
          </h2>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Sign Up' ? (
            <input id="username-input" type="text" placeholder="Nombre" />
          ) : (
            <input id="username-input" type="text" placeholder="Nombre de usuario" />
          )}
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <button onClick={handleAuthAction}>
          {currState === 'Login' ? 'Login' : 'Crear cuenta'}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>Acepto los términos de uso y la política de privacidad.</p>
        </div>
        {currState === 'Login' ? (
          <p>
            ¿Crear una cuenta nueva?{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click Aquí</span>
          </p>
        ) : (
          <p>
            ¿Tienes una cuenta?{' '}
            <span onClick={() => setCurrState('Login')}>Inicie sesión aquí</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
