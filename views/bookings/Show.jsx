const React = require('react')
const Layout = require('../layouts/Layout')

function Show(props) {
  return(
    <Layout booking = {props.booking}>
        <nav>
                <ul>
                  <li>
                    <img src="../../images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
                  </li>
                  <li>Why Kayakpal</li>
                  <li><a href='/users/Index'>Login</a></li>
                </ul>
        </nav>

        <h1>{props.booking.date}</h1>
            {/*Need to change it from showing the date to show the customer name instead  */}


        <div className='booking-card'>
            <div className='booking-date'>{props.booking.date}</div>
            <div className='booking-staus'>Status: {props.booking.status}</div>
                {/* business (refs)
                bookingS [] */}
        </div>

        {/* Back to all Bookings*/}
        <div>
            <a href={`/bookings/?token=${props.token}`}>
             Back to All Bookings</a>
        </div>

        {/* Edit a Booking */}
        <div>
            <a href={`/bookings/${props.booking._id}/edit?tokrn=${props.token}`}>
            Edit ${props.booking.date}</a>
             {/*Need to change it from showing the date to show the customer name instead  */}
        </div>

        {/* Delete a Booking */}
        <form action={`/bookings/${props.booking._id}?method="DELETE&token=${props.token}`}method="POST">
            <button>
                Delete {props.booking.date}
                {/*Need to change it from showing the date to show the customer name instead  */}

            </button>
        </form>

        
    </Layout>
)}

module.exports = Show