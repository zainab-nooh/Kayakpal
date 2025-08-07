const React = require('react')
const Layout = require('../layouts/Layout')

function Edit(props) {
  const { name, _id, description, location } = props.business
  
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
      fontSize: '3rem',
      fontWeight: '300',
      color: '#209b9f',
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

    // Textarea styles (for description)
    textarea: {
      width: '100%',
      padding: '1.2rem',
      border: '2px solid #e5e5e5',
      borderRadius: '10px',
      fontSize: '1.1rem',
      fontFamily: 'Inter 24pt, sans-serif',
      backgroundColor: '#fff',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
      minHeight: '120px',
      resize: 'vertical'
    },

    // File input container
    fileInputContainer: {
      border: '2px dashed #e5e5e5',
      borderRadius: '10px',
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#fafafa',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },

    fileInputText: {
      fontSize: '1rem',
      color: '#666',
      fontFamily: 'Inter 24pt, sans-serif',
      marginBottom: '0.5rem'
    },

    fileInput: {
      display: 'none'
    },

    fileInputLabel: {
      color: '#209b9f',
      fontWeight: '500',
      cursor: 'pointer',
      textDecoration: 'underline'
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

    // Bottom back link
    bottomBackLink: {
      color: '#209b9f',
      textDecoration: 'none',
      fontSize: '1rem',
      fontFamily: 'Inter 24pt, sans-serif',
      display: 'inline-block',
      transition: 'color 0.3s ease',
      textAlign: 'center'
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

  // File input handlers
  const handleFileInputHover = (e) => {
    e.currentTarget.style.borderColor = '#209b9f'
    e.currentTarget.style.backgroundColor = '#f0f9f9'
  }

  const handleFileInputLeave = (e) => {
    e.currentTarget.style.borderColor = '#e5e5e5'
    e.currentTarget.style.backgroundColor = '#fafafa'
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
          <h1 style={styles.pageTitle}>Edit {name}</h1>
          
          <a href={`/business/${_id}?token=${props.token}`} style={styles.backLink}>
            ← Back to {name}
          </a>
          
          <form action={`/business/${_id}?_method=PUT&token=${props.token}`} method="POST" style={styles.form}>
            
            <div style={styles.fieldContainer}>
              <label style={styles.label}>Business Name</label>
              <input 
                type='text' 
                name='name' 
                placeholder='Enter your business name' 
                required
                defaultValue={name}
                style={styles.input}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div style={styles.fieldContainer}>
              <label style={styles.label}>Description</label>
              <textarea 
                name='description' 
                placeholder='Describe your business, services, and what makes you special...' 
                required
                defaultValue={description}
                style={styles.textarea}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div style={styles.fieldContainer}>
              <label style={styles.label}>Location</label>
              <input 
                type='text' 
                name='location' 
                placeholder='Enter your business address or area' 
                required
                defaultValue={location}
                style={styles.input}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div style={styles.fieldContainer}>
              <label style={styles.label}>Update Business Image</label>
              <div 
                style={styles.fileInputContainer}
                onMouseEnter={handleFileInputHover}
                onMouseLeave={handleFileInputLeave}
              >
                <div style={styles.fileInputText}>Upload a new photo of your business (optional)</div>
                <label style={styles.fileInputLabel}>
                  Choose File
                  <input 
                    type="file" 
                    name="businessImage" 
                    accept="image/*"
                    style={styles.fileInput}
                  />
                </label>
              </div>
            </div>

            <input 
              type='submit' 
              value={`Update ${name}`} 
              style={styles.submitButton}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

module.exports = Edit