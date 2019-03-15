// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
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
    handleOnclick =()=>{
        const newClick = this.state.settings.bitrate +4
        this.setState({settings :{
            ...this.state.settings,
        bitrate : newClick}})
    }
    handleResolution = () => {
        const newClickResolution = this.state.settings.video['resolution'] ='720p';
        this.setState({
            settings: {
                ...this.state.settings,
                video: { resolution: newClickResolution}
                
            }
        })
    }
    render() { 
        return (
           < React.Fragment>
        <div><button 
        className="bitrate"
        onClick={this.handleOnclick} 
        >
        {this.state.settings.bitrate}

        </button> 
        </div>
        <div>
            <button
                className="resolution"
                onClick={this.handleResolution}
            >
                {this.state.settings.video.resolution}

            </button> 
        </div>
        </React.Fragment>)
    }
}
 
export default YouTubeDebugger;
