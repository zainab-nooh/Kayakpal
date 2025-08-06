import kayak from '../../models/kayak'

const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
    const kayaks = props.kayaks
    console.log(props)
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
        <h1>All Kayaks</h1>
         {
          kayaks.map(kayak => {
            return <p key={kayak._id}>
              <a href={`/kayaks/${kayak._id}?token=${props.token}`}>
                {kayak.title}
              </a>
            </p>
          })
        }

        <a href={`/kayaks/new?token=${props.token}`}>Add Your Kayak</a>
        </div>

        
    </Layout>
)}

module.exports = Index