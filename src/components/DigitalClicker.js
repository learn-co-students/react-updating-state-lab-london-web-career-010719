// Code DigitalClicker Component Here

import React, { Component } from "react";

export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  };

  increaseClick = () => {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
  };

  render() {
    return (
      <button onClick={this.increaseClick}>{this.state.timesClicked}</button>
    );
  }
}
