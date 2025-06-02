export const formatPrice = (price) => {
  return `$${parseFloat(price).toFixed(2)}`;
};

export const calculateItemTotal = (item) => {
  const basePrice = item.price;
  const extrasPrice = item.customizations?.extras?.reduce((sum, extra) => sum + (extra.price || 0), 0) || 0;
  const sizePrice = item.customizations?.size?.price || 0;
  return (basePrice + extrasPrice + sizePrice) * (item.quantity || 1);
};

export const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
};

export const calculateDeliveryFee = (cartTotal, deliveryOption) => {
  if (deliveryOption === 'pickup') return 0;
  if (cartTotal >= MIN_ORDER_FOR_FREE_DELIVERY) return 0;
  return DELIVERY_FEE;
};

export const calculateFinalTotal = (cartItems, deliveryOption) => {
  const cartTotal = calculateCartTotal(cartItems);
  const deliveryFee = calculateDeliveryFee(cartTotal, deliveryOption);
  return cartTotal + deliveryFee;
};

export const generateOrderId = () => {
  return 'ORDER-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const showToast = (message, type = 'info') => {
  // Simple toast implementation
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  const container = document.querySelector('.toast-container') || document.body;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
};
