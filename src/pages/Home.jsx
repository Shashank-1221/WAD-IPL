import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="page home-page">
      <h1>Welcome to IPL Ticket Booking</h1>
      <p className="page-intro">
        Secure your favorite stadium seats for the biggest IPL clashes and keep a record
        of every booking in one place.
      </p>

      <div className="hero-actions">
        <Link to="/matches" className="primary-button">
          View Matches
        </Link>
        <Link to="/booking" className="secondary-button">
          Book a Ticket
        </Link>
      </div>
    </main>
  );
}

export default Home;
