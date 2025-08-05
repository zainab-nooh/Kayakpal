const React = require('react')
const Layout  = require('../layouts/Layout')

function SignUp(props) {
    return (
        <Layout>
            <h1>Business Owner</h1>
            <h1>Sign Up</h1>
            <a href='/Home'>Go back to Home Page</a>
            <form action='/businessOwners' method="POST">
                Name: <input type='text' name='name' placeholder='Enter your full name' required/><br/>
                Email: <input type='text' name='email' placeholder='Enter your email' required/> <br/>
                Password: <input type='password' name='password' placeholder='Enter your password' required/> <br/>
                <input type='submit' value='Submit to Register' />

                <p>Have an account ...<a href='/businessOwners/login'>login</a></p>
            </form>

        </Layout>
    )
}

module.exports = SignUp