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

    // No bookings message
    noBookingsMessage: {
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

    // Booking card styles
    bookingCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: 'none'
    },

    // Booking info styles
    bookingDate: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#181816',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '0.5rem',
      margin: 0
    },

    bookingTime: {
      fontSize: '1.1rem',
      color: '#555',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '1.5rem',
      margin: '0.5rem 0 1.5rem 0'
    },

    // Button container
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    },

    // Edit button styles
    editButton: {
      background: '#209b9f',
      color: '#fffefe',
      padding: '0.6rem 1.3rem',
      borderRadius: '12px',
      textDecoration: 'none',
      fontFamily: 'Inter 24pt, sans-serif',
      fontWeight: '500',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    },

    // Delete form styles
    deleteForm: {
      display: 'inline'
    },

    // Delete button styles
    deleteButton: {
      background: 'linear-gradient(135deg, #dc3545, #c82333)',
      color: '#fffefe',
      padding: '0.6rem 1.3rem',
      borderRadius: '12px',
      fontFamily: 'Inter 24pt, sans-serif',
      fontWeight: '500',
      fontSize: '0.9rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },

    // Add booking button styles
    addBookingButton: {
      display: 'block',
      background: 'linear-gradient(135deg, #209b9f, #1a8589)',
      color: '#fffefe',
      padding: '1.2rem 2rem',
      borderRadius: '15px',
      textDecoration: 'none',
      fontFamily: 'Inter 28pt, sans-serif',
      fontWeight: '600',
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      maxWidth: '300px',
      margin: '3rem auto 0',
      border: 'none',
      cursor: 'pointer'
    }
  }

  // Hover handlers
  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-3px)'
    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)'
  }

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)'
  }

  const handleEditButtonHover = (e) => {
    e.target.style.backgroundColor = '#1a8589'
    e.target.style.transform = 'translateY(-1px)'
  }

  const handleEditButtonLeave = (e) => {
    e.target.style.backgroundColor = '#209b9f'
    e.target.style.transform = 'translateY(0)'
  }

  const handleDeleteButtonHover = (e) => {
    e.target.style.backgroundColor = '#c82333'
    e.target.style.transform = 'translateY(-1px)'
  }

  const handleDeleteButtonLeave = (e) => {
    e.target.style.backgroundColor = '#dc3545'
    e.target.style.transform = 'translateY(0)'
  }

  const handleAddBookingHover = (e) => {
    e.target.style.transform = 'translateY(-2px)'
    e.target.style.boxShadow = '0 8px 25px rgba(32, 155, 159, 0.3)'
  }

  const handleAddBookingLeave = (e) => {
    e.target.style.transform = 'translateY(0)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <Layout token={props.token}>
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
          <h1 style={styles.pageTitle}>My Bookings</h1>

          {props.bookings && props.bookings.length > 0 ? (
            <>
              {props.bookings.map(booking => (
                <div 
                  key={booking._id} 
                  style={styles.bookingCard}
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                >
                  <p style={styles.bookingDate}>
                    <strong>Date:</strong> {new Date(booking.bookingDateTime).toLocaleDateString()}
                  </p>
                  <p style={styles.bookingTime}>
                    <strong>Time:</strong> {new Date(booking.bookingDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  
                  <div style={styles.buttonContainer}>
                    <a 
                      href={`/bookings/${booking._id}/edit?token=${props.token}`}
                      style={styles.editButton}
                      onMouseEnter={handleEditButtonHover}
                      onMouseLeave={handleEditButtonLeave}
                    >
                      Edit Booking
                    </a>
                    <form 
                      action={`/bookings/${booking._id}?_method=DELETE&token=${props.token}`} 
                      method="POST" 
                      style={styles.deleteForm}
                    >
                      <button 
                        type="submit"
                        style={styles.deleteButton}
                        onMouseEnter={handleDeleteButtonHover}
                        onMouseLeave={handleDeleteButtonLeave}
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div style={styles.noBookingsMessage}>
              <p>No bookings found.</p>
            </div>
          )}

          <a 
            href={`/customers?token=${props.token}`}
            style={styles.addBookingButton}
            onMouseEnter={handleAddBookingHover}
            onMouseLeave={handleAddBookingLeave}
          >
            Add a Booking
          </a>
        </div>
      </div>
    </Layout>
  )
}

module.exports = Index