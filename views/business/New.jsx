const React = require('react')
const Layout = require('../layouts/Layout')

function New(props) {
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

        <h1>Business Profile</h1>

        <form action={`/business?token=${props.token}`} method="POST">
                Name: <input type='text' name='name' placeholder='Enter your Business Name' required/> <br/>
                Description: <input type='text' name='description' placeholder='Enter Description of you Business' required/> <br/>
                Location: <input type='text' name='location' placeholder='Enter your Business location' required/> <br/>
                {/* Upload image Palce of business  */}
                  
                  <input value='Create Profile' type='submit' />

        </form>

        
    </Layout>
)}

module.exports = New