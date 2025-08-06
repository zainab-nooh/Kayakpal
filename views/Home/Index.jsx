const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
  // Font definitions and global styles, including responsive features grid
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
      }

      @media (max-width: 900px) {
        .features-grid {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
        }
      }
    </style>
  `

  // Styles object with your colors and fonts
  const styles = {
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
      listStyle: 'none',
      margin: '0 auto'
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

    heroSection: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: '300',
      color: '#181816',
      marginBottom: '1rem',
      lineHeight: '1.2',
      fontFamily: 'Source Serif 4, serif'
    },
    highlight: {
      color: '#209b9f',
      fontWeight: '400'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      color: '#666',
      marginBottom: '2rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily: 'Inter 24pt, sans-serif'
    },
    ctaButtonContainer: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #209b9f, #1a8589)',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      padding: 0
    },
    ctaButtonLink: {
      color: '#fffefe',
      padding: '1rem 3rem',
      fontSize: '1.2rem',
      textDecoration: 'none',
      display: 'inline-block',
      fontWeight: '600',
      fontFamily: 'Inter 28pt, sans-serif'
    },

    activitiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '4rem'
    },
    activityCard: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    activityImage: {
      height: '200px',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    activityContent: {
      padding: '1.5rem',
      background: 'linear-gradient(135deg, rgba(32, 155, 159, 0.9), rgba(26, 133, 137, 0.9))',
      color: 'white'
    },
    activityTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      fontFamily: 'Source Serif 4, serif'
    },
    activityProvider: {
      fontSize: '1rem',
      opacity: '0.9',
      marginBottom: '1rem',
      fontFamily: 'Inter 24pt, sans-serif'
    },
    activityDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    price: {
      fontWeight: '600',
      fontFamily: 'Inter 24pt, sans-serif'
    },
    location: {
      opacity: '0.9',
      fontFamily: 'Inter 24pt, sans-serif'
    },

    featuresSection: {
      padding: '4rem 0',
      margin: '4rem 0'
      // Removed background, borderRadius, boxShadow
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', // fixed 4 columns on large screens
      gap: '3rem'
    },
    featureItem: {
      textAlign: 'center',
      padding: '2rem'
    },
    featureIcon: {
      width: '80px',
      height: '80px',
      margin: '0 auto 1.5rem',
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
      // removed background & color since using images now
    },
    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#181816',
      marginBottom: '0.5rem',
      fontFamily: 'Source Serif 4, serif'
    },
    featureSubtitle: {
      color: '#666',
      fontSize: '1rem',
      lineHeight: '1.4',
      fontFamily: 'Inter 24pt, sans-serif'
    }
  }

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: fontStyles }} />

      {/* Navigation */}
      <nav style={styles.nav}>
        <ul style={styles.navUl}>
          <li style={styles.navLi}>
            <img src="../../images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
          </li>
          <li style={{ ...styles.navLi, marginLeft: 'auto', marginRight: '2rem' }}>
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

          {/* Hero Section */}
          <section style={styles.heroSection}>
            <h1 style={styles.heroTitle}>
              What will you <span style={styles.highlight}>do today?</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Remember every moment deserves personalization, scheduling and booking all in one place
            </p>
          </section>

          {/* CTA Button */}
          <div style={styles.ctaButtonContainer}>
            <button
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 8px 25px rgba(32, 155, 159, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <a href='/users/Index' style={styles.ctaButtonLink}>Book Now!</a>
            </button>
          </div>

          {/* Activities Section */}
          <section>
            <div style={styles.activitiesGrid}>

              {/* Solo Kayak Card 1 */}
              <div
                style={styles.activityCard}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)'
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{
                  ...styles.activityImage,
                  backgroundImage: 'url("https://www.seakayakpaddler.co.uk/images/PH_intro16.jpg")'
                }}></div>
                <div style={styles.activityContent}>
                  <h3 style={styles.activityTitle}>Solo-Kayak</h3>
                  <p style={styles.activityProvider}>The Kayak Club</p>
                  <div style={styles.activityDetails}>
                    <div style={styles.price}>$5 BD / Per Hour</div>
                    <div style={styles.location}>📍 Bahrain Bay</div>
                  </div>
                </div>
              </div>

              {/* Combo Kayak Card */}
              <div
                style={styles.activityCard}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)'
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{
                  ...styles.activityImage,
                  backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEBOAE37ZQmOh0Mf0PPHBFdfu6cbD4GR0Zg&s&auto=format&fit=crop&w=1000&q=80")'
                }}></div>
                <div style={styles.activityContent}>
                  <h3 style={styles.activityTitle}>Combo-Kayak</h3>
                  <p style={styles.activityProvider}>The Kayak Club</p>
                  <div style={styles.activityDetails}>
                    <div style={styles.price}>$7 BD / Per Hour</div>
                    <div style={styles.location}>📍 Bahrain Bay</div>
                  </div>
                </div>
              </div>

              {/* Solo Kayak Card 2 */}
              <div
                style={styles.activityCard}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)'
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{
                  ...styles.activityImage,
                  backgroundImage: 'url("https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_777,q_65,w_639,x_800,y_592/v1/clients/portaransastx/TkD44eMj_56416570-9f33-48b8-980e-ba3731d19934.jpg")'
                }}></div>
                <div style={styles.activityContent}>
                  <h3 style={styles.activityTitle}>Solo-Kayak</h3>
                  <p style={styles.activityProvider}>The Kayak Club</p>
                  <div style={styles.activityDetails}>
                    <div style={styles.price}>$6 BD / Per Hour</div>
                    <div style={styles.location}>📍 Bahrain Bay</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Features Section */}
          <section style={styles.featuresSection}>
            <div style={styles.container}>
              <div style={styles.featuresGrid} className="features-grid">

                <div style={styles.featureItem}>
                  <div style={styles.featureIcon}>
                    <img
                      src="/images/1.jpeg"
                      alt="Book Icon"
                      style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                    />
                  </div>
                  <h3 style={styles.featureTitle}>Book</h3>
                  <p style={styles.featureSubtitle}>Anywhere</p>
                </div>

                <div style={styles.featureItem}>
                  <div style={styles.featureIcon}>
                    <img
                      src="/images/2.jpeg"
                      alt="Goal Icon"
                      style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                    />
                  </div>
                  <h3 style={styles.featureTitle}>Choose</h3>
                  <p style={styles.featureSubtitle}>Everything</p>
                </div>

                <div style={styles.featureItem}>
                  <div style={styles.featureIcon}>
                    <img
                      src="/images/3.jpeg"
                      alt="True Icon"
                      style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                    />
                  </div>
                  <h3 style={styles.featureTitle}>Turn Plans</h3>
                  <p style={styles.featureSubtitle}>into Booked</p>
                </div>

                <div style={styles.featureItem}>
                  <div style={styles.featureIcon}>
                    <img
                      src="/images/4.jpeg"
                      alt="Search Icon"
                      style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                    />
                  </div>
                  <h3 style={styles.featureTitle}>Find things</h3>
                  <p style={styles.featureSubtitle}>Fast</p>
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  )
}

module.exports = Index
