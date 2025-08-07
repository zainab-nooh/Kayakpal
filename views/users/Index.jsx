const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
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
    // Navigation styles (keeping consistent with home page)
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
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 2rem',
      textAlign: 'center'
    },

    // Page title styles
    pageTitle: {
      fontSize: '3.5rem',
      fontWeight: '300',
      color: '#181816',
      marginBottom: '3rem',
      lineHeight: '1.2',
      fontFamily: 'Source Serif 4, serif'
    },
    highlight: {
      color: '#209b9f',
      fontWeight: '400'
    },

    // User options container
    userOptions: {
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      flexWrap: 'wrap',
      marginTop: '2rem'
    },

    // Individual option card
    option: {
      background: 'white',
      borderRadius: '20px',
      padding: '3rem 2rem',
      boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      minWidth: '280px',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },

    // Option link styling
    optionLink: {
      textDecoration: 'none',
      color: '#181816',
      display: 'block',
      fontSize: '2rem',
      fontWeight: '600',
      fontFamily: 'Source Serif 4, serif',
      position: 'relative',
      zIndex: 2
    },

    // Gradient overlay for options
    optionOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(32, 155, 159, 0.05), rgba(26, 133, 137, 0.05))',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      zIndex: 1
    },

    // Responsive styles for smaller screens
    '@media (max-width: 768px)': {
      pageTitle: {
        fontSize: '2.5rem'
      },
      userOptions: {
        flexDirection: 'column',
        gap: '2rem'
      },
      option: {
        minWidth: '250px'
      }
    }
  }

  // Add hover effects via JavaScript (since we can't use CSS hover in inline styles)
  const handleOptionMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.15)'
    const overlay = e.currentTarget.querySelector('.option-overlay')
    if (overlay) overlay.style.opacity = '1'
  }

  const handleOptionMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)'
    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)'
    const overlay = e.currentTarget.querySelector('.option-overlay')
    if (overlay) overlay.style.opacity = '0'
  }

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{__html: fontStyles}} />
      
      {/* Navigation - consistent with home page */}
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
          <h1 style={styles.pageTitle}>
            Are you a <span style={styles.highlight}>Customer</span><br />
            or <span style={styles.highlight}>Business Owner</span>?
          </h1>
          
          <div style={styles.userOptions} className='user-options'>
            <div 
              style={styles.option} 
              className='option'
              onMouseEnter={handleOptionMouseEnter}
              onMouseLeave={handleOptionMouseLeave}
            >
              <div className="option-overlay" style={styles.optionOverlay}></div>
              <p style={{ margin: 0 }}>
                <a href='/customers' style={styles.optionLink}>Customer</a>
              </p>
            </div>
                     
            <div 
              style={styles.option} 
              className='option'
              onMouseEnter={handleOptionMouseEnter}
              onMouseLeave={handleOptionMouseLeave}
            >
              <div className="option-overlay" style={styles.optionOverlay}></div>
              <p style={{ margin: 0 }}>
                <a href='/businessOwners' style={styles.optionLink}>Business Owner</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

module.exports = Index