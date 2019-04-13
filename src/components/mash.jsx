import React, { Component } from 'react';

class Mash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoMashCount: 0,
      autoMash: false
    };
  }

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
      </div>
    );
  }
}

export default Mash;
