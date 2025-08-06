const React = require('react');
const Layout = require('../layouts/Layout');

function New(data) {
  // data contains everything from res.locals.data
  console.log('Data received:', data);
  
  return (
    <Layout>
      <nav>
        <ul>
          <li>
            <img src="/images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
          </li>
          <li>Why Kayakpal</li>
          <li><a href='/customers'>Login</a></li>
        </ul>
      </nav>
      <h1>Kayak Booking</h1>

      <p><strong>Customer: </strong>{data.customer?.name || 'No customer data'}</p>

      <form action={`/bookings?token=${data.token || ''}`} method="POST">
        <label>
          Date: <input type='date' name='date' required />
        </label>
        <br />

        <label>
          Time: <input type='time' name='time' required />
        </label>
        <br />

        <button type='submit'>Create a Booking</button>
      </form>
    </Layout>
  );
}

module.exports = New;