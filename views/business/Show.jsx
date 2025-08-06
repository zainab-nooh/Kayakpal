const React = require('react')
const Layout = require('../layouts/Layout')

function Show(props) {
  const currentBusinessId = props.data.currentBusiness._id.toString()
  const business = props.business.owner.toString()
  console.log(business)
  console.log(currentBusinessId)
  let loggedBusiness = null
  if(currentBusinessId==business){
    loggedBusiness=currentBusinessId
    console.log(currentBusinessId)
  }else {
    loggedBusiness=null
  }
  return (
    <Layout business={props.business}>
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
      {
        loggedBusiness==currentBusinessId?
      <div>
        <a href={`/business/${props.business._id}/edit?token=${props.token}`}>
          Edit ${props.business.name}</a>
      </div>:
      <></>

      }

      {/* Delete business profile */}
      {
        loggedBusiness?
      <form action={`/business/${props.business._id}?_method=DELETE&token=${props.token}`} method="POST">
        <button>
          Delete {props.business.name}
        </button>
      </form>:
      <></>
      }


      {/* Add Kayaks */}

        <div>
        <a href={`/kayaks/?token=${props.token}`}>
          Add Kayak</a>
      </div>




    </Layout>
  )
}

module.exports = Show