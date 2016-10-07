import React from 'react';
import radium from 'radium';
import styles from './styles/app.js';

class App extends React.Component {
  render() {
    console.log('app loaded');
    return (
      <div style={styles.base}>
        {this.props.children}
      </div>
    );
  }
};

export default radium(App);
