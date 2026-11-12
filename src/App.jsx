import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Booking from './pages/Booking';
import BookingHistory from './pages/BookingHistory';

const initialBookings = [
  {
    id: 1,
    name: 'Aarav',
    tickets: 2,
    stand: 'VIP Stand',
    venue: 'Wankhede Stadium',
  },
  {
    id: 2,
    name: 'Meera',
    tickets: 3,
    stand: 'General Stand',
    venue: 'M. Chinnaswamy Stadium',
  },
];

function App() {
  const [bookings, setBookings] = useState(initialBookings);

  const handleBookingSubmit = (booking) => {
    setBookings((previousBookings) => [
      {
        id: Date.now(),
        ...booking,
      },
      ...previousBookings,
    ]);
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/booking" element={<Booking onBookingSubmit={handleBookingSubmit} />} />
        <Route path="/history" element={<BookingHistory bookings={bookings} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
