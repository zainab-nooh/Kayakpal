const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
    const businessProfiles = props.businessProfiles
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
        <h1>All Business Profiles</h1>
        {
          businessProfiles.map(businessProfile => {
            return <p>{businessProfile.name}</p>
          })

        }
        <a href={`/business/new?token=${props.token}`}>Add Your Business</a>
        </div>

        
    </Layout>
)}

module.exports = Index