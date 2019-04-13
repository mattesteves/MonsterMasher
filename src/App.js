import React, { Component } from 'react';
import Mash from './components/mash';
import Upgrades from './components/upgrades';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goo: 0,
      gooMod: 1,
      autoGooMod: 0
    };
  }
  mash = () => {
    let newGoo = this.state.goo + this.state.gooMod;
    this.setState({ goo: newGoo });
  };

  autoMash = () => {
    let mashInterval;
    mashInterval = setInterval(() => {
      let autoGoo = this.state.goo + this.state.autoGooMod;
      this.setState({ goo: autoGoo });
    }, 1000);
  };

  modIncrease = (mod, num) => {
    let newMod = this.state[mod] + num;
    this.setState({ [mod]: newMod });
  };

  render() {
    return (
      <div id="flex-container">
        <div class="flex_row">
          <div class="spacer" />
          <h2 id="title">Monster Masher</h2>
          <div class="spacer">
            <div class="upgrade_label">UPGRADES</div>
          </div>
        </div>
        <div class="flex_row">
          <div class="spacer" />
          <div id="mash_frame">
            <Mash
              goo={this.state.goo}
              mash={this.mash}
              autoMash={this.autoMash}
              modIncrease={this.modIncrease}
              autoGooMod={this.state.autoGooMod}
            />
          </div>
          <div id="upgrades_frame">
            <Upgrades />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
