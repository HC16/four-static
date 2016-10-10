import React from 'react';
import styles from './styles';

export default class HomeView extends React.Component {

  render() {
    return (
      <div style={styles.base}>
        <h1 style={styles.firechain}>4</h1>
        <span style={styles.four}>Four</span>
        <p style={styles.tagline}>The secure, global digital currency banking network.</p>
        <a style={styles.action_button}>
          Become A Member
          <i className="material-icons" style={{ marginLeft: 5, fontSize: '1.1em' }}>lock</i>
        </a>
      </div>
    );
  }
}
