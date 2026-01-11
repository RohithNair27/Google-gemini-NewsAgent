import { useState } from "react";
import { MdVpnKey, MdClose } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { useError } from "../context/error/useError";
import { useApp } from "../context/app/useApp";
export default function Sidebar({
  onSearch,
  input,
  onChange,
  API_KEY,
  setApiKey,
  onSaveApiKey,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasLocationError, setHasLocationError] = useState(false);
  const { handleError } = useError();
  const { userId } = useApp();

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
    setHasError(false);
  }

  const saveKey = () => {
    if (!API_KEY || API_KEY.trim().length === 0) {
      setHasError(true);
      return;
    }
    setHasError(false);
    setIsModalOpen(!isModalOpen);
    onSaveApiKey();
  };

  const handleSearchClick = () => {
    if (!userId) {
      handleError(
        new Error("API Key is required"),
        "API Key is required. Please enter your API key."
      );
      return;
    }

    if (!input.location || input.location.trim().length === 0) {
      setHasLocationError(true);
      return;
    }

    setHasError(false);
    setHasLocationError(false);
    onSearch();
  };

  return (
    <>
      <aside className="sidebar">
        <div className="title-section">
          <h1>
            Agent
            <br />
            News
          </h1>
          <p>
            Stay updated with the breaking stories, in-depth analysis, and
            exclusive interviews from around the globe. Your daily dose of
            clarity in a complex world.
          </p>
        </div>

        <div className="filters">
          <div className="filter-group">
            <label>Location</label>
            <div className="input-wrapper">
              <FaLocationDot className="material-icons input-icon" />
              <input
                className={`filter-input ${hasLocationError ? "error" : ""}`}
                style={{
                  border: hasLocationError ? "2px solid #ef4444" : "",
                  outline: hasLocationError ? "none" : undefined,
                }}
                placeholder="e.g. New York, USA"
                value={input.location}
                type="text"
                defaultValue="San Francisco, USA"
                onChange={(e) => {
                  onChange("location", e);
                  if (hasLocationError && e.target.value.trim().length > 0) {
                    setHasLocationError(false);
                  }
                }}
              />
            </div>
            {hasLocationError && (
              <p
                style={{
                  color: "#ef4444",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem",
                  marginBottom: "0",
                }}
              >
                Location is required. Please enter a location.
              </p>
            )}
          </div>

          <div className="filter-group">
            <label>News Category</label>
            <div className="input-wrapper">
              <FaBoxes className=" input-icon" />

              <select
                className="filter-select"
                onChange={(e) => onChange("category", e)}
              >
                <option>All Headlines</option>
                <option>Technology</option>
                <option>Environment</option>
                <option>Finance</option>
                <option>Culture</option>
                <option>Politics</option>
              </select>
              <span
                className="material-icons input-icon"
                style={{ left: "auto", right: "0.75rem" }}
              ></span>
            </div>
          </div>

          <button className="search-btn" onClick={handleSearchClick}>
            Search
          </button>
        </div>

        <div className="api-key-trigger" onClick={toggleModal}>
          <div className="glow-effect"></div>
          <div className="trigger-content">
            <span className="trigger-text">
              {userId ? "API Key Added" : "Add API Key"}
            </span>
            <MdVpnKey style={{ fontSize: "14px" }} />
          </div>
        </div>
      </aside>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={toggleModal}>
              <MdClose />
            </button>
            <div className="mb-6">
              <div className="key-icon-wrapper">
                <MdVpnKey />
              </div>
              <h3 className="modal-title">Connect API</h3>
              <p className="modal-desc">
                Enter your API key to unlock news summarization and personalized
                AI insights. Your key is stored locally.
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#374151",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  API Key
                </label>
                <input
                  className={`filter-input ${hasError ? "error" : ""}`}
                  style={{
                    border: hasError
                      ? "2px solid #ef4444"
                      : "1px solid #e5e7eb",
                    outline: hasError ? "none" : undefined,
                  }}
                  placeholder="sk-..."
                  type="password"
                  value={API_KEY}
                  onChange={(e) => {
                    setApiKey(e.target.value);
                    if (hasError && e.target.value.trim().length > 0) {
                      setHasError(false); // Clear error when user starts typing
                    }
                  }}
                />
                {hasError && (
                  <p
                    style={{
                      color: "#ef4444",
                      fontSize: "0.75rem",
                      marginTop: "0.25rem",
                      marginBottom: "0",
                    }}
                  >
                    API Key is required. Please enter your API key.
                  </p>
                )}
              </div>
              <div className="modal-actions">
                <button className="btn btn-secondary" onClick={toggleModal}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={saveKey}>
                  Save Key
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
