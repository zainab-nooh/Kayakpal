const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
  return (
    <Layout>
      
      <h1>Are you a Customer or Business Owner?</h1>
      <div class='user-options'>
        <div class='option'>
            <p><a href='/customers/SignUp'>Customer</a></p>
        </div>
        
        <div class='option'>
            <p><a href='/businessOwners/SignUp'>Business Owner</a></p>
        </div>
      </div>


    </Layout>
  )
}

module.exports = Index
