function MovieModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  const image =
    show.image?.original ||
    show.image?.medium ||
    "https://via.placeholder.com/900x500?text=No+Image";

  const rating = show.rating?.average ?? "N/A";

  const releaseDate = show.premiered
    ? new Date(show.premiered).toLocaleDateString()
    : "N/A";

  const summary = show.summary
    ? show.summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="movie-modal" role="dialog" aria-modal="true">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-image-container">
          <img
            src={image}
            alt={show.name}
            className="modal-image"
          />
        </div>

        <div className="modal-content">
          <h2>{show.name}</h2>

          <div className="modal-meta">
            <span>⭐ Rating: {rating}</span>
            <span>📅 Release: {releaseDate}</span>
          </div>

          {show.genres?.length > 0 && (
            <div className="modal-genres">
              {show.genres.map((genre) => (
                <span key={genre} className="genre">
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="modal-section">
            <h3>Overview</h3>
            <p>{summary}</p>
          </div>

          {show.status && (
            <div className="modal-info">
              <strong>Status:</strong> {show.status}
            </div>
          )}

          {show.network?.name && (
            <div className="modal-info">
              <strong>Network:</strong> {show.network.name}
            </div>
          )}

          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;