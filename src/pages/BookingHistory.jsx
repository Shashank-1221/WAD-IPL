import { useMemo, useState } from 'react';

function BookingHistory({ bookings = [] }) {
  const [selectedVenue, setSelectedVenue] = useState('All');

  const venueOptions = useMemo(
    () => ['All', ...new Set(bookings.map((booking) => booking.venue).filter(Boolean))],
    [bookings],
  );

  const filteredBookings =
    selectedVenue === 'All'
      ? bookings
      : bookings.filter((booking) => booking.venue === selectedVenue);

  return (
    <main className="page history-page">
      <h1>Booking History</h1>

      <div className="history-controls">
        <label htmlFor="venueFilter">Filter by venue</label>
        <select
          id="venueFilter"
          value={selectedVenue}
          onChange={(event) => setSelectedVenue(event.target.value)}
        >
          {venueOptions.map((venue) => (
            <option key={venue} value={venue}>
              {venue}
            </option>
          ))}
        </select>
      </div>

      {filteredBookings.length > 0 ? (
        <div className="history-list">
          {filteredBookings.map((booking) => (
            <div className="history-card" key={booking.id ?? `${booking.name}-${booking.venue}-${booking.date}`}>
              <h3>{booking.name}</h3>
              <p>
                <strong>Tickets:</strong> {booking.tickets}
              </p>
              <p>
                <strong>Stand:</strong> {booking.stand}
              </p>
              <p>
                <strong>Venue:</strong> {booking.venue}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-state">No bookings found for this venue.</p>
      )}
    </main>
  );
}

export default BookingHistory;
