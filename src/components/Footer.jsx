import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px 0', textAlign: 'center', borderTop: '1px solid var(--color-deep-red)' }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} AUCIX DEVELOPERS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
