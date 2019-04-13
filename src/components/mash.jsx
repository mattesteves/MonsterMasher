import React, { Component } from 'react';

class Mash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoMashCount: 0,
      autoMash: false
    };
  }

  autoMashPress = () => {
    this.setState({ autoMash: true });
    this.props.autoMash('yes');
    this.props.modIncrease('autoGooMod', 0.1);
  };

  gooRound = () => {
    let roundedGoo = Math.floor(this.props.goo * 10) / 10;
    return roundedGoo;
  };
  render() {
    return (
      <div>
        {this.props.goo === 0 ? <p>Mash Monsters to make goo!</p> : <br />}
        <h3>
          Goo: {this.gooRound()} gU{' '}
          {this.props.autoGooMod > 0 ? (
            <span>GPS: {this.props.autoGooMod}</span>
          ) : (
            ''
          )}
        </h3>
        <button id="mash" onClick={this.props.mash}>
          Mash 'em
        </button>{' '}
        &nbsp;
        {this.props.goo >= 20 && this.state.autoMash === false ? (
          <button id="automash" onClick={this.autoMashPress}>
            Automash
          </button>
        ) : (
          ''
        )}
        {this.state.autoMash === true ? (
          <button id="upgrade_automasher">Upgrade Automasher</button>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Mash;
