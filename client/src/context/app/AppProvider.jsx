import { useState } from "react";
import { AppContext } from "./AppContext";
import { getUserIdFromLocalStorage } from "../../utils/storage";

export const AppProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    return getUserIdFromLocalStorage() || null;
  });

  const loadUserId = () => {
    const id = getUserIdFromLocalStorage();
    setUserId(id);
    return id;
  };

  const value = {
    userId,
    setUserId,
    loadUserId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
