import React from 'react';
import { X } from 'lucide-react';

const CartModal = ({ cart, setCart, onClose, onCheckout }) => {
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2>Your Cart</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X />
          </button>
        </div>
        
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.cartId} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', padding: '10px', border: '1px solid #eee' }}>
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '10px' }}>
              <strong>Total: ${getTotal()}</strong>
            </div>
            <button onClick={onCheckout} className="btn btn-primary" style={{ width: '100%', marginTop: '15px' }}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal; 
