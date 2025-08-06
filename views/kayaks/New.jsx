const React = require('react');
const Layout = require('../layouts/Layout');

function New(props) {
  // Handle the props structure safely
  const data = props.data || props;
  const token = props.token || data.token || '';

  return (
    <Layout token={token}>
      <nav>
        <ul>
          <li>
            <img src="/images/Kayakpal-logo.png" alt="Logo" style={{ height: '40px' }} />
          </li>
          <li>Why Kayakpal</li>
          <li><a href={`/users/Index?token=${token}`}>Login</a></li>
        </ul>
      </nav>

      <h1>Kayak</h1>

      <form action={`/kayaks?token=${token}`} method="POST" encType="multipart/form-data">
        <label>Title:
          <input type="text" name="title" required />
        </label><br />

        <label>Description:
          <textarea name="description" required></textarea>
        </label><br />

        <label>Price (per hour):
          <input type="number" name="price" step="0.01" required />
        </label><br />

        <label>Photo:
          <input type="file" name="photo" accept="image/*" />
        </label><br />

        <button type="submit">Create Kayak Profile</button>
      </form>

    </Layout>
  );
}

module.exports = New;