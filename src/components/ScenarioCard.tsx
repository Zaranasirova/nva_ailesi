import comment from "../assets/image/comment.svg";
import stars from "../assets/image/Star 1.svg";
import image from "../assets/image/image.png";

interface scenarioCardProps {
    title:string;
}



const ScenarioCard:React.FC<scenarioCardProps> = ({title}) => {
  return (
    <section className="popular-scenarios">
    <div className="container popular-section-wrapper d-flex">
      <h2 className="head-title">{title}</h2>
      <div className="most-read-box">
      <div className="most-read">
            <div className="most-read-image">
              <img src={image} alt="most-read" />
            </div>
            <div className="post-info">
              <div className="movie-meta">
              <span className="read-year">2024</span>
              <div className="comment-and-stars-box">
              <span className="comment-and-stars comment">
                  <img
                    src={comment}
                    alt="comment-svg"
                    className="most-read-icon"
                  />
                  <span className="icon-number">0</span>
                </span>
                <span className="comment-and-stars stars">
                  <img src={stars} alt="stars-svg" className="most-read-icon" />
                  <span className="icon-number yellow">8.2</span>
                </span>
              </div>
              </div>
              <div className="movie-title">
                <h2 className="movie-head-name">Lorem Ipsum</h2>
              </div>
            </div>
          </div>
          <div className="most-read">
            <div className="most-read-image">
              <img src={image} alt="most-read" />
            </div>
            <div className="post-info">
              <div className="movie-meta">
              <span className="read-year">2024</span>
              <div className="comment-and-stars-box">
              <span className="comment-and-stars comment">
                  <img
                    src={comment}
                    alt="comment-svg"
                    className="most-read-icon"
                  />
                  <span className="icon-number">0</span>
                </span>
                <span className="comment-and-stars stars">
                  <img src={stars} alt="stars-svg" className="most-read-icon" />
                  <span className="icon-number yellow">8.2</span>
                </span>
              </div>
              </div>
              <div className="movie-title">
                <h2 className="movie-head-name">Lorem Ipsum</h2>
              </div>
            </div>
          </div>
          <div className="most-read">
            <div className="most-read-image">
              <img src={image} alt="most-read" />
            </div>
            <div className="post-info">
              <div className="movie-meta">
              <span className="read-year">2024</span>
              <div className="comment-and-stars-box">
              <span className="comment-and-stars comment">
                  <img
                    src={comment}
                    alt="comment-svg"
                    className="most-read-icon"
                  />
                  <span className="icon-number">0</span>
                </span>
                <span className="comment-and-stars stars">
                  <img src={stars} alt="stars-svg" className="most-read-icon" />
                  <span className="icon-number yellow">8.2</span>
                </span>
              </div>
              </div>
              <div className="movie-title">
                <h2 className="movie-head-name">Lorem Ipsum</h2>
              </div>
            </div>
          </div>
          <div className="most-read">
            <div className="most-read-image">
              <img src={image} alt="most-read" />
            </div>
            <div className="post-info">
              <div className="movie-meta">
              <span className="read-year">2024</span>
              <div className="comment-and-stars-box">
              <span className="comment-and-stars comment">
                  <img
                    src={comment}
                    alt="comment-svg"
                    className="most-read-icon"
                  />
                  <span className="icon-number">0</span>
                </span>
                <span className="comment-and-stars stars">
                  <img src={stars} alt="stars-svg" className="most-read-icon" />
                  <span className="icon-number yellow">8.2</span>
                </span>
              </div>
              </div>
              <div className="movie-title">
                <h2 className="movie-head-name">Lorem Ipsum</h2>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default ScenarioCard