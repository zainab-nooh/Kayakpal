const React = require('react')
const Layout = require('../layouts/Layout')

function Edit(props) {
    const { title, _id, description, price } = props.kayaks
  return(
    <Layout kayaks={props.kayaks} business={props.business}>

        <nav>
                <ul>
                  <li>
                    <img src="../../images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
                  </li>
                  <li>Why Kayakpal</li>
                  <li><a href='/users/Index'>Login</a></li>
                </ul>
        </nav>

        <h1>Edit {title}</h1>

        <form action={`/kayaks/${_id}?_method=PUT&token=${props.token}`}method="POST">
                Title: <input type='text' name='title' placeholder='Enter your Kayak title' required defaultValue={title}/> <br/>
                Description: <input type='text' name='description' placeholder='Enter Description of your Kayak' required defaultValue={description}/> <br/>
                Price: <input type='text' name='price' placeholder="Enter your Kayak's Price per hour" required defaultValue={price} /> <br/>
                {/* Upload image Palce of Kayak  */}

               {/* Update Kayak Profile */}
                <input type='submit' value={`Update${title}`} />
        </form>

                {/* Back to all kayaks profiles*/}
                <div>
                    <a href={`/kayaks/${_id}?token=${props.token}`}>
                    Back to {title}</a>
                </div>


        
    </Layout>
)}

module.exports = Edit