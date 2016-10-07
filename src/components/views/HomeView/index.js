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
    console.log(e.target.wallet_address_input.value);
  }

  render() {
    return (
      <div>
        Enter a wallet address to get started:
        <form
          onSubmit={this.initializeFC}
        >
          <input
            style={styles.init_input}
            type="text"
            name="wallet_address_input"
          />
          <button type="submit">Track</button>
        </form>
      </div>
    );
  }
}
