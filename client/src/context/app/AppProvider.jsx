import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { getUserIdFromLocalStorage } from "../../utils/storage";

export const AppProvider = ({ children }) => {
  const [isKeyConfigured, setIsKeyConfigured] = useState(false);
  const [userId, setUserId] = useState(null);
  

  // Check if API key exists on app initialization
  useEffect(() => {
    checkKeyStatus();
    loadUserId();
  }, []);

  const checkKeyStatus = () => {
    try {
      const keyExists = sessionStorage.getItem('apiKeyConfigured');
      const hasKey = keyExists === 'true';
      setIsKeyConfigured(hasKey);
      return hasKey;
    } catch (error) {
      console.error('Error checking API key status:', error);
      setIsKeyConfigured(false);
      return false;
    } finally {
    }
  };

  const loadUserId = () => {
    const userIdFromStorage = getUserIdFromLocalStorage();
    setUserId(userIdFromStorage);
    return userIdFromStorage;
  };

  const setKeyConfigured = (configured) => {
    setIsKeyConfigured(configured);
    sessionStorage.setItem('apiKeyConfigured', configured.toString());
  };

  const updateAppSettings = (newSettings) => {
    setAppSettings(prev => ({ ...prev, ...newSettings }));
  };

  const value = {
    isKeyConfigured,
    userId,
    setKeyConfigured,
    setUserId,
    updateAppSettings,
    checkKeyStatus,
    loadUserId
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};