const React = require('react')
const Layout = require('../layouts/Layout')

function Show(props) {
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

    // Back link
    backLink: {
      color: '#209b9f',
      textDecoration: 'none',
      fontSize: '1rem',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '3rem',
      display: 'inline-block',
      transition: 'color 0.3s ease'
    },

    // Kayak card styles
    kayakCard: {
      background: 'white',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      marginBottom: '3rem',
      border: '1px solid #e5e5e5'
    },

    // Kayak image
    kayakImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '15px',
      marginBottom: '2rem',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },

    // Kayak title
    kayakTitle: {
      fontSize: '2.5rem',
      fontWeight: '400',
      color: '#181816',
      fontFamily: 'Source Serif 4, serif',
      marginBottom: '2rem',
      textAlign: 'center'
    },

    // Kayak details container
    kayakDetails: {
      display: 'grid',
      gap: '2rem',
      marginTop: '2rem'
    },

    // Detail item
    detailItem: {
      padding: '1.5rem 0',
      borderBottom: '1px solid #f0f0f0'
    },

    detailLabel: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#209b9f',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '0.5rem',
      display: 'block'
    },

    detailText: {
      fontSize: '1.1rem',
      color: '#181816',
      fontFamily: 'Inter 24pt, sans-serif',
      lineHeight: '1.6'
    },

    // Price styling
    priceText: {
      fontSize: '1.5rem',
      color: '#209b9f',
      fontFamily: 'Source Serif 4, serif',
      fontWeight: '600'
    },

    // Action buttons container
    actionsContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '2rem'
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

    deleteButton: {
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

    // Management section
    managementSection: {
      background: 'rgba(32, 155, 159, 0.05)',
      padding: '2rem',
      borderRadius: '15px',
      border: '1px solid rgba(32, 155, 159, 0.1)'
    },

    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#209b9f',
      fontFamily: 'Source Serif 4, serif',
      marginBottom: '1.5rem',
      textAlign: 'center'
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

  return (
    <Layout kayak={props.kayak}>
      <div dangerouslySetInnerHTML={{__html: fontStyles}} />
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <ul style={styles.navUl}>
          <li style={styles.navLi}>
            <a href="/Home" style={{ textDecoration: 'none' }}>
            <a href="/Home" style={{ textDecoration: 'none' }}>
              <img src="../../images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px', cursor: 'pointer' }} />
            </a>
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
          <h1 style={styles.pageTitle}>{props.kayak.title}</h1>
          
          <a href={`/kayaks/?token=${props.token}`} style={styles.backLink}>
            ← Back to All Kayaks
          </a>

          {/* Kayak Information Card */}
          <div style={styles.kayakCard}>
            {props.kayak.photo && (
              <img 
                src={props.kayak.photo} 
                alt={props.kayak.title}
                style={styles.kayakImage}
              />
            )}
            
            <h2 style={styles.kayakTitle}>{props.kayak.title}</h2>
            
            <div style={styles.kayakDetails}>
              <div style={styles.detailItem}>
                <label style={styles.detailLabel}>Description</label>
                <p style={styles.detailText}>{props.kayak.description}</p>
              </div>

              <div style={styles.detailItem}>
                <label style={styles.detailLabel}>Price</label>
                <p style={{...styles.detailText, ...styles.priceText}}>
                  ${props.kayak.price}
                </p>
              </div>
            </div>
          </div>

          {/* Management Actions */}
          <div style={styles.managementSection}>
            <h3 style={styles.sectionTitle}>Kayak Management</h3>
            <div style={styles.actionsContainer}>
              <a 
                href={`/kayaks/${props.kayak._id}/edit?token=${props.token}`}
                style={styles.secondaryButton}
                onMouseEnter={handleSecondaryHover}
                onMouseLeave={handleSecondaryLeave}
              >
                Edit {props.kayak.title}
              </a>
              
              <form 
                action={`/kayaks/${props.kayak._id}?_method=DELETE&token=${props.token}`} 
                method="POST"
                style={{display: 'inline-block'}}
                onSubmit={(e) => {
                  if (!confirm(`Are you sure you want to delete ${props.kayak.title}? This action cannot be undone.`)) {
                    e.preventDefault()
                  }
                }}
              >
                <button
                  type="submit"
                  style={styles.deleteButton}
                  onMouseEnter={handleSecondaryHover}
                  onMouseLeave={handleSecondaryLeave}
                >
                  Delete {props.kayak.title}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

module.exports = Show