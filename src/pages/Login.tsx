import React from 'react';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import appleIcon from '../assets/apple.png';
import avatarIcon from '../assets/avatar.png'
import './Login.css'; // Importez votre fichier CSS pour le style


const Login: React.FC = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Fonction de connexion
    console.log('Login clicked');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={avatarIcon} alt="Avatar" className="login-avatar-icon" />
        <h1>Log in</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input className="login-input" type="text" placeholder="Username" />
          <input className="login-input" type="password" placeholder="Password" />
          <div className="login-options">
            <a href="#" className="login-option">Forgot your password?</a>
          </div>
          <div className="loggers">
            <button className="login-button" type="submit">Log in</button>
            <button className="login-button" type="submit">Sign up</button>
          </div>
          <a className="login-option">or with</a>
          <div className="login-social-options">
            <button className="login-social-button google">
              <img src={googleIcon} alt="Google" className="login-social-icon" />
            </button>
            <button className="login-social-button facebook">
              <img src={facebookIcon} alt="Facebook" className="login-social-icon" />
            </button>
            <button className="login-social-button apple">
              <img src={appleIcon} alt="Apple" className="login-social-icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
