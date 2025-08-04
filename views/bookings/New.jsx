const React = require('react');
const Layout = require('../layouts/Layout');

function New(props) {
  return (
    <Layout>
      <nav>
        <ul>
          <li>
            <img src="/images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
          </li>
          <li>Why Kayakpal</li>
          <li><a href='/users/Index'>Login</a></li>
        </ul>
      </nav>

      <h1>Kayak</h1>

      <form action='/bookings' method="POST">
        {/* business (refs)
        bookingS [] */}
        Date: <input type='date' name='date' placeholder='Enter Date for booking ' required /> <br />
        Status: <input type='boolean' name='status'  required /> <br />
        <button type='submit'>Create a Booking</button>
      </form>
    </Layout>
  );
}

module.exports = New;
