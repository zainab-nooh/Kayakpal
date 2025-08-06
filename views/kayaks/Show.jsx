const React = require('react')
const Layout = require('../layouts/Layout')

function Show(props) {
  return(
    <Layout kayak = {props.kayak}>
        <nav>
                <ul>
                  <li>
                    <img src="../../images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
                  </li>
                  <li>Why Kayakpal</li>
                  <li><a href='/users/Index'>Login</a></li>
                </ul>
        </nav>

        <h1>{props.kayak.title}</h1>

        <div className='kayak-card'>
          <img src={props.kayak.photo} />
            <div className='kayak-title'>{props.kayak.title}</div>
            <div className='kayak-description'>Description: {props.kayak.description}</div>
            <div className='kayak-price'>Price: {props.kayak.price}</div>
        </div>

        {/* Back to all Kayaks profiles*/}
        <div>
            <a href={`/kayaks/?token=${props.token}`}>
             Back to All Kayaks Profiles</a>
        </div>

        {/* Edit Kayak profile */}
        <div>
            <a href={`/kayaks/${props.kayak._id}/edit?token=${props.token}`}>
            Edit ${props.kayak.title}</a>
        </div>

        {/* Delete Kayak profile */}
        <form action={`/kayaks/${props.kayak._id}?_method=DELETE&token=${props.token}`}method="POST">
            <button>
                Delete {props.kayak.title}
            </button>
        </form>

        
    </Layout>
)}

module.exports = Show