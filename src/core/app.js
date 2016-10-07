import React from 'react';
import radium from 'radium';
import styles from './styles/app.js';

class App extends React.Component {
  render() {
    console.log('app loaded');
    return (
      <div style={styles.base}>
        <img
          src="https://dl.dropboxusercontent.com/s/4pd0zkg58bz88jy/firechain-logo3.png"
          style={styles.logo_img}
        />
      </div>
    );
  }
};

export default radium(App);
