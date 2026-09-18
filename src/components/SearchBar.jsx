import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    onSearch(trimmedQuery);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a movie or show..."
          className="search-input"
        />

        {query && (
          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      <button
        type="submit"
        className="search-button"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchBar;