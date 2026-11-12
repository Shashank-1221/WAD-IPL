import { useState } from 'react';

function Booking({ onBookingSubmit }) {
  const [name, setName] = useState('');
  const [tickets, setTickets] = useState('');
  const [stand, setStand] = useState('');
  const [venue, setVenue] = useState('');

  function handleBooking() {
    if (!name || !tickets || !stand || !venue) {
      alert('Please fill all the details');
      return;
    }

    if (typeof onBookingSubmit === 'function') {
      onBookingSubmit({
        name,
        tickets: Number(tickets),
        stand,
        venue,
      });
    }

    alert('Ticket booked successfully!');
    setName('');
    setTickets('');
    setStand('');
    setVenue('');
  }

  return (
    <main className="page booking-page">
      <h1>Book Your Ticket</h1>

      <div className="booking-form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <label htmlFor="tickets">Number of Tickets</label>
        <input
          id="tickets"
          type="number"
          min="1"
          value={tickets}
          onChange={(event) => setTickets(event.target.value)}
          placeholder="Enter number of tickets"
        />

        <label htmlFor="stand">Select Stand</label>
        <select id="stand" value={stand} onChange={(event) => setStand(event.target.value)}>
          <option value="">-- Select Stand --</option>
          <option value="General Stand">General Stand</option>
          <option value="VIP Stand">VIP Stand</option>
        </select>

        <label htmlFor="venue">Select Venue</label>
        <select id="venue" value={venue} onChange={(event) => setVenue(event.target.value)}>
          <option value="">-- Select Venue --</option>
          <option value="Wankhede Stadium">Wankhede Stadium</option>
          <option value="M. Chinnaswamy Stadium">M. Chinnaswamy Stadium</option>
          <option value="Eden Gardens">Eden Gardens</option>
        </select>

        <button type="button" onClick={handleBooking}>
          Book Ticket
        </button>
      </div>

      <section className="booking-details">
        <h3>Booking Details</h3>
        <p>
          Name: <strong>{name || '-'}</strong>
        </p>
        <p>
          Tickets: <strong>{tickets || '-'}</strong>
        </p>
        <p>
          Stand: <strong>{stand || '-'}</strong>
        </p>
        <p>
          Venue: <strong>{venue || '-'}</strong>
        </p>
      </section>
    </main>
  );
}

export default Booking;
