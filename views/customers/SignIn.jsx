const React = require('react')
const Layout  = require('../layouts/Layout')

function SignIn(props) {
    return (
        <Layout>
            <h1>Customer</h1>
            <h1>Sign In</h1>
            <a href='/Home'>Go back to Home Page</a>
            <form action='/customers' method="POST">
                Email: <input type='text' name='email' placeholder='Enter your email' required/> <br/>
                Password: <input type='password' name='password' placeholder='Enter your password' required/> <br/>

                <button type='submit' >Sign In</button>
            </form>

        </Layout>
    )
}

module.exports = SignIn