// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
  state = { 
      timesClicked: 0 
    };

  handleOnClick = () =>{
      const newCount = this.state.timesClicked +1;
      this.setState({timesClicked :newCount});

  }
  render() {
    return (<button 
    onClick={this.handleOnClick}
    >
    {this.state.timesClicked}
    </button>
    )
  }
}
 
export default DigitalClicker;
