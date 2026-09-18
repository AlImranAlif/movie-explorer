import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <section className="home-intro">
          <div className="container">
            <span className="section-label">EXPLORE • DISCOVER • WATCH</span>

            <h2>Find Something You'll Love</h2>

            <p>
              Search through a huge collection of shows and discover
              information about your favorite titles, genres, ratings,
              release dates, and more.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;