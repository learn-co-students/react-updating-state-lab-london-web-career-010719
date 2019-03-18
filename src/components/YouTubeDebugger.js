// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

state = {
   errors: [],
   user: null,
   settings: {
     bitrate: 8,
     video: {
       resolution: '1080p'
     }
  }
}

alterBitrate = () =>{
this.setState({
  settings: {
    ...this.state.settings,
    bitrate: 12
  }
})
}

alterResolution = () => {
  this.setState({
    settings: {
      ...this.state.settings,
      video: {
        ...this.state.settings.video,
        resolution: "720p"
    }

    }
  })
}

render() {
  return(
  <div>
    <button className="bitrate" onClick={this.alterBitrate}>Bitrate</button>
    <button className="resolution" onClick={this.alterResolution}>Resolution</button>
  </div>

  )
}

}

export default YouTubeDebugger
