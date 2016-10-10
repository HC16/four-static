import React, {PropTypes} from 'react';
import radium, {StyleRoot} from 'radium';

import styles from './styles/app';

const App = (props) => {
  console.log('FIRECHAIN v0.1.0 initialized.'); // eslint-disable-line
  return (
    <StyleRoot>
      <div style={styles.content}>
        {props.children}
        <ul style={styles.navbar}>
          <li style={styles.navbarItem}>
            <a style={styles.navbarLink} href="#">
              <i className="material-icons" style={styles.navbarItemIcon}>public</i>
              The Network
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a style={styles.navbarLink} href="#">
              <i className="material-icons" style={styles.navbarItemIcon}>account_balance_wallet</i>
              The Wallet
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a style={styles.navbarLink} href="#">
              <i className="material-icons" style={styles.navbarItemIcon}>trending_up</i>
              The Investment
            </a>
          </li>
        </ul>
        <span style={styles.copyright}>&copy; 2016 Four</span>
      </div>
    </StyleRoot>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
