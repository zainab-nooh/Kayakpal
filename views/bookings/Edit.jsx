const React = require('react');
const Layout = require('../layouts/Layout');

function Edit(props) {
  // Debug: Let's see what we're getting
  console.log('Edit props:', props);
  
  // Handle flexible data structure safely
  const data = props.data || props;

  const booking = data.booking || {};
  const customer = data.customer || {};
  const token = props.token || data.token || '';
  
  // Debug: Let's see the extracted values
  console.log('Extracted token:', token);
  console.log('props.token:', props.token);
  console.log('data.token:', data.token);

  // Format date and time from booking.bookingDateTime
  const datetime = new Date(booking.bookingDateTime);
  const formattedDate = datetime.toISOString().slice(0, 10); // YYYY-MM-DD
  const formattedTime = datetime.toTimeString().slice(0, 5); // HH:MM (24hr)
  const duration = booking.duration || 60; // Default to 60 minutes

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

      <h1>Edit Booking</h1>

      <p><strong>Customer: </strong>{customer.name || 'No customer data'}</p>

      <form
        action={`/bookings/${booking._id}?_method=PUT&token=${token}`}
        method="POST"
      >
        <label>
          Date:
          <input
            type="date"
            name="date"
            required
            defaultValue={formattedDate}
          />
        </label>
        <br />

        <label>
          Start Time:
          <input
            type="time"
            name="time"
            required
            defaultValue={formattedTime}
          />
        </label>
        <br />

        <label>
          Duration:
          <select name="duration" defaultValue={duration}>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1.5 hours</option>
            <option value="120">2 hours</option>
            <option value="150">2.5 hours</option>
            <option value="180">3 hours</option>
          </select>
        </label>
        <br />
        
        <input type='submit' value='Update Booking' />
      </form>

      <form
        action={`/bookings/${booking._id}?_method=DELETE&token=${token}`}
        method="POST"
        style={{ marginTop: '1em' }}
      >
        <button type="submit" style={{ backgroundColor: 'red', color: 'white' }}>
          Delete Booking
        </button>
      </form>
    </Layout>
  );
}

module.exports = Edit;