import FC from '../../../lib/FC';
import React from 'react';
import styles from './styles';

export default class HomeView extends React.Component {

  /**
   * Initialize a fresh installation of
   * Firechain on the client
   * @param  {Object} e Event
   * @return {[type]}   [description]
   */
  initializeFC = (e) => {
    e.preventDefault();
    const manager = new FC();
    const address = e.target.wallet_address_input.value;
    fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`).then((response) => {
      console.log(response);
      if (response.status == 200) return response.json();
    }).then((response) =>  {
      console.log(response);
    });
  }

  render() {
    return (
      <div style={styles.base}>
        <h1 style={styles.firechain}>Firechain</h1>
        <p style={styles.tagline}>The decentralized banking platform.</p>
        <a style={styles.action_button}>
          Become A Member
          <i className="material-icons" style={{ marginLeft: 5, fontSize: '1.1em' }}>touch_app</i>
        </a>
      </div>
    );
  }
}
