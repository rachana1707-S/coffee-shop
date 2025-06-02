export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const MENU_CATEGORIES = {
  COFFEE: 'coffee',
  SNACK: 'snack',
  BEVERAGE: 'beverage',
  DESSERT: 'dessert'
};

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  READY: 'ready',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

export const DELIVERY_OPTIONS = {
  PICKUP: 'pickup',
  DELIVERY: 'delivery'
};

export const PAYMENT_METHODS = {
  CARD: 'card',
  PAYPAL: 'paypal',
  APPLE_PAY: 'apple_pay',
  CASH: 'cash'
};

export const COFFEE_SIZES = [
  { name: 'Small', price: 0 },
  { name: 'Medium', price: 0 },
  { name: 'Large', price: 0.50 }
];

export const COFFEE_EXTRAS = [
  { name: 'Extra Shot', price: 1.00 },
  { name: 'Decaf', price: 0 },
  { name: 'Oat Milk', price: 0.60 },
  { name: 'Soy Milk', price: 0.50 },
  { name: 'Extra Hot', price: 0 },
  { name: 'Extra Foam', price: 0 },
  { name: 'Vanilla Syrup', price: 0.50 },
  { name: 'Caramel Syrup', price: 0.50 }
];

export const DELIVERY_FEE = 2.99;
export const MIN_ORDER_FOR_FREE_DELIVERY = 25.00;
