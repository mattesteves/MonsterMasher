import React, { Component } from 'react';

class Mash extends Component {
  render() {
    return (
      <div id="main_mash">
        <h2 id="title">Monster Masher</h2>
        {this.props.goo === 0 ? <p>Mash Monsters to make goo!</p> : <br />}

        <h3>Goo: {this.props.goo} gU </h3>
        <button id="mash" onClick={this.props.mash}>
          Mash 'em
        </button>
        <br />
        {this.props.goo >= 20 ? (
          <button id="automash" onClick={this.props.automash}>
            Automash
          </button>
        ) : (
          <br />
        )}
      </div>
    );
  }
}

export default Mash;
