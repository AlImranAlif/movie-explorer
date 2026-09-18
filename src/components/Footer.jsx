function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3>🎬 MovieExplorer</h3>
          <p>Discover shows and explore your next favorite story.</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} MovieExplorer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;