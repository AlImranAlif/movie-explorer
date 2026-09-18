import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          🎬 MovieExplorer
        </Link>

        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
        </div>

        <Link to="/movies" className="nav-button">
          Explore Movies
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;