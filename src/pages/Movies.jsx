import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const API_URL = "https://api.tvmaze.com";

function Movies() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/shows`);

      if (!response.ok) {
        throw new Error("Failed to fetch shows.");
      }

      const data = await response.json();

      setShows(data);
    } catch (err) {
      setError("Unable to load shows. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query) {
      fetchShows();
      return;
    }

    try {
      setSearching(true);
      setError("");

      const response = await fetch(
        `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error("Search request failed.");
      }

      const data = await response.json();

      const searchResults = data.map((item) => item.show);

      setShows(searchResults);
    } catch (err) {
      setError("Unable to search shows. Please try again.");
      console.error(err);
    } finally {
      setSearching(false);
    }
  };

  const handleDetails = (show) => {
    setSelectedShow(show);
  };

  const closeModal = () => {
    setSelectedShow(null);
  };

  return (
    <div className="app">
      <Navbar />

      <main className="movies-page">
        <section className="movies-header">
          <div className="container">
            <span className="section-label">MOVIE EXPLORER</span>

            <h1>Explore Shows</h1>

            <p>
              Search and discover shows from around the world.
            </p>

            <SearchBar
              onSearch={handleSearch}
              loading={searching}
            />
          </div>
        </section>

        <section className="movies-section">
          <div className="container">
            {loading && (
              <div className="loading">
                <div className="spinner"></div>
                <p>Loading shows...</p>
              </div>
            )}

            {!loading && error && (
              <div className="error-message">
                <p>{error}</p>

                <button
                  type="button"
                  onClick={fetchShows}
                  className="retry-button"
                >
                  Try Again
                </button>
              </div>
            )}

            {!loading && !error && shows.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">🎬</div>

                <h2>No shows found</h2>

                <p>
                  Try searching with a different movie or show title.
                </p>
              </div>
            )}

            {!loading && !error && shows.length > 0 && (
              <>
                <div className="results-header">
                  <h2>Discover Shows</h2>

                  <span>
                    {shows.length}{" "}
                    {shows.length === 1 ? "result" : "results"}
                  </span>
                </div>

                <div className="movie-grid">
                  {shows.map((show) => (
                    <MovieCard
                      key={show.id}
                      show={show}
                      onDetails={handleDetails}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <MovieModal
        show={selectedShow}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
}

export default Movies;