import React, {PropTypes} from 'react';

import radium from 'radium';
import styles from './styles/app';

const App = (props) => {
  console.log('FIRECHAIN v0.1.0 initialized.'); // eslint-disable-line
  return (
    <div style={styles.content}>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default radium(App);
