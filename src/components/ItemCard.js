import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

const ItemCard = ({ item, addToCart, isLoggedIn }) => {
  const [showCustomization, setShowCustomization] = useState(false);
  const [customizations, setCustomizations] = useState({
    size: 'Medium',
    extras: [],
    specialInstructions: ''
  });

  const handleAddToCart = () => {
    addToCart(item, customizations);
    setShowCustomization(false);
    setCustomizations({
      size: 'Medium',
      extras: [],
      specialInstructions: ''
    });
  };

  const coffeeExtras = [
    { name: 'Extra Shot', price: 1.00 },
    { name: 'Oat Milk', price: 0.60 },
    { name: 'Soy Milk', price: 0.50 },
    { name: 'Vanilla Syrup', price: 0.50 },
    { name: 'Caramel Syrup', price: 0.50 }
  ];

  const toggleExtra = (extra) => {
    setCustomizations(prev => ({
      ...prev,
      extras: prev.extras.find(e => e.name === extra.name)
        ? prev.extras.filter(e => e.name !== extra.name)
        : [...prev.extras, extra]
    }));
  };

  return (
    <>
      <div className="menu-item">
        <img 
          src={item.image} 
          alt={item.name}
          className="menu-item-image"
        />
        
        <div className="menu-item-rating">
          <Star className="h-4 w-4 text-yellow-400" style={{ fill: 'currentColor' }} />
          <span style={{ fontSize: '14px', color: '#666', marginLeft: '4px' }}>
            {item.rating}
          </span>
        </div>

        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
        <p className="menu-item-price">${item.price}</p>

        <button 
          className="add-to-cart-btn"
          onClick={() => {
            if (!isLoggedIn) {
              alert('Please login to add items to cart');
              return;
            }
            if (item.category === 'coffee') {
              setShowCustomization(true);
            } else {
              addToCart(item);
            }
          }}
        >
          Add to Cart
        </button>
      </div>

      {/* Customization Modal */}
      {showCustomization && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: '500px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h3 style={{ 
                fontSize: '24px', 
                fontFamily: 'cursive',
                color: '#d97706',
                margin: 0
              }}>
                Customize {item.name}
              </h3>
              <button 
                onClick={() => setShowCustomization(false)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="form-group">
              <label className="form-label">Size</label>
              <select
                value={customizations.size}
                onChange={(e) => setCustomizations({...customizations, size: e.target.value})}
                className="form-input"
              >
                <option value="Small">Small (+$0)</option>
                <option value="Medium">Medium (+$0)</option>
                <option value="Large">Large (+$0.50)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Extras</label>
              <div style={{ display: 'grid', gap: '8px' }}>
                {coffeeExtras.map(extra => (
                  <label 
                    key={extra.name}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      cursor: 'pointer',
                      padding: '8px',
                      borderRadius: '4px',
                      backgroundColor: customizations.extras.find(e => e.name === extra.name) ? '#fef3c7' : 'transparent'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={customizations.extras.find(e => e.name === extra.name) || false}
                      onChange={() => toggleExtra(extra)}
                      style={{ cursor: 'pointer' }}
                    />
                    <span style={{ flex: 1 }}>{extra.name}</span>
                    <span style={{ color: '#d97706', fontWeight: 'bold' }}>
                      +${extra.price.toFixed(2)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Special Instructions</label>
              <textarea
                value={customizations.specialInstructions}
                onChange={(e) => setCustomizations({...customizations, specialInstructions: e.target.value})}
                placeholder="Any special requests or modifications..."
                className="form-input"
                style={{ height: '80px', resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button
                onClick={() => setShowCustomization(false)}
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                Cancel
              </button>
              <button
                onClick={handleAddToCart}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCard;
