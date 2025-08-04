const React = require('react')
const Layout = require('../layouts/Layout')

function Show(props) {
  return(
    <Layout business = {props.business}>
        <nav>
                <ul>
                  <li>
                    <img src="../../images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
                  </li>
                  <li>Why Kayakpal</li>
                  <li><a href='/users/Index'>Login</a></li>
                </ul>
        </nav>

        <h1>{props.business.name}</h1>

        <div className='business-card'>
            <div className='business-name'>{props.business.name}</div>
            <div className='business-description'>Description: {props.business.description}</div>
            <div className='business-location'>Location: {props.business.location}</div>
        </div>

        {/* Back to all business profiles*/}
        <div>
            <a href={`/business/?token=${props.token}`}>
             Back to All Business Profiles</a>
        </div>

        {/* Edit business profile */}
        <div>
            <a href={`/business/${props.business._id}/edit?tokrn=${props.token}`}>
            Edit ${props.business.name}</a>
        </div>

        {/* Delete business profile */}
        <form action={`/business/${props.business._id}?method="DELETE&token=${props.token}`}method="POST">
            <button>
                Delete {props.business.name}
            </button>
        </form>

        
    </Layout>
)}

module.exports = Show