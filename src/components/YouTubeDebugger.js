// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {
  state = {
    js: {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: "1080p" } }
    }
  };



  changeRes = () => {
        this.setState(state.js.settings.video.resolution: "720p") 

  }


  render() {
    return (
      <div>
        <button onClick={this.changeRes} className="resolution">
          {this.state.js.settings.video.resolution}
        </button>

        <button className="bitrate">{this.state.js.settings.bitrate}</button>
      </div>
    );
  }
}
