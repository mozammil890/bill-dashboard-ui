import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <h4 style={styles.heading}>Contact Numbers</h4>
        <p style={styles.text}>📞 6200725949</p>
        <p style={styles.text}>📞 8789211836</p>
      </div>

      <div style={styles.section}>
        <h4 style={styles.heading}>Address</h4>
        <p style={styles.text}>
          Musaboni Market, Area No-3<br />
          Musaboni Mines, Jharkhand
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// Inline styles
const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    marginTop: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginBottom: '16px',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#f0f0f0',
  },
  text: {
    margin: '4px 0',
    fontSize: '16px',
  },
};