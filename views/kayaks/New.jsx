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

      <form action={`/kayaks?token=${props.token}`} method="POST">
        Title: <input type='text' name='title' placeholder='Enter your Kayak title' required /> <br />
        Description: <input type='text' name='description' placeholder='Enter Description of your Kayak' required /> <br />
        Price: <input type='text' name='price' placeholder="Enter your Kayak's Price per hour" required /> <br />
        <input type='submit' value='Create Kayak Profile' />
        
      </form>
    </Layout>
  );
}

module.exports = New;
