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
        <a href={`/bookings/new?token=${props.token}`}>Add a Booking</a>
        </div>

        
    </Layout>
)}

module.exports = Index