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
    // Navigation styles
    nav: {
      background: 'white',
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
      minHeight: '100vh'
    },
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 2rem'
    },

    // Page title styles
    pageTitle: {
      fontSize: '3.5rem',
      fontWeight: '300',
      color: '#209b9f',
      marginBottom: '3rem',
      lineHeight: '1.2',
      fontFamily: 'Source Serif 4, serif',
      textAlign: 'center'
    },

    // Business card styles
    businessCard: {
      background: 'white',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      marginBottom: '3rem',
      border: '1px solid #e5e5e5'
    },

    businessName: {
      fontSize: '2.5rem',
      fontWeight: '400',
      color: '#181816',
      fontFamily: 'Source Serif 4, serif',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },

    businessDetail: {
      marginBottom: '2rem',
      padding: '1rem 0'
    },

    businessLabel: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#209b9f',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '0.5rem',
      display: 'block'
    },

    businessText: {
      fontSize: '1.1rem',
      color: '#181816',
      fontFamily: 'Inter 24pt, sans-serif',
      lineHeight: '1.6'
    },

    // Action buttons container
    actionsContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '2rem'
    },

    // Button styles
    primaryButton: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #209b9f, #1a8589)',
      color: '#fffefe',
      padding: '1rem 2rem',
      borderRadius: '25px',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      fontFamily: 'Inter 28pt, sans-serif',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(32, 155, 159, 0.2)'
    },

    secondaryButton: {
      display: 'inline-block',
      background: 'transparent',
      color: '#209b9f',
      border: '2px solid #209b9f',
      padding: '1rem 2rem',
      borderRadius: '25px',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      fontFamily: 'Inter 28pt, sans-serif',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },

    dangerButton: {
      display: 'inline-block',
      background: 'transparent',
      color: '#209b9f',
      border: '2px solid #209b9f',
      padding: '1rem 2rem',
      borderRadius: '25px',
      fontSize: '1rem',
      fontWeight: '600',
      fontFamily: 'Inter 28pt, sans-serif',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },

    // Owner actions section
    ownerSection: {
      background: 'rgba(32, 155, 159, 0.05)',
      padding: '2rem',
      borderRadius: '15px',
      marginBottom: '2rem',
      border: '1px solid rgba(32, 155, 159, 0.1)'
    },

    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#209b9f',
      fontFamily: 'Source Serif 4, serif',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },

    // Back link
    backLink: {
      color: '#209b9f',
      textDecoration: 'none',
      fontSize: '1rem',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '3rem',
      display: 'inline-block',
      transition: 'color 0.3s ease'
    }
  }

  // Button hover handlers
  const handlePrimaryHover = (e) => {
    e.target.style.transform = 'translateY(-2px)'
    e.target.style.boxShadow = '0 8px 25px rgba(32, 155, 159, 0.3)'
  }

  const handlePrimaryLeave = (e) => {
    e.target.style.transform = 'translateY(0)'
    e.target.style.boxShadow = '0 4px 15px rgba(32, 155, 159, 0.2)'
  }

  const handleSecondaryHover = (e) => {
    e.target.style.backgroundColor = '#209b9f'
    e.target.style.color = '#fffefe'
    e.target.style.transform = 'translateY(-2px)'
  }

  const handleSecondaryLeave = (e) => {
    e.target.style.backgroundColor = 'transparent'
    e.target.style.color = '#209b9f'
    e.target.style.transform = 'translateY(0)'
  }

  const handleDangerHover = (e) => {
    e.target.style.backgroundColor = '#209b9f'
    e.target.style.color = '#fffefe'
    e.target.style.transform = 'translateY(-2px)'
  }

  const handleDangerLeave = (e) => {
    e.target.style.backgroundColor = 'transparent'
    e.target.style.color = '#209b9f'
    e.target.style.transform = 'translateY(0)'
  }

  return (
    <Layout business={props.business}>
      <div dangerouslySetInnerHTML={{__html: fontStyles}} />
      
      {/* Navigation */}
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
          <h1 style={styles.pageTitle}>{props.business.name}</h1>
          
          <a href={`/business/?token=${props.token}`} style={styles.backLink}>
            ← Back to All Business Profiles
          </a>

          {/* Business Information Card */}
          <div style={styles.businessCard}>
            <h2 style={styles.businessName}>{props.business.name}</h2>
            
            <div style={styles.businessDetail}>
              <label style={styles.businessLabel}>Description</label>
              <p style={styles.businessText}>{props.business.description}</p>
            </div>

            <div style={styles.businessDetail}>
              <label style={styles.businessLabel}>Location</label>
              <p style={styles.businessText}>{props.business.location}</p>
            </div>
          </div>

          {/* General Actions */}
          <div style={styles.actionsContainer}>
            <a 
              href={`/kayaks/?token=${props.token}`}
              style={styles.primaryButton}
              onMouseEnter={handlePrimaryHover}
              onMouseLeave={handlePrimaryLeave}
            >
              Add Kayak
            </a>
          </div>

          {/* Owner-specific Actions */}
          {loggedBusiness == currentBusinessId && (
            <div style={styles.ownerSection}>
              <h3 style={styles.sectionTitle}>Business Management</h3>
              <div style={styles.actionsContainer}>
                <a 
                  href={`/business/${props.business._id}/edit?token=${props.token}`}
                  style={styles.secondaryButton}
                  onMouseEnter={handleSecondaryHover}
                  onMouseLeave={handleSecondaryLeave}
                >
                  Edit {props.business.name}
                </a>
                
                <form 
                  action={`/business/${props.business._id}?_method=DELETE&token=${props.token}`} 
                  method="POST"
                  style={{display: 'inline-block'}}
                  onSubmit={(e) => {
                    if (!confirm(`Are you sure you want to delete ${props.business.name}? This action cannot be undone.`)) {
                      e.preventDefault()
                    }
                  }}
                >
                  <button
                    type="submit"
                    style={styles.dangerButton}
                    onMouseEnter={handleDangerHover}
                    onMouseLeave={handleDangerLeave}
                  >
                    Delete {props.business.name}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

module.exports = Show