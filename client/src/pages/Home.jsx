import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import LoadingScreen from "../components/LoadingScreen";
import "../Home.css";
import { MdOutlineArrowOutward, MdSearchOff } from "react-icons/md";
import { setApiKey, getNews } from "../services/Endpoint";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [userPreference, setUserPreference] = useState({
    location: "",
    category: "",
  });
  const [API_KEY, SET_API_KEY] = useState("");
  const [articles, setArticles] = useState(() => {
    const saved = localStorage.getItem("newsArticles");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("newsArticles", JSON.stringify(articles));
  }, [articles]);

  async function onSaveApiKey() {
    if (API_KEY.length == 1) {
      throw new Error("Empty API key");
    }
    console.log("here");
    await setApiKey(API_KEY);
  }

  function onChangeUserPrefernce(type, e) {
    let val = e.target.value;
    setUserPreference((prev) => {
      return { ...prev, [type]: val };
    });
  }

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const data = await getNews(userPreference.location, userPreference.category);
      if (data) {
        setArticles(data);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
        setIsLoading(false);
    }
  };

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
          API_KEY={API_KEY}
          setApiKey={SET_API_KEY}
          onSaveApiKey={onSaveApiKey}
        />
        {isLoading && <LoadingScreen />}

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
                        <span className="category-tag">{item.category}</span>
                        <span className="separator"></span>
                        <span className="date">{item.date}</span>
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-summary">{item.summary}</p>
                    </div>
                    <div className="card-footer">
                      <div className="source">Source: {item.source_name || item.source}</div>
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
