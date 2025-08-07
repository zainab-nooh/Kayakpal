const React = require('react')
const Layout = require('../layouts/Layout')

function SignUp(props) {
  // Font definitions and global styles
  const fontStyles = `
    <style>
      @font-face {
        font-family: 'Source Serif 4';
        src: url('../fonts/SourceSerif4_18pt-Medium.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      
      @font-face {
        font-family: 'Inter 24pt';
        src: url('../fonts/Inter_24pt-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      
      @font-face {
        font-family: 'Inter 28pt';
        src: url('../fonts/Inter_28pt-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
      }
      
      body {
        background-color: #f6f4ee;
        color: #181816;
        margin: 0;
        padding: 0;
        min-height: 100vh;
      }
    </style>
  `

  const styles = {
    // Navigation styles (keeping consistent)
    nav: {
      background: '#f6f4ee',
      padding: '1rem 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000
    },
    navUl: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 2rem',
      listStyle: 'none'
    },
    navLi: {
      display: 'flex',
      alignItems: 'center'
    },
    navText: {
      color: '#181816',
      fontFamily: 'Inter 24pt, sans-serif',
      fontWeight: '500',
      cursor: 'pointer'
    },
    navLink: {
      background: '#209b9f',
      color: '#fffefe',
      padding: '0.5rem 1.5rem',
      borderRadius: '25px',
      transition: 'background 0.3s ease',
      textDecoration: 'none',
      fontFamily: 'Inter 24pt, sans-serif'
    },

    // Main content styles
    mainContent: {
      marginTop: '80px',
      padding: '4rem 0',
      backgroundColor: '#f6f4ee',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '0 2rem',
      textAlign: 'center'
    },

    // Page title styles
    pageTitle: {
      fontSize: '3rem',
      fontWeight: '300',
      color: '#209b9f',
      marginBottom: '1rem',
      lineHeight: '1.2',
      fontFamily: 'Source Serif 4, serif'
    },
    subtitle: {
      fontSize: '2.5rem',
      fontWeight: '300',
      color: '#181816',
      marginBottom: '3rem',
      lineHeight: '1.2',
      fontFamily: 'Source Serif 4, serif'
    },

    // Back link styles
    backLink: {
      color: '#209b9f',
      textDecoration: 'none',
      fontSize: '1rem',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '2rem',
      display: 'inline-block',
      transition: 'color 0.3s ease'
    },

    // Form styles
    form: {
      background: 'transparent',
      padding: '2rem 0',
      textAlign: 'left',
      marginTop: '2rem'
    },

    // Form field container
    fieldContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '3rem',
      gap: '2rem'
    },

    // Label styles
    label: {
      fontSize: '2rem',
      fontWeight: '400',
      color: '#181816',
      fontFamily: 'Source Serif 4, serif',
      minWidth: '150px',
      textAlign: 'left'
    },

    // Input styles
    input: {
      flex: 1,
      padding: '1.2rem',
      border: '2px solid #e5e5e5',
      borderRadius: '10px',
      fontSize: '1.1rem',
      fontFamily: 'Inter 24pt, sans-serif',
      backgroundColor: '#fff',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },

    // Submit button styles
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #209b9f, #1a8589)',
      border: 'none',
      borderRadius: '15px',
      color: '#fffefe',
      padding: '1.2rem',
      fontSize: '1.2rem',
      fontWeight: '600',
      fontFamily: 'Inter 28pt, sans-serif',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '1rem'
    },

    // Login link container
    loginContainer: {
      textAlign: 'center',
      marginTop: '2rem',
      fontSize: '1.1rem',
      color: '#666',
      fontFamily: 'Inter 24pt, sans-serif'
    },

    // Login link
    loginLink: {
      color: '#209b9f',
      textDecoration: 'underline',
      fontWeight: '500',
      transition: 'color 0.3s ease'
    }
  }

  // Input focus handlers
  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#209b9f'
    e.target.style.backgroundColor = '#fff'
    e.target.style.outline = 'none'
  }

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#e5e5e5'
    e.target.style.backgroundColor = '#fff'
  }

  // Button hover handlers
  const handleButtonHover = (e) => {
    e.target.style.transform = 'translateY(-2px)'
    e.target.style.boxShadow = '0 8px 25px rgba(32, 155, 159, 0.3)'
  }

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{__html: fontStyles}} />
      
      {/* Navigation - consistent with other pages */}
      <nav style={styles.nav}>
        <ul style={styles.navUl}>
          <li style={styles.navLi}>
            <a href="/Home" style={{ textDecoration: 'none' }}>
              <img src="../../images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px', cursor: 'pointer' }} />
            </a>
          </li>
          <li style={{...styles.navLi, marginLeft: 'auto', marginRight: '2rem'}}>
            <span style={styles.navText}>Why Kayakpal</span>
          </li>
          <li style={styles.navLi}>
            <a href='/users/Index' style={styles.navLink}>Login</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Business Owner</h1>
          <h1 style={styles.subtitle}>SignUp</h1>
          
          <a href='/Home' style={styles.backLink}>Go back to Home Page</a>
          
          <form action='/businessOwners' method="POST" style={styles.form}>
            <div style={styles.fieldContainer}>
              <label style={styles.label}>Name</label>
              <input 
                type='text' 
                name='name' 
                placeholder='Enter your full name' 
                required
                style={styles.input}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div style={styles.fieldContainer}>
              <label style={styles.label}>Email</label>
              <input 
                type='text' 
                name='email' 
                placeholder='Enter your email' 
                required
                style={styles.input}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div style={styles.fieldContainer}>
              <label style={styles.label}>Password</label>
              <input 
                type='password' 
                name='password' 
                placeholder='Enter your password' 
                required
                style={styles.input}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <input 
              type='submit' 
              value='Submit to Register' 
              style={styles.submitButton}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            />
            
            <p style={styles.loginContainer}>
              Have an account ... <a href='/businessOwners/login' style={styles.loginLink}>login</a>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}

module.exports = SignUp