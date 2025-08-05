const React = require('react')
const Layout = require('../layouts/Layout')

function Show(props) {
    const { name, _id, description, location } = props.business
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

        <h1>Edit {name}</h1>

        <form action={`/business/${_id}?_method=PUT&token=${props.token}`}method="POST">
                Name: <input type='text' name='name' placeholder='Enter your Business Name' required defaultValue={name}/> <br/>
                Description: <input type='text' name='description' placeholder='Enter Description of you Business' required defaultValue={description}/> <br/>
                Location: <input type='text' name='location' placeholder='Enter your Business location' required defaultValue={location} /> <br/>
                {/* Upload image Palce of business  */}

               {/* Update Business Profile */}
                <input type='submit'  value={`Update ${name}`} />
        </form>
                
        

                {/* Back to all business profiles*/}
                <div>
                    <a href={`/business/${_id}?token=${props.token}`}>
                    Back to {name}</a>
                </div>


        
    </Layout>
)}

module.exports = Show