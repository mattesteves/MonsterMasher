import React, { Component } from 'react';
import Mash from './components/mash';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goo: 0,
      gooMod: 1,
      autoGooMod: 1
    };
  }
  mash = () => {
    let newGoo = this.state.goo + this.state.gooMod;
    this.setState({ goo: newGoo });
  };

  autoMash = () => {
    setInterval(() => {
      let autoGoo = this.state.goo + this.state.autoGooMod;
      this.setState({ goo: autoGoo });
    }, 1000);
  };

  autoMashIncrease = num => {
    let newMod = this.state.autoGooMod + num;
    this.setState({ autoGooMod: newMod });
  };
  gooModIncrease = num => {
    let newMod = this.state.gooMod + num;
    this.setState({ gooMod: newMod });
  };

  render() {
    return (
      <Mash goo={this.state.goo} mash={this.mash} automash={this.automash} />
    );
  }
}

export default App;
