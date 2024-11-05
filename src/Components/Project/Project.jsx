import React from 'react';

const WebsiteReviewBox = () => {
  const handleClick = () => {
    window.open('https://amaze-ecomm.netlify.app/', '_blank');
  };

  return (
    <div onClick={handleClick} style={styles.reviewBox}>
      <iframe
        src="https://amaze-ecomm.netlify.app/"
        title="Amaze Bazaar Preview"
        style={styles.iframe}
      />
      <div style={styles.overlay}>
        <h3 style={styles.title}>Amaze Bazaar</h3>
        <p style={styles.review}>Check out my e-commerce site!</p>
      </div>
    </div>
  );
};

const styles = {
  reviewBox: {
    position: 'relative',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.3s',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    pointerEvents: 'none', // makes the iframe non-interactive
  },
  overlay: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    margin: '0',
    fontWeight: 'bold',
  },
  review: {
    margin: '5px 0 0 0',
  },
};

export default WebsiteReviewBox;
