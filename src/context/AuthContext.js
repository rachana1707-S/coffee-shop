import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { showToast } from '../utils/helpers';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        isAuthenticated: true, 
        user: action.payload,
        error: null 
      };
    case 'LOGIN_FAILURE':
      return { 
        ...state, 
        loading: false, 
        error: action.payload 
      };
    case 'LOGOUT':
      return { 
        ...state, 
        isAuthenticated: false, 
        user: null,
        loading: false,
        error: null 
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } catch (error) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }
    }
  }, []);

  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      // Mock user data - replace with actual API response
      const mockUser = {
        id: '1',
        name: 'Test User',
        email: email,
        role: 'customer'
      };
      
      // Mock token - replace with actual token from API
      const mockToken = 'mock-jwt-token-' + Date.now();
      
      // Store in localStorage
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('userData', JSON.stringify(mockUser));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser });
      showToast('Successfully logged in!', 'success');
      
      return { success: true, user: mockUser };
    } catch (error) {
      const errorMessage = error.message || 'Login failed';
      dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });
      showToast(errorMessage, 'error');
      return { success: false, error: errorMessage };
    }
  };

  const register = async (name, email, password) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        id: Date.now().toString(),
        name: name,
        email: email,
        role: 'customer'
      };
      
      const mockToken = 'mock-jwt-token-' + Date.now();
      
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('userData', JSON.stringify(mockUser));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser });
      showToast('Account created successfully!', 'success');
      
      return { success: true, user: mockUser };
    } catch (error) {
      const errorMessage = error.message || 'Registration failed';
      dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });
      showToast(errorMessage, 'error');
      return { success: false, error: errorMessage };
    }
  };

  const googleLogin = async () => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Mock Google login - replace with actual Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        id: 'google-' + Date.now(),
        name: 'Google User',
        email: 'google@example.com',
        role: 'customer',
        avatar: 'https://via.placeholder.com/40'
      };
      
      const mockToken = 'mock-google-token-' + Date.now();
      
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('userData', JSON.stringify(mockUser));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser });
      showToast('Successfully logged in with Google!', 'success');
      
      return { success: true, user: mockUser };
    } catch (error) {
      const errorMessage = error.message || 'Google login failed';
      dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });
      showToast(errorMessage, 'error');
      return { success: false, error: errorMessage };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    dispatch({ type: 'LOGOUT' });
    showToast('Successfully logged out!', 'info');
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value = {
    ...state,
    login,
    register,
    googleLogin,
    logout,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 
