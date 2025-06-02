import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { calculateItemTotal, calculateCartTotal, calculateFinalTotal, showToast } from '../utils/helpers';
import { DELIVERY_OPTIONS } from '../utils/constants';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && 
        JSON.stringify(item.customizations) === JSON.stringify(action.payload.customizations)
      );
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity || 1;
        return { ...state, items: updatedItems };
      } else {
        return { 
          ...state, 
          items: [...state.items, { ...action.payload, cartId: Date.now() + Math.random() }]
        };
      }
      
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload)
      };
      
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0)
      };
      
    case 'SET_DELIVERY_OPTION':
      return { ...state, deliveryOption: action.payload };
      
    case 'CLEAR_CART':
      return { ...state, items: [] };
      
    case 'SET_CART':
      return { ...state, items: action.payload };
      
    default:
      return state;
  }
};

const initialState = {
  items: [],
  deliveryOption: DELIVERY_OPTIONS.PICKUP
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    const savedDeliveryOption = localStorage.getItem('deliveryOption');
    
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: 'SET_CART', payload: cartItems });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
    
    if (savedDeliveryOption) {
      dispatch({ type: 'SET_DELIVERY_OPTION', payload: savedDeliveryOption });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }, [state.items]);

  useEffect(() => {
    localStorage.setItem('deliveryOption', state.deliveryOption);
  }, [state.deliveryOption]);

  const addItem = (item, customizations = {}) => {
    const cartItem = {
      ...item,
      quantity: 1,
      customizations: {
        size: customizations.size || null,
        extras: customizations.extras || [],
        specialInstructions: customizations.specialInstructions || ''
      }
    };
    
    dispatch({ type: 'ADD_ITEM', payload: cartItem });
    showToast(`${item.name} added to cart!`, 'success');
  };

  const removeItem = (cartId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId });
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (cartId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
  };

  const setDeliveryOption = (option) => {
    dispatch({ type: 'SET_DELIVERY_OPTION', payload: option });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    showToast('Cart cleared', 'info');
  };

  const getCartTotal = () => {
    return calculateCartTotal(state.items);
  };

  const getFinalTotal = () => {
    return calculateFinalTotal(state.items, state.deliveryOption);
  };

  const getItemCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    items: state.items,
    deliveryOption: state.deliveryOption,
    addItem,
    removeItem,
    updateQuantity,
    setDeliveryOption,
    clearCart,
    getCartTotal,
    getFinalTotal,
    getItemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 
