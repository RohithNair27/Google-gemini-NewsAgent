import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaLocationDot, FaGoogle } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { useError } from "../context/error/useError";
import { useApp } from "../context/app/useApp";
import { getGoogleAuthUrl } from "../services/Endpoint";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { exchangeCodeForToken } from "../services/Endpoint";
export default function Sidebar({ onSearch, input, onChange }) {
  const [searchParams] = useSearchParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasLocationError, setHasLocationError] = useState(false);
  const { handleError } = useError();
  const { userId } = useApp();

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const handleGoogleLogin = async () => {
    let response = await getGoogleAuthUrl();
    console.log("Google login clicked");
    console.log(response);
    window.location.assign(response.url);
  };

  const handleSearchClick = () => {
    if (!userId) {
      handleError(
        new Error("API Key is required"),
        "API Key is required. Please enter your API key.",
      );
      return;
    }

    if (!input.location || input.location.trim().length === 0) {
      setHasLocationError(true);
      return;
    }

    // setHasError(false);
    setHasLocationError(false);
    onSearch();
  };

  useEffect(() => {
    const code = searchParams.get("code");
    console.log(code, "code");
    if (code) {
      console.log("auth/google/token called");
      const sendCode = async () => {
        let res = await exchangeCodeForToken(code);
        console.log(res);
      };
      sendCode();
    }
  }, []);

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
              {userId ? "Logged In" : "Login with Google"}
            </span>
            <FaGoogle style={{ fontSize: "14px" }} />
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
                <FaGoogle />
              </div>
              <h3 className="modal-title">Login to Continue</h3>
              <p className="modal-desc">
                Sign in with your Google account to access personalized news and
                AI insights.
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <button
                className="btn btn-primary"
                onClick={handleGoogleLogin}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <FaGoogle />
                Login with Google
              </button>
              <button className="btn btn-secondary" onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
