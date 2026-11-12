import { Link } from 'react-router-dom';

const matches = [
  {
    team1: 'RCB',
    team2: 'CSK',
    venue: 'M. Chinnaswamy Stadium, Bengaluru',
    date: '25 March 2026',
  },
  {
    team1: 'MI',
    team2: 'KKR',
    venue: 'Wankhede Stadium, Mumbai',
    date: '28 March 2026',
  },
  {
    team1: 'RR',
    team2: 'SRH',
    venue: 'Eden Gardens, Kolkata',
    date: '2 April 2026',
  },
];

function MatchCard({ team1, team2, venue, date }) {
  return (
    <div className="match-card">
      <h2>
        {team1} vs {team2}
      </h2>

      <p>📍 {venue}</p>
      <p>📅 {date}</p>

      <Link to="/booking" className="primary-button small-button">
        Book Now
      </Link>
    </div>
  );
}

function Matches() {
  return (
    <main className="matches-page page">
      <h1>Upcoming IPL Matches</h1>

      <div className="matches-grid">
        {matches.map((match) => (
          <MatchCard
            key={`${match.team1}-${match.team2}-${match.date}`}
            team1={match.team1}
            team2={match.team2}
            venue={match.venue}
            date={match.date}
          />
        ))}
      </div>
    </main>
  );
}

export default Matches;
