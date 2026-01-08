import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../Summary.css";
import { MdArrowBack, MdOpenInNew } from "react-icons/md";

export default function Summary() {
  return (
    <>
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>

      <div className="app-container">
        {/* <Sidebar /> */}
        <main className="main-content">
          <div className="summary-content-wrapper">
            <div className="top-nav">
              <Link to="/" className="back-btn">
                <MdArrowBack />
                Back to News
              </Link>
            </div>

            <div className="news-scroll" style={{ paddingTop: 0 }}>
              <div className="article-container">
                <div className="article-meta">
                  <span className="tag-tech">Technology</span>
                  <div className="meta-item">
                    <span className="meta-dot"></span>
                    June 12, 2023
                  </div>
                  <div className="meta-item">
                    <span className="meta-dot"></span>
                    <span className="source-flex">
                      <span
                        className="material-icons"
                        style={{ fontSize: "12px" }}
                      >
                        source
                      </span>
                      TechCrunch
                    </span>
                  </div>
                </div>

                <h1 className="article-title">
                  AI Revolution: How Generative Models are Reshaping Creative
                  Industries
                </h1>

                <div className="hero-image-wrapper">
                  <img
                    alt="AI Technology"
                    className="hero-image"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKjS1g6D44pF6PkEj3BqFhg3Qxr39OtwG0FGwdsmFkg5nVakPZOm-t8Sx2Qax3TACgIgvhoMuydOEtsm6fbfTQszg8nkogmnwI0EdEut1KRkm4Q0DaedUxRQKGcjjRbYH9CuJZ8QVfrtrPVaOPka0UfM82aCANwepI4DiCxjQ1jV0hVsS97B9mKufwRdADUkjmwgRObYj3QTSWS84gIs33m868FiPZ_VMaXhQA93u5Dc3i8TbUvX39SgzgI6Sxb67nNxX_W2KJos8"
                  />
                  <div className="hero-gradient"></div>
                </div>

                <div className="article-body">
                  <p className="article-intro">
                    "Artificial intelligence is no longer just a futuristic
                    concept but a daily tool for millions. This summary explores
                    the ethical implications and the boundless possibilities
                    reshaping our world."
                  </p>

                  <div className="article-text">
                    <p>
                      The landscape of creative industries is undergoing a
                      seismic shift as generative AI models move from
                      experimental labs to mainstream workflows. Tools like
                      Midjourney, DALL-E, and ChatGPT are not merely novelties;
                      they are becoming integral collaborators in the creative
                      process, fundamentally altering how content is conceived
                      and produced.
                    </p>
                    <p>
                      For graphic designers, these models offer a way to rapidly
                      prototype concepts, exploring dozens of variations in the
                      time it once took to sketch one. Illustrators are finding
                      that AI can handle background textures and lighting
                      references, freeing them to focus on character expression
                      and composition. However, this efficiency comes with
                      anxiety. The question of copyright ownership remains a
                      legal grey area, with artists rightfully concerned about
                      their styles being mimicked without consent or
                      compensation.
                    </p>
                    <p>
                      In the realm of writing, copywriters are using Large
                      Language Models (LLMs) to overcome writer's block,
                      generate headlines, and draft social media posts. The role
                      is shifting from 'writer' to 'editor', curating and
                      refining the machine's output. Journalism, too, is
                      experimenting with automated reporting for financial
                      earnings and sports scores, though the hallucinations
                      inherent in current AI models necessitate rigorous human
                      fact-checking to maintain credibility.
                    </p>
                    <p>
                      The ethical dimensions are vast. As these models are
                      trained on billions of images and texts scraped from the
                      internet, the debate over data usage rights intensifies.
                      Unions in film and television are already drawing battle
                      lines, demanding protections against AI replicating
                      actors' likenesses or replacing scriptwriters entirely.
                    </p>
                    <p>
                      Despite the controversy, the democratization of creativity
                      is undeniable. Small businesses with limited budgets can
                      now generate professional-grade assets. Indie game
                      developers can create vast, procedurally generated worlds.
                      The future isn't about AI replacing humans, but about
                      humans leveraging AI to push the boundaries of what is
                      possible. We are witnessing the dawn of a hybrid creative
                      era, where the synergy between human intuition and machine
                      speed will define the next generation of art and media.
                    </p>
                  </div>
                </div>

                <div className="article-actions">
                  <button className="read-btn">
                    Read Original Article
                    <MdOpenInNew style={{ fontSize: "14px" }} />
                  </button>

                  <div className="share-actions">
                    <span className="share-label">Share this summary:</span>
                    <button className="icon-btn">
                      <span
                        className="material-icons"
                        style={{ fontSize: "14px" }}
                      >
                        link
                      </span>
                    </button>
                    <button className="icon-btn">
                      <span
                        className="material-icons"
                        style={{ fontSize: "14px" }}
                      >
                        mail
                      </span>
                    </button>
                    <button className="icon-btn">
                      <span
                        className="material-icons"
                        style={{ fontSize: "14px" }}
                      >
                        bookmark_border
                      </span>
                    </button>
                  </div>
                </div>

                <div style={{ height: "3rem" }}></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
