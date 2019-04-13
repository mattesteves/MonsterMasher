import React, { Component } from 'react';

class Upgrades extends Component {
  constructor(props) {
    super(props);
    this.state = { autoMash: false };
  }
  autoMashPress = () => {
    this.setState({ autoMash: true });
    this.props.autoMash();
    this.props.modIncrease('autoGooMod', 0.1);
  };

  render() {
    return (
      <div>
        {this.props.goo >= 20 && this.state.autoMash === false ? (
          <button id="automash" onClick={this.autoMashPress}>
            Automash
          </button>
        ) : (
          ''
        )}
        <div id="upgrades_container">
          {this.props.goo > 20 ? (
            <button id="upgrade_automasher">Upgrade Automasher</button>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default Upgrades;
