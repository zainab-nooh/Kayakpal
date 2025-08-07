const React = require('react')
const Layout = require('../layouts/Layout')

function Edit(props) {
  // Debug: Let's see what we're getting
  console.log('Edit props:', props);
  
  // Handle flexible data structure safely
  const data = props.data || props;

  const booking = data.booking || {};
  const customer = data.customer || {};
  const token = props.token || data.token || '';
  
  // Debug: Let's see the extracted values
  console.log('Extracted token:', token);
  console.log('props.token:', props.token);
  console.log('data.token:', data.token);

  // Format date and time from booking.bookingDateTime
  const datetime = new Date(booking.bookingDateTime);
  const formattedDate = datetime.toISOString().slice(0, 10); // YYYY-MM-DD
  const formattedTime = datetime.toTimeString().slice(0, 5); // HH:MM (24hr)
  const duration = booking.duration || 60; // Default to 60 minutes

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
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      maxWidth: '700px',
      margin: '0 auto',
      padding: '0 2rem',
      textAlign: 'center'
    },

    // Page title styles
    pageTitle: {
      fontSize: '3.5rem',
      fontWeight: '300',
      color: '#209b9f',
      marginBottom: '2rem',
      lineHeight: '1.2',
      fontFamily: 'Source Serif 4, serif'
    },

    // Customer info styles
    customerInfo: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      marginBottom: '3rem',
      textAlign: 'left'
    },

    customerText: {
      fontSize: '1.2rem',
      color: '#181816',
      fontFamily: 'Inter 24pt, sans-serif',
      margin: 0
    },

    customerName: {
      fontWeight: '600',
      color: '#209b9f'
    },

    // Form styles
    form: {
      background: 'white',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      textAlign: 'left',
      marginBottom: '2rem'
    },

    // Form field container
    fieldContainer: {
      marginBottom: '2.5rem'
    },

    // Label styles
    label: {
      display: 'block',
      fontSize: '1.3rem',
      fontWeight: '500',
      color: '#181816',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '0.8rem'
    },

    // Input styles
    input: {
      width: '100%',
      padding: '1.2rem',
      border: '2px solid #e5e5e5',
      borderRadius: '10px',
      fontSize: '1.1rem',
      fontFamily: 'Inter 24pt, sans-serif',
      backgroundColor: '#fff',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },

    // Select styles
    select: {
      width: '100%',
      padding: '1.2rem',
      border: '2px solid #e5e5e5',
      borderRadius: '10px',
      fontSize: '1.1rem',
      fontFamily: 'Inter 24pt, sans-serif',
      backgroundColor: '#fff',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
      cursor: 'pointer'
    },

    // Submit button styles
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #209b9f, #1a8589)',
      border: 'none',
      borderRadius: '15px',
      color: '#fffefe',
      padding: '1.5rem',
      fontSize: '1.3rem',
      fontWeight: '600',
      fontFamily: 'Inter 28pt, sans-serif',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '2rem'
    },

    // Delete form styles
    deleteForm: {
      background: 'white',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      textAlign: 'center'
    },

    // Delete button styles
    deleteButton: {
      background: 'linear-gradient(135deg, #dc3545, #c82333)',
      color: '#fffefe',
      padding: '1.2rem 2rem',
      borderRadius: '15px',
      fontFamily: 'Inter 24pt, sans-serif',
      fontWeight: '600',
      fontSize: '1.1rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },

    deleteFormTitle: {
      fontSize: '1.2rem',
      color: '#666',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '1.5rem',
      margin: '0 0 1.5rem 0'
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
  const handleSubmitButtonHover = (e) => {
    e.target.style.transform = 'translateY(-2px)'
    e.target.style.boxShadow = '0 8px 25px rgba(32, 155, 159, 0.3)'
  }

  const handleSubmitButtonLeave = (e) => {
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
          <h1 style={styles.pageTitle}>Edit Booking</h1>

          <div style={styles.customerInfo}>
            <p style={styles.customerText}>
              <strong>Customer:</strong> <span style={styles.customerName}>{customer.name || 'No customer data'}</span>
            </p>
          </div>

          <form
            action={`/bookings/${booking._id}?_method=PUT&token=${token}`}
            method="POST"
            style={styles.form}
          >
            
            <div style={styles.fieldContainer}>
              <label style={styles.label}>Date</label>
              <input
                type="date"
                name="date"
                required
                defaultValue={formattedDate}
                style={styles.input}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div style={styles.fieldContainer}>
              <label style={styles.label}>Start Time</label>
              <input
                type="time"
                name="time"
                required
                defaultValue={formattedTime}
                style={styles.input}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div style={styles.fieldContainer}>
              <label style={styles.label}>Duration</label>
              <select 
                name="duration" 
                defaultValue={duration}
                style={styles.select}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              >
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
                <option value="120">2 hours</option>
                <option value="150">2.5 hours</option>
                <option value="180">3 hours</option>
              </select>
            </div>
            
            <input 
              type='submit' 
              value='Update Booking' 
              style={styles.submitButton}
              onMouseEnter={handleSubmitButtonHover}
              onMouseLeave={handleSubmitButtonLeave}
            />
          </form>

          <form
            action={`/bookings/${booking._id}?_method=DELETE&token=${token}`}
            method="POST"
            style={styles.deleteForm}
          >
            <p style={styles.deleteFormTitle}>Or delete this booking permanently:</p>
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
    </Layout>
  )
}

module.exports = Edit