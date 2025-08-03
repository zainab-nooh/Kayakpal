const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
  return (
    <Layout>
      
      <h1>Are you a Customer or Business Owner?</h1>
      <div className='user-options'>
        <div className='option'>
            <p><a href='/customers'>Customer</a></p>
        </div>
        
        <div className='option'>
            <p><a href='/businessOwners'>Business Owner</a></p>
        </div>
      </div>


    </Layout>
  )
}

module.exports = Index
