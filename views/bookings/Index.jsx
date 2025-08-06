const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {

  return(
    <Layout>
        <nav>
                <ul>
                  <li>
                    <img src="../../images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
                  </li>
                  <li>Why Kayakpal</li>
                  <li><a href='/users/Index'>Login</a></li>
                </ul>
        </nav>
        <div>
        <h1>All Bookings</h1>
        {
  props.bookings && props.bookings.length > 0 ? (
    props.bookings.map(booking => (
      <div key={booking._id} style={{ marginBottom: '1rem' }}>
        <p><strong>Date:</strong> {new Date(booking.bookingDateTime).toLocaleDateString()}</p>
        <p><strong>Time:</strong> {new Date(booking.bookingDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        <a href={`/bookings/${booking._id}/edit?token=${props.token}`}>Edit Booking</a>
        <form action={`/bookings/${booking._id}?_method=DELETE&token=${props.token}`} method="POST">
          <button type="submit">Delete</button>
        </form>
      </div>
    ))
  ) : (
    <p>No bookings found.</p>
  )
}
        
        
        {/* {
  props.bookings && props.bookings.length > 0 ? (
    props.bookings.map(booking => (
      <div key={booking._id} style={{ marginBottom: '1rem' }}>
        <p><strong>Date:</strong> {new Date(booking.bookingDateTime).toLocaleDateString()}</p>
        <p><strong>Time:</strong> {new Date(booking.bookingDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        <a href={`/bookings/${booking._id}/edit?token=${props.token}`}>Edit Booking</a>
        <form action={`/bookings/${booking._id}?_method=DELETE&token=${props.token}`} method="POST">
          <button type="submit">Delete Booking</button>
        </form>
      </div>
    ))
  ) : (
    <p>No bookings found.</p>
  )
} */}

        <a href={`/bookings/new?token=${props.token}`}>Add a Booking</a>
        </div>

        
    </Layout>
)}

module.exports = Index