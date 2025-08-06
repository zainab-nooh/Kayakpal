import kayak from '../../models/kayak'

const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
  const kayaks = props.kayaks
  console.log(props)
  
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
      maxWidth: '1200px',
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

    // Kayaks container - grid layout
    kayaksContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '2rem',
      marginBottom: '4rem'
    },

    // Kayak card
    kayakCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid #e5e5e5',
      position: 'relative',
      overflow: 'hidden'
    },

    // Kayak card content
    kayakContent: {
      position: 'relative',
      zIndex: 2
    },

    // Kayak title/link
    kayakLink: {
      color: '#181816',
      textDecoration: 'none',
      fontSize: '1.5rem',
      fontFamily: 'Source Serif 4, serif',
      fontWeight: '400',
      transition: 'color 0.3s ease',
      display: 'block',
      marginBottom: '0.5rem'
    },

    // Kayak icon/placeholder
    kayakIcon: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #209b9f, #1a8589)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
      color: '#fffefe',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },

    // Add kayak section
    addKayakSection: {
      textAlign: 'center',
      padding: '3rem 0'
    },

    // Add kayak button
    addKayakButton: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #209b9f, #1a8589)',
      color: '#fffefe',
      padding: '1.5rem 3rem',
      borderRadius: '25px',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: '600',
      fontFamily: 'Inter 28pt, sans-serif',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(32, 155, 159, 0.2)'
    },

    // Empty state
    emptyState: {
      textAlign: 'center',
      padding: '4rem 2rem',
      color: '#666'
    },
    emptyStateTitle: {
      fontSize: '2.5rem',
      fontFamily: 'Source Serif 4, serif',
      marginBottom: '1rem',
      color: '#181816'
    },
    emptyStateText: {
      fontSize: '1.1rem',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '2rem',
      lineHeight: '1.6'
    },
    emptyStateIcon: {
      fontSize: '4rem',
      color: '#209b9f',
      marginBottom: '2rem'
    }
  }

  // Hover handlers
  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)'
    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)'
    const link = e.currentTarget.querySelector('a')
    if (link) link.style.color = '#209b9f'
  }

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
    const link = e.currentTarget.querySelector('a')
    if (link) link.style.color = '#181816'
  }

  const handleButtonHover = (e) => {
    e.target.style.transform = 'translateY(-3px)'
    e.target.style.boxShadow = '0 8px 25px rgba(32, 155, 159, 0.3)'
  }

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0)'
    e.target.style.boxShadow = '0 4px 15px rgba(32, 155, 159, 0.2)'
  }

  return (
    <Layout>
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
          <h1 style={styles.pageTitle}>All Kayaks</h1>
          
          {kayaks && kayaks.length > 0 ? (
            <div style={styles.kayaksContainer}>
              {kayaks.map(kayak => (
                <div 
                  key={kayak._id} 
                  style={styles.kayakCard}
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                >
                  <div style={styles.kayakContent}>
                    <div style={styles.kayakIcon}>🚣</div>
                    <a 
                      href={`/kayaks/${kayak._id}?token=${props.token}`}
                      style={styles.kayakLink}
                    >
                      {kayak.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.emptyState}>
              <div style={styles.emptyStateIcon}>🚣‍♀️</div>
              <h2 style={styles.emptyStateTitle}>No Kayaks Available Yet</h2>
              <p style={styles.emptyStateText}>
                Be the first to add your kayak to Kayakpal and start offering amazing water experiences to customers!
              </p>
            </div>
          )}

          <div style={styles.addKayakSection}>
            <a 
              href={`/kayaks/new?token=${props.token}`}
              style={styles.addKayakButton}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              🚣 Add Your Kayak
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

module.exports = Index