import { FaSpinner } from 'react-icons/fa';

export default function LoadingScreen() {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <FaSpinner className="loading-spinner" />
        <span className="loading-text">Loading...</span>
      </div>
    </div>
  );
}
