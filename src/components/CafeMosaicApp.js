import React, { useState } from 'react';
import Header from './Header';
import MenuSection from './MenuSection';
import AuthModal from './AuthModal';
import CartModal from './CartModal';
import CheckoutModal from './CheckoutModal';

const CafeMosaicApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [authMode, setAuthMode] = useState('login');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = (email, password) => {
    const mockUser = { name: 'Test User', email };
    setUser(mockUser);
    setIsLoggedIn(true);
    setShowAuthModal(false);
    alert('Successfully logged in!');
  };

  const handleRegister = (name, email, password) => {
    const mockUser = { name, email };
    setUser(mockUser);
    setIsLoggedIn(true);
    setShowAuthModal(false);
    alert('Successfully registered!');
  };

  const handleGoogleLogin = () => {
    const mockUser = { name: 'Google User', email: 'google@example.com' };
    setUser(mockUser);
    setIsLoggedIn(true);
    setShowAuthModal(false);
    alert('Successfully logged in with Google!');
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCart([]);
    alert('Successfully logged out!');
  };

  const addToCart = (item, customizations = {}) => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }
    
    const cartItem = {
      ...item,
      cartId: Date.now() + Math.random(),
      quantity: 1,
      customizations
    };
    
    setCart([...cart, cartItem]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="cafe-mosaic-app">
      <Header 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isLoggedIn={isLoggedIn}
        user={user}
        cart={cart}
        onShowAuth={() => setShowAuthModal(true)}
        onShowCart={() => setShowCartModal(true)}
        onLogout={handleLogout}
      />
      
      <MenuSection 
        scrollToSection={scrollToSection}
        addToCart={addToCart}
        isLoggedIn={isLoggedIn}
      />

      {/* Footer */}
      <footer style={{
        backgroundColor: '#50322c',
        color: 'white',
        padding: '40px 0',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '24px', fontFamily: 'cursive' }}>Cafe Mosaic</h3>
          <p style={{ margin: '10px 0', fontFamily: 'cursive' }}>Brewing the best coffee in town since 2024.</p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px',
            marginBottom: '20px'
          }}>
            <li>
              <a href="https://www.facebook.com/p/Caf%C3%A9-Mosaic-100075842809375/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/assets/images/icons/facebook.png"
                  alt="Facebook"
                  style={{ height: '30px', width: '30px' }}
                />
              </a>
            </li>
            <li>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fthecafemosaic" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/assets/images/icons/twitter.png"
                  alt="Twitter"
                  style={{ height: '30px', width: '30px' }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cafemosaics/?hl=en" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/assets/images/icons/instagram.png"
                  alt="Instagram"
                  style={{ height: '30px', width: '30px' }}
                />
              </a>
            </li>
          </ul>
          <p style={{ margin: '20px 0', fontFamily: 'cursive', fontSize: '14px' }}>
            &copy; 2024 Your Cafe Mosaic. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Modals */}
      {showAuthModal && (
        <AuthModal
          authMode={authMode}
          setAuthMode={setAuthMode}
          onLogin={handleLogin}
          onRegister={handleRegister}
          onGoogleLogin={handleGoogleLogin}
          onClose={() => setShowAuthModal(false)}
        />
      )}

      {showCartModal && (
        <CartModal
          cart={cart}
          setCart={setCart}
          onClose={() => setShowCartModal(false)}
          onCheckout={() => {
            setShowCartModal(false);
            setShowCheckoutModal(true);
          }}
        />
      )}

      {showCheckoutModal && (
        <CheckoutModal
          cart={cart}
          onClose={() => setShowCheckoutModal(false)}
          onPaymentSuccess={() => {
            setCart([]);
            setShowCheckoutModal(false);
            alert('Payment successful! Order placed.');
          }}
        />
      )}
    </div>
  );
};

export default CafeMosaicApp;
