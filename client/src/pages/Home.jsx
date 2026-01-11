import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import LoadingScreen from "../components/LoadingScreen";
import "../Home.css";
import { MdOutlineArrowOutward, MdSearchOff } from "react-icons/md";
import { setApiKey, getNews } from "../services/Endpoint";
import { useError } from "../context/error/useError";
import { useApp } from "../context/app/useApp";
import {
  // getUserIdFromLocalStorage,
  setUserIdInLocalStorage,
} from "../utils/storage";

export default function Home() {
  const [userPreference, setUserPreference] = useState({
    location: "",
    category: "",
  });
  const [GEMINI_API_KEY, SET_GEMINI_API_KEY] = useState("");
  const [articles, setArticles] = useState([]);

  const { handleError, handleSuccess } = useError();
  const { setUserId, userId } = useApp();

  // useEffect(() => {
  //   localStorage.setItem("newsArticles", JSON.stringify(articles));
  // }, [articles]);

  // Runs when the app loads and brings the news
  async function getInitalNews() {
    console.log("on load of page");
    if (userId) {
      const data = await getNews("World news", "All Headlines");
      setArticles(data);
    }
  }

  // User adds a new API key
  async function onSaveApiKey() {
    console.log("userId", userId);
    try {
      if (!userId) {
        let response = await setApiKey(GEMINI_API_KEY);
        setUserId(response.userId);
        setUserIdInLocalStorage(response.userId);
        handleSuccess(response.message);
        console.log(response);
      } else {
        throw new Error("Key already exists");
      }
    } catch (error) {
      handleError(error);
    }
  }

  // User adds location and category
  function onChangeUserPrefernce(type, e) {
    let val = e.target.value;
    setUserPreference((prev) => {
      return { ...prev, [type]: val };
    });
  }

  // when search button is pressed
  const handleSearch = async () => {
    try {
      const data = await getNews(
        userPreference.location,
        userPreference.category
      );
      if (data) {
        setArticles(data);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };

  useEffect(() => {
    getInitalNews();
  }, []);

  return (
    <>
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>

      <div className="app-container">
        <Sidebar
          onSearch={handleSearch}
          input={userPreference}
          onChange={onChangeUserPrefernce}
          API_KEY={GEMINI_API_KEY}
          setApiKey={SET_GEMINI_API_KEY}
          onSaveApiKey={onSaveApiKey}
        />

        {/* Main Content */}
        <section className="main-content">
          <div className="news-scroll">
            {articles && articles.length > 0 ? (
              articles.map((item) => (
                <Link to="/summary" key={item.id} className="news-card">
                  {/* <div className="card-image-container">
                    <img
                      alt={item.category}
                      className="card-image"
                      src={item.image}
                    />
                  </div> */}
                  <div className="card-content">
                    <div>
                      <div className="card-meta">
                        {/* <span className="category-tag">{item.category}</span>
                        <span className="separator"></span>
                        <span className="date">{item.date}</span> */}
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-summary">{item.summary}</p>
                    </div>
                    <div className="card-footer">
                      <div className="source">
                        Source: {item.source_name || item.source}
                      </div>
                      <MdOutlineArrowOutward className="arrow-icon" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-state-glow"></div>
                <MdSearchOff className="empty-state-icon" />
                <p className="empty-state-text">
                  No news found. Please enter your Gemini API key and try
                  searching again.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
