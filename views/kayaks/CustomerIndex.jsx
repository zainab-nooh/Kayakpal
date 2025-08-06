const React = require('react');
const Layout = require('../layouts/Layout');

function CustomerIndex(props) {
  const kayaks = props.kayaks;

  return (
    <Layout>
      <nav>
        <ul>
          <li>
            <img src="/images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
          </li>
          <li>Explore Kayaks</li>
          <li><a href='/users/Index'>Login</a></li>
        </ul>
      </nav>

      <h1>Available Kayaks</h1>
                      <a href={`/bookings?token=${props.data.token}`}>My Bookings</a>

      {kayaks.length === 0 ? (
        <p>No kayaks are available at the moment.</p>
      ) : (
        <ul>
          {kayaks.map((kayak) => (
            <li key={kayak._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <h2>{kayak.title}</h2>
              <p><strong>Description:</strong> {kayak.description}</p>
              <p><strong>Price/hour:</strong> ${kayak.price}</p>
              {kayak.business && (
                <p>
                  <strong>Business:</strong> {kayak.business.name} {' '}
  
                </p>
              )}
              <a href={`/bookings/new?token=${props.data.token}`}>Add a Booking</a>

     

            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

module.exports = CustomerIndex;
