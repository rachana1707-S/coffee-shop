import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, X } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="header" id="home">
      <img 
        src="/assets/images/ambience/bgg.avif" 
        className="header-bg"
        alt="Coffee background"
      />
      
      {/* Logo and Title Overlay */}
      <div className="header-overlay">
        <img 
          src="/assets/images/icons/coffee-cup.png" 
          className="header-logo"
          alt="Coffee cup logo"
        />
        <h1 className="header-title">Cafe Mosaic</h1>
      </div>

      {/* Fixed Navigation */}
      <nav className={`nav desktop-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-left">
            <img 
              src="/assets/images/icons/menu.png" 
              className="dash menu-icon" 
              alt="menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <div className="nav-brand">
              <img 
                src="/assets/images/icons/coffee-cup.png" 
                className="nav-cup-icon" 
                alt="coffee cup"
              />
              <span className="nav-brand-text">Café Mosaic</span>
            </div>
            <ul className="nav-list">
              <li>
                <a 
                  href="#home"
                  onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#menu"
                  onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}
                  className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
                >
                  Menu
                </a>
              </li>
              <li>
                <a 
                  href="#table"
                  onClick={(e) => { e.preventDefault(); scrollToSection('table'); }}
                  className={`nav-link ${activeSection === 'table' ? 'active' : ''}`}
                >
                  Book Table
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <ul className="nav-list">
              {isLoggedIn ? (
                <>
                  <li>
                    <span className="user-welcome-nav">Hey, {user?.name}! 👋</span>
                  </li>
                  <li>
                    <button onClick={onShowCart} className="cart-nav-button">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Cart</span>
                      {getCartItemCount() > 0 && (
                        <span className="cart-badge">{getCartItemCount()}</span>
                      )}
                    </button>
                  </li>
                  <li>
                    <button onClick={onLogout} className="nav-link logout-btn">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button onClick={onShowAuth} className="nav-link auth-nav-btn">
                    <User className="h-4 w-4" />
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <h3 style={{ 
                color: '#d97706', 
                fontFamily: 'cursive', 
                margin: 0,
                fontSize: '24px'
              }}>
                Menu
              </h3>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="close-menu-btn"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                <li>
                  <a 
                    href="#home"
                    onClick={(e) => { e.preventDefault(); handleMenuItemClick('home'); }}
                    className="mobile-nav-link"
                  >
                    🏠 Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#menu"
                    onClick={(e) => { e.preventDefault(); handleMenuItemClick('menu'); }}
                    className="mobile-nav-link"
                  >
                    ☕ Menu
                  </a>
                </li>
                <li>
                  <a 
                    href="#table"
                    onClick={(e) => { e.preventDefault(); handleMenuItemClick('table'); }}
                    className="mobile-nav-link"
                  >
                    📅 Book a Table
                  </a>
                </li>
                <li>
                  {isLoggedIn ? (
                    <>
                      <div className="mobile-user-info">
                        <span className="mobile-user-welcome">👋 Welcome, {user?.name}!</span>
                      </div>
                      <a 
                        href="#cart"
                        onClick={(e) => { e.preventDefault(); onShowCart(); setIsMobileMenuOpen(false); }}
                        className="mobile-nav-link"
                      >
                        🛒 Cart {getCartItemCount() > 0 && `(${getCartItemCount()})`}
                      </a>
                      <a 
                        href="#logout"
                        onClick={(e) => { e.preventDefault(); onLogout(); setIsMobileMenuOpen(false); }}
                        className="mobile-nav-link logout-link"
                      >
                        🚪 Logout
                      </a>
                    </>
                  ) : (
                    <a 
                      href="#login"
                      onClick={(e) => { e.preventDefault(); onShowAuth(); setIsMobileMenuOpen(false); }}
                      className="mobile-nav-link auth-link"
                    >
                      👤 Login / Register
                    </a>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Quote */}
      <div className="header-quote">
        <p>Brewing Joy in Every Cup....</p>
      </div>

      {/* Add the CSS styles */}
      <style jsx>{`
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1000;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 20px;
        }

        .mobile-menu {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 25px;
          width: 280px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          animation: slideInLeft 0.3s ease-out;
          margin-top: 60px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
        }

        .close-menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
          color: #666;
        }

        .close-menu-btn:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #333;
        }

        .mobile-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-nav-list li {
          margin-bottom: 3px;
        }

        .mobile-nav-link {
          display: block;
          padding: 12px 15px;
          text-decoration: none;
          color: #333;
          font-family: cursive;
          font-size: 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .mobile-nav-link:hover {
          background: #fef3c7;
          color: #d97706;
          transform: translateX(5px);
        }

        .mobile-user-info {
          padding: 12px 15px;
          background: #f0f9ff;
          border-radius: 8px;
          margin-bottom: 10px;
          border-left: 4px solid #d97706;
        }

        .mobile-user-welcome {
          color: #d97706;
          font-family: cursive;
          font-size: 14px;
          font-weight: 600;
        }

        .auth-link {
          background: #d97706 !important;
          color: white !important;
          font-weight: 600;
        }

        .auth-link:hover {
          background: #b45309 !important;
          transform: translateX(5px) scale(1.02);
        }

        .logout-link {
          background: #dc2626 !important;
          color: white !important;
        }

        .logout-link:hover {
          background: #b91c1c !important;
          transform: translateX(5px);
        }

        .menu-icon {
          width: 20px !important;
          height: 20px !important;
          cursor: pointer;
          filter: brightness(0) invert(1);
          transition: all 0.3s ease;
          opacity: 0.9;
          margin-right: 10px;
          padding: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .menu-icon:hover {
          opacity: 1;
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.15);
        }

        /* Navigation Menu Icon Styles */
        .menu-icon {
          width: 24px !important;
          height: 24px !important;
          cursor: pointer;
          filter: brightness(0) invert(1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.9;
          margin-right: 16px;
          padding: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .menu-icon:hover {
          opacity: 1;
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.15);
        }

        /* Navigation Cup Icon Styles */
        .nav-cup-icon {
          width: 24px !important;
          height: 24px !important;
          filter: brightness(0) invert(1);
          opacity: 0.9;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-right: 8px;
        }

        .nav-brand:hover .nav-cup-icon {
          opacity: 1;
          transform: rotate(15deg) scale(1.05);
          filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(30deg);
        }

        /* Modern Navigation Design */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 100;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(50, 30, 20, 0.3) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
        }

        .nav.scrolled {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(50, 30, 20, 0.9) 100%);
          backdrop-filter: blur(25px) saturate(200%);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(217, 119, 6, 0.3);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: padding 0.4s ease;
        }

        .nav.scrolled .nav-container {
          padding: 12px 24px;
        }

        .nav-left {
          position: static;
          transform: none;
          display: flex;
          align-items: center;
        }

        .nav-right {
          position: static;
          transform: none;
          display: flex;
          align-items: center;
        }

        .nav-list {
          list-style: none;
          display: flex;
          gap: 8px;
          margin: 0;
          padding: 0;
          align-items: center;
          background: none;
          backdrop-filter: none;
          border-radius: 0;
          border: none;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-right: 40px;
          padding: 8px 16px;
          border-radius: 50px;
          background: rgba(217, 119, 6, 0.1);
          border: 1px solid rgba(217, 119, 6, 0.2);
          transition: all 0.3s ease;
        }

        .nav-brand:hover {
          background: rgba(217, 119, 6, 0.15);
          transform: translateY(-1px);
        }

        .nav-brand-text {
          color: white;
          font-family: cursive;
          font-size: 18px;
          font-weight: 600;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.9) !important;
          text-decoration: none;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding: 10px 18px !important;
          border-radius: 50px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: none;
          border: 1px solid transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .nav-link:hover::before {
          left: 100%;
        }

        .nav-link:hover {
          color: white !important;
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .nav-link.active {
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.2), rgba(217, 119, 6, 0.1));
          border-color: rgba(217, 119, 6, 0.4);
          color: #fbbf24 !important;
        }

        .user-welcome-nav {
          color: rgba(255, 255, 255, 0.8);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-right: 8px;
        }

        .cart-nav-button {
          position: relative;
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.2), rgba(217, 119, 6, 0.1));
          border: 1px solid rgba(217, 119, 6, 0.3);
          border-radius: 50px;
          padding: 10px 14px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 500;
          font-size: 14px;
        }

        .cart-nav-button:hover {
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.3), rgba(217, 119, 6, 0.2));
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(217, 119, 6, 0.3);
        }

        .cart-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
        }

        .auth-nav-btn {
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.8), rgba(180, 83, 9, 0.9)) !important;
          border: 1px solid rgba(217, 119, 6, 0.6) !important;
          color: white !important;
          font-weight: 600 !important;
          box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);
        }

        .auth-nav-btn:hover {
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.9), rgba(180, 83, 9, 1)) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 25px rgba(217, 119, 6, 0.4) !important;
        }

        .logout-btn {
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(185, 28, 28, 0.1)) !important;
          border: 1px solid rgba(220, 38, 38, 0.4) !important;
          color: #fca5a5 !important;
        }

        .logout-btn:hover {
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.3), rgba(185, 28, 28, 0.2)) !important;
          color: #fecaca !important;
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3) !important;
        }

        .menu-icon {
          width: 22px !important;
          height: 22px !important;
          cursor: pointer;
          filter: brightness(0) invert(1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.9;
          margin-right: 12px;
          padding: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .menu-icon:hover {
          opacity: 1;
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.15);
        }

        .nav-link {
          color: white !important;
          text-decoration: none;
          font-family: cursive;
          font-size: 16px;
          padding: 8px 14px !important;
          border-radius: 18px;
          transition: all 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .nav-link:hover {
          color: #fbbf24 !important;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }

        .user-welcome-nav {
          color: white;
          font-family: cursive;
          font-size: 14px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
          padding: 8px 14px;
        }

        .cart-nav-button {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 18px;
          padding: 8px 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
          display: flex;
          align-items: center;
        }

        .cart-nav-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .cart-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #dc2626;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          border: 2px solid white;
        }

        .auth-nav-btn {
          background: rgba(217, 119, 6, 0.2) !important;
          border: 1px solid rgba(217, 119, 6, 0.4) !important;
        }

        .auth-nav-btn:hover {
          background: rgba(217, 119, 6, 0.3) !important;
          color: #fbbf24 !important;
        }

        .logout-btn {
          background: rgba(220, 38, 38, 0.2) !important;
          border: 1px solid rgba(220, 38, 38, 0.4) !important;
        }

        .logout-btn:hover {
          background: rgba(220, 38, 38, 0.3) !important;
          color: #fca5a5 !important;
        }

        /* Responsive behavior */
        @media (max-width: 768px) {
          .desktop-nav .nav-left .nav-list li:not(:first-child),
          .desktop-nav .nav-right {
            display: none;
          }
          
          .menu-icon {
            display: block !important;
          }

          .auth-controls {
            top: 15px;
            right: 15px;
          }

          .user-welcome {
            font-size: 14px;
          }

          .auth-button {
            padding: 8px 12px;
            font-size: 13px;
          }

          .nav-left {
            left: 20px;
            transform: none;
          }

          .nav-list {
            padding: 6px 10px;
          }

          /* Mobile specific styling for menu and cup icons */
          .menu-icon {
            width: 18px !important;
            height: 18px !important;
            margin-right: 8px;
          }

          .nav-cup-icon {
            width: 20px !important;
            height: 20px !important;
          }
        }

        @media (min-width: 769px) {
          .desktop-nav .nav-left .nav-list li:not(:first-child),
          .desktop-nav .nav-right {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;