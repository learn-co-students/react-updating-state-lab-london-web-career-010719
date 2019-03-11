// Code DigitalClicker Component Here

import React, { Component } from 'react';

export default class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state={timesClicked:0}
  }

  buttonClicked = () => {
    this.setState({
      timesClicked:this.state.timesClicked+1
    })
  }

  render() {
    return (
      <button onClick={this.buttonClicked}>{this.state.timesClicked}</button>
    )
  }
}
