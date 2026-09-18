import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-content">
          <span className="hero-badge">🎬 MOVIE EXPLORER</span>

          <h1>Discover Your Next Favorite Show</h1>

          <p>
            Explore thousands of shows, discover new stories, and find
            something amazing to watch.
          </p>

          <Link to="/movies" className="hero-button">
            Explore Now →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;