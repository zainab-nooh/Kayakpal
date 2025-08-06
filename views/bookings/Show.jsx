const React = require('react');
const Layout = require('../layouts/Layout');

function Show(data) {
  const { booking, customer, token } = data;
  
  // The kayak should be populated in booking.kayak
  const kayak = booking?.kayak;

  // Format date and time from booking.bookingDateTime (same as in Edit.jsx)
  const datetime = booking?.bookingDateTime ? new Date(booking.bookingDateTime) : null;
  const formattedDate = datetime ? datetime.toISOString().slice(0, 10) : 'N/A'; // YYYY-MM-DD
  const formattedTime = datetime ? datetime.toTimeString().slice(0, 5) : 'N/A'; // HH:MM (24hr)

  return (
    <Layout token={token}>
      <nav>
        <ul>
          <li>
            <img src="/images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
          </li>
          <li>Why Kayakpal</li>
          <li><a href={`/customers?token=${token}`}>Login</a></li>
        </ul>
      </nav>

      <h1>Booking Details</h1>

      <p><strong>Customer:</strong> {customer?.name || 'N/A'}</p>
      <p><strong>Date:</strong> {formattedDate}</p>
      <p><strong>Time:</strong> {formattedTime}</p>
      <p><strong>Kayak:</strong> {kayak?.title || 'N/A'}</p>

      <div style={{ marginTop: '1.5em' }}>
        <a href={`/bookings/${booking?._id}/edit?token=${token}`}>
          <button>Edit Booking</button>
        </a>

        <form
          action={`/bookings/${booking?._id}?_method=DELETE&token=${token}`}
          method="POST"
          style={{ display: 'inline', marginLeft: '1em' }}
        >
          <button type="submit" style={{ backgroundColor: 'red', color: 'white' }}>
            Delete Booking
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Show;