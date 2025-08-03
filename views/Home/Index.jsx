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

        <h1>What will you do today?</h1>
        <p>Remember every moment deserves personalization, scheduling and booking all in one place</p>
        <button><a href='/users/Index'>Book Now!</a></button>
        
    </Layout>
)}

module.exports = Index