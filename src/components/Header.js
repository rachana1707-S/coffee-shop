import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

const Header = ({ 
  activeSection, 
  scrollToSection, 
  isLoggedIn, 
  user, 
  cart, 
  onShowAuth, 
  onShowCart, 
  onLogout 
}) => {
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="header" id="home">
      <img 
        src="/assets/images/bgg.avif" 
        className="header-bg"
        alt="Coffee background"
      />
      
      {/* Logo and Title Overlay */}
      <div className="header-overlay">
        <img 
          src="/assets/images/coffee-cup.png" 
          className="header-logo"
          alt="Coffee cup logo"
        />
        <h1 className="header-title">Cafe Mosaic</h1>
      </div>

      {/* Auth Controls */}
      <div className="auth-controls">
        {isLoggedIn ? (
          <>
            <span className="user-welcome">Welcome, {user?.name}!</span>
            <button onClick={onShowCart} className="cart-button">
              <ShoppingCart className="h-6 w-6 text-white" />
              {getCartItemCount() > 0 && (
                <span className="cart-badge">
                  {getCartItemCount()}
                </span>
              )}
            </button>
            <button onClick={onLogout} className="auth-button">
              Logout
            </button>
          </>
        ) : (
          <button onClick={onShowAuth} className="auth-button">
            <User className="h-5 w-5" />
            Login / Register
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-left">
          <ul className="nav-list">
            <li>
              <img src="/assets/images/menu.png" className="dash" alt="menu" />
            </li>
            <li>
              <a 
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className="nav-link"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#menu"
                onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}
                className="nav-link"
              >
                Menu
              </a>
            </li>
            <li>
              <a 
                href="#table"
                onClick={(e) => { e.preventDefault(); scrollToSection('table'); }}
                className="nav-link"
              >
                Book a table
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <ul className="nav-list">
            <li>
              <a 
                href="#Ambience"
                onClick={(e) => { e.preventDefault(); scrollToSection('Ambience'); }}
                className="nav-link"
              >
                Ambience
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="nav-link"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a 
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className="nav-link"
              >
                About us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Quote */}
      <div className="header-quote">
        <p>Brewing Joy in Every Cup....</p>
      </div>
    </div>
  );
};

export default Header;