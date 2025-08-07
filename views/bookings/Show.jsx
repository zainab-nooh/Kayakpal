const React = require('react')
const Layout = require('../layouts/Layout')

function Show(data) {
  const { booking, customer, token } = data;
  
  // The kayak should be populated in booking.kayak
  const kayak = booking?.kayak;

  // Format date and time from booking.bookingDateTime
  const datetime = booking?.bookingDateTime ? new Date(booking.bookingDateTime) : null;
  const formattedDate = datetime ? datetime.toISOString().slice(0, 10) : 'N/A'; // YYYY-MM-DD
  const startTime = datetime ? datetime.toTimeString().slice(0, 5) : 'N/A'; // HH:MM (24hr)
  
  // Calculate end time based on duration (assuming duration is in minutes)
  const duration = booking?.duration || 60; // Default to 60 minutes if not set
  const endTime = datetime ? 
    new Date(datetime.getTime() + duration * 60000).toTimeString().slice(0, 5) : 'N/A';
  
  // Calculate total price
  const hourlyRate = kayak?.price || 0;
  const totalPrice = (hourlyRate * (duration / 60)).toFixed(2);

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
      maxWidth: '800px',
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

    // Details card styles
    detailsCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '3rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    },

    // Details grid
    detailsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem 3rem',
      marginBottom: '3rem'
    },

    // Detail item styles
    detailItem: {
      borderBottom: '1px solid #f0f0f0',
      paddingBottom: '1rem'
    },

    detailLabel: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#666',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },

    detailValue: {
      fontSize: '1.3rem',
      fontWeight: '500',
      color: '#181816',
      fontFamily: 'Inter 24pt, sans-serif',
      margin: 0
    },

    // Special styling for total price
    totalPriceItem: {
      gridColumn: '1 / -1',
      borderBottom: 'none',
      backgroundColor: '#f8fffe',
      padding: '2rem',
      borderRadius: '15px',
      textAlign: 'center',
      border: '2px solid #e6f7f7'
    },

    totalPriceLabel: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#209b9f',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },

    totalPriceValue: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#209b9f',
      fontFamily: 'Inter 28pt, sans-serif',
      margin: 0
    },

    // Button container
    buttonContainer: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '3rem'
    },

    // Edit button styles
    editButtonLink: {
      textDecoration: 'none'
    },

    editButton: {
      background: '#209b9f',
      color: '#fffefe',
      padding: '1rem 2rem',
      borderRadius: '12px',
      fontFamily: 'Inter 24pt, sans-serif',
      fontWeight: '600',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },

    // Delete form styles
    deleteForm: {
      display: 'inline'
    },

    // Delete button styles
    deleteButton: {
      background: 'linear-gradient(135deg, #dc3545, #c82333)',
      color: '#fffefe',
      padding: '1rem 2rem',
      borderRadius: '12px',
      fontFamily: 'Inter 24pt, sans-serif',
      fontWeight: '600',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  }

  // Hover handlers
  const handleEditButtonHover = (e) => {
    e.target.style.backgroundColor = '#1a8589'
    e.target.style.transform = 'translateY(-2px)'
    e.target.style.boxShadow = '0 8px 25px rgba(32, 155, 159, 0.3)'
  }

  const handleEditButtonLeave = (e) => {
    e.target.style.backgroundColor = '#209b9f'
    e.target.style.transform = 'translateY(0)'
    e.target.style.boxShadow = 'none'
  }

  const handleDeleteButtonHover = (e) => {
    e.target.style.backgroundColor = '#c82333'
    e.target.style.transform = 'translateY(-2px)'
    e.target.style.boxShadow = '0 8px 25px rgba(220, 53, 69, 0.3)'
  }

  const handleDeleteButtonLeave = (e) => {
    e.target.style.backgroundColor = '#dc3545'
    e.target.style.transform = 'translateY(0)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <Layout token={token}>
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
            <a href={`/customers?token=${token}`} style={styles.navLink}>Login</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Booking Details</h1>

          <div style={styles.detailsCard}>
            <div style={styles.detailsGrid}>
              
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Customer</div>
                <p style={styles.detailValue}>{customer?.name || 'N/A'}</p>
              </div>

              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Date</div>
                <p style={styles.detailValue}>{formattedDate}</p>
              </div>

              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Start Time</div>
                <p style={styles.detailValue}>{startTime}</p>
              </div>

              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>End Time</div>
                <p style={styles.detailValue}>{endTime}</p>
              </div>

              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Duration</div>
                <p style={styles.detailValue}>{duration} minutes</p>
              </div>

              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Kayak</div>
                <p style={styles.detailValue}>{kayak?.title || 'N/A'}</p>
              </div>

              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Hourly Rate</div>
                <p style={styles.detailValue}>${hourlyRate}/hour</p>
              </div>

              <div style={{...styles.detailItem, ...styles.totalPriceItem}}>
                <div style={styles.totalPriceLabel}>Total Price</div>
                <p style={styles.totalPriceValue}>${totalPrice}</p>
              </div>

            </div>

            <div style={styles.buttonContainer}>
              <a 
                href={`/bookings/${booking?._id}/edit?token=${token}`}
                style={styles.editButtonLink}
              >
                <button 
                  style={styles.editButton}
                  onMouseEnter={handleEditButtonHover}
                  onMouseLeave={handleEditButtonLeave}
                >
                  Edit Booking
                </button>
              </a>

              <form
                action={`/bookings/${booking?._id}?_method=DELETE&token=${token}`}
                method="POST"
                style={styles.deleteForm}
              >
                <button 
                  type="submit"
                  style={styles.deleteButton}
                  onMouseEnter={handleDeleteButtonHover}
                  onMouseLeave={handleDeleteButtonLeave}
                >
                  Delete Booking
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