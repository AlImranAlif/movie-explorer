function MovieCard({ show, onDetails }) {
  const image = show.image?.medium || "https://via.placeholder.com/300x450?text=No+Image";

  const year = show.premiered
    ? new Date(show.premiered).getFullYear()
    : "N/A";

  const rating = show.rating?.average ?? "N/A";

  return (
    <article className="movie-card">
      <div className="movie-image-wrapper">
        <img
          src={image}
          alt={show.name}
          className="movie-image"
          loading="lazy"
        />

        {show.rating?.average && (
          <span className="rating-badge">
            ⭐ {show.rating.average}
          </span>
        )}
      </div>

      <div className="movie-card-content">
        <h2 title={show.name}>{show.name}</h2>

        <div className="movie-meta">
          <span>⭐ {rating}</span>
          <span>•</span>
          <span>📅 {year}</span>
        </div>

        {show.genres?.length > 0 && (
          <div className="genres">
            {show.genres.slice(0, 2).map((genre) => (
              <span key={genre} className="genre">
                {genre}
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          className="details-button"
          onClick={() => onDetails(show)}
        >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;