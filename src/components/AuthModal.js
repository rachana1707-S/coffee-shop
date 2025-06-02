 
import React, { useState } from 'react';
import { X } from 'lucide-react';

const AuthModal = ({ authMode, setAuthMode, onLogin, onRegister, onGoogleLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'login') {
      onLogin(email, password);
    } else {
      onRegister(name, email, password);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2>{authMode === 'login' ? 'Login' : 'Register'}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {authMode === 'register' && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              style={{ marginBottom: '15px' }}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            style={{ marginBottom: '15px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            style={{ marginBottom: '15px' }}
          />
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '10px' }}>
            {authMode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
        
        <button onClick={onGoogleLogin} className="btn" style={{ width: '100%', backgroundColor: '#dc2626', color: 'white' }}>
          Google Login
        </button>
        
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} style={{ background: 'none', border: 'none', color: '#d97706', cursor: 'pointer' }}>
            {authMode === 'login' ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;