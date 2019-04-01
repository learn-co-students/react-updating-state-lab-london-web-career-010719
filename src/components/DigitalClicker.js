import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    };
  };

  handleOnClick = (e) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  };

  render() {
    return (
      <button
        onClick={this.handleOnClick}>
        {this.state.timesClicked}
      </button>
    );
  };
};
