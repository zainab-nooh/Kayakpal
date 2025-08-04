const React = require('react')
const Layout = require('../layouts/Layout')

function Show(props) {
    // Will add more later on like the refs to customer (ref), kayak(ref)
    const { date, _id, status  } = props.booking
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

        <h1>Edit {date}</h1>
        {/* will change to Custoemr name later */}

        <form action={`/bookings/${_id}?method=PUT&token=${props.token}`}method="POST">
                {/* business (refs)
                bookingS [] */}
                Date: <input type='date' name='date' placeholder='Enter Date for booking ' required defaultValue={date} /> <br />
                Status: <input type='boolean' name='status'  required defaultValue={status} /> <br />
        </form>
                
               {/* Update a Booking */}
                <button type='submit' ><a href={`/bookings/${_id}?token=${props.token}`}>Update {date}</a></button>
        

                {/* Back to all Bookings*/}
                <div>
                    <a href={`/bookings/${_id}?token=${props.token}`}>
                    Back to {date}</a>
                </div>

                {/* All links to adte will be changed to name Of ,custoemr or something else   */}


        
    </Layout>
)}

module.exports = Show