export const getUserIdFromLocalStorage = () => {
  try {
    const userId = localStorage.getItem('userId');
    return userId || null;
  } catch (error) {
    console.error('Error getting userId from localStorage:', error);
    return null;
  }
};