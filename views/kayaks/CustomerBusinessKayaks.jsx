const React = require('react');
const Layout = require('../layouts/Layout');

function CustomerBusinessKayaks(props) {
  const kayaks = props.kayaks;

  return (
    <Layout>
      <nav>
        <ul>
          <li>
            <a href="/Home" style={{ textDecoration: 'none' }}>
              <img src="../../images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px', cursor: 'pointer' }} />
            </a>
          </li>
          <li><a href="/kayaks">← Back to All Kayaks</a></li>
          <li><a href='/users/Index'>Login</a></li>
        </ul>
      </nav>

      <h1>Kayaks by This Business</h1>

      {kayaks.length === 0 ? (
        <p>This business has not added any kayaks yet.</p>
      ) : (
        <ul>
          {kayaks.map((kayak) => (
            <li key={kayak._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <h2>{kayak.title}</h2>
              <p><strong>Description:</strong> {kayak.description}</p>
              <p><strong>Price/hour:</strong> ${kayak.price}</p>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

module.exports = CustomerBusinessKayaks;
