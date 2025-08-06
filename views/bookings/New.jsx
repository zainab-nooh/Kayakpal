const React = require('react');
const Layout = require('../layouts/Layout');

function New(data) {
  // data contains everything from res.locals.data
  console.log('Data received:', data);
  
  return (
    <Layout token={data.token}>
      <nav>
        <ul>
          <li>
            <img src="/images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
          </li>
          <li>Why Kayakpal</li>
          <li><a href={`/customers?token=${data.token}`}>Login</a></li>
        </ul>
      </nav>
      <h1>Kayak Booking</h1>

      <p><strong>Customer: </strong>{data.customer?.name || 'No customer data'}</p>

      <form action={`/bookings?token=${data.token || ''}`} method="POST">
        {/* <label>
          Select Kayak:
          <select name="kayakId" required>
            <option value="">Choose a kayak...</option>
            {data.kayaks && data.kayaks.map(kayak => (
              <option key={kayak._id} value={kayak._id}>
                {kayak.title} - ${kayak.price}/hour
              </option>
            ))}
          </select>
        </label> */}
        {/* <br /> */}

        <label>
          Date: 
          <input type='date' name='date' required />
        </label>
        <br />

        <label>
          Start Time: 
          <input type='time' name='time' required />
        </label>
        <br />

        <label>
          Duration:
          <select name="duration" defaultValue="60">
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1.5 hours</option>
            <option value="120">2 hours</option>
            <option value="150">2.5 hours</option>
            <option value="180">3 hours</option>
          </select>
        </label>
        <br />

        <button type='submit'>Create a Booking</button>
      </form>
    </Layout>
  );
}

module.exports = New;