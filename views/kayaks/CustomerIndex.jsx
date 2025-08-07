const React = require('react')
const Layout = require('../layouts/Layout')

function CustomerIndex(props) {
  const kayaks = props.kayaks;

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
      marginBottom: '2rem',
      lineHeight: '1.2',
      fontFamily: 'Source Serif 4, serif',
      textAlign: 'center'
    },

    // My Bookings link styles
    myBookingsLink: {
      display: 'inline-block',
      background: '#209b9f',
      color: '#fffefe',
      padding: '0.8rem 1.8rem',
      borderRadius: '25px',
      textDecoration: 'none',
      fontFamily: 'Inter 24pt, sans-serif',
      fontWeight: '500',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      marginBottom: '3rem'
    },

    // No kayaks message
    noKayaksMessage: {
      textAlign: 'center',
      fontSize: '1.3rem',
      color: '#666',
      fontFamily: 'Inter 24pt, sans-serif',
      padding: '3rem',
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      margin: '2rem auto',
      maxWidth: '600px'
    },

    // Kayaks grid
    kayaksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem',
      listStyle: 'none',
      padding: 0,
      margin: 0
    },

    // Kayak card styles
    kayakCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: 'none'
    },

    kayakTitle: {
      fontSize: '1.8rem',
      fontWeight: '600',
      color: '#181816',
      fontFamily: 'Source Serif 4, serif',
      marginBottom: '1rem',
      marginTop: 0
    },

    kayakDescription: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#555',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '1rem'
    },

    kayakPrice: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#209b9f',
      fontFamily: 'Inter 28pt, sans-serif',
      marginBottom: '1rem'
    },

    kayakBusiness: {
      fontSize: '1rem',
      color: '#777',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '1.5rem'
    },

    // Booking button styles
    bookingButton: {
      background: 'linear-gradient(135deg, #209b9f, #1a8589)',
      color: '#fffefe',
      padding: '0.8rem 1.8rem',
      borderRadius: '15px',
      textDecoration: 'none',
      fontFamily: 'Inter 24pt, sans-serif',
      fontWeight: '600',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      border: 'none',
      cursor: 'pointer'
    }
  }

  // Hover handlers
  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)'
    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)'
  }

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)'
  }

  const handleBookingButtonHover = (e) => {
    e.target.style.transform = 'translateY(-2px)'
    e.target.style.boxShadow = '0 8px 25px rgba(32, 155, 159, 0.3)'
  }

  const handleBookingButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0)'
    e.target.style.boxShadow = 'none'
  }

  const handleMyBookingsHover = (e) => {
    e.target.style.backgroundColor = '#1a8589'
    e.target.style.transform = 'translateY(-2px)'
  }

  const handleMyBookingsLeave = (e) => {
    e.target.style.backgroundColor = '#209b9f'
    e.target.style.transform = 'translateY(0)'
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
            <span style={styles.navText}>Explore Kayaks</span>
          </li>
          <li style={styles.navLi}>
            <a href='/users/Index' style={styles.navLink}>Login</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Available Kayaks</h1>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <a 
              href={`/bookings?token=${props.data.token}`} 
              style={styles.myBookingsLink}
              onMouseEnter={handleMyBookingsHover}
              onMouseLeave={handleMyBookingsLeave}
            >
              My Bookings
            </a>
          </div>

          {kayaks.length === 0 ? (
            <div style={styles.noKayaksMessage}>
              <p>No kayaks are available at the moment.</p>
            </div>
          ) : (
            <ul style={styles.kayaksGrid}>
              {kayaks.map((kayak) => (
                <li 
                  key={kayak._id} 
                  style={styles.kayakCard}
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                >
                  <h2 style={styles.kayakTitle}>{kayak.title}</h2>
                  <p style={styles.kayakDescription}>
                    <strong>Description:</strong> {kayak.description}
                  </p>
                  <p style={styles.kayakPrice}>
                    <strong>Price/hour:</strong> ${kayak.price}
                  </p>
                  {kayak.business && (
                    <p style={styles.kayakBusiness}>
                      <strong>Business:</strong> {kayak.business.name}
                    </p>
                  )}
                  <a 
                    href={`/bookings/new?token=${props.data.token}`}
                    style={styles.bookingButton}
                    onMouseEnter={handleBookingButtonHover}
                    onMouseLeave={handleBookingButtonLeave}
                  >
                    Add a Booking
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  )
}

module.exports = CustomerIndex