// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleMouseClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render () {
    return(
      <button type="button" onClick={this.handleMouseClick}>{this.state.timesClicked}</button>
    )
  }

}
