export const getUserIdFromLocalStorage = () => {
  try {
    const userId = localStorage.getItem("userId");
    return userId || null;
  } catch (error) {
    console.error("Error getting userId from localStorage:", error);
    return null;
  }
};

export const setUserIdInLocalStorage = (userId) => {
  try {
    localStorage.setItem("userId", userId);
    return true;
  } catch (error) {
    console.error("Error setting userId in localStorage:", error);
    return false;
  }
};
