 
import React from 'react';
import { X } from 'lucide-react';

const CheckoutModal = ({ cart, onClose, onPaymentSuccess }) => {
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2>Checkout</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X />
          </button>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3>Total: ${getTotal()}</h3>
        </div>
        
        <button onClick={onPaymentSuccess} className="btn btn-primary" style={{ width: '100%' }}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;