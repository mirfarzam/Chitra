import React from 'react'
import TextInput from "../form/formComponents/TextInput";
import Checkbox from "../form/formComponents/Checkbox";
import Submit from "../form/formComponents/Submit";
import Form from "../form/Form";


class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            finished : false,
            progress : 0,
            duration : 0,
            currentTime : 0,
            play : true,
            handlerPlace : 4,
            seekbarWidth : 0,
            currentTimeHandler : 0,
            movingHandler : false
        }
        this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
        this.onMouseUpHandler = this.onMouseUpHandler.bind(this);
    }

// Toggle full-screen mode
    expandVideo() {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
            // Version for Firefox
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
            // Version for Chrome and Safari
            videoElement.webkitRequestFullscreen();
        }
    }

// Move the video backward for 5 seconds
    moveBackward() {
        videoElement.currentTime -= 5;
    }

// Move the video forward for 5 seconds
    moveForward() {
        videoElement.currentTime += 5;
    }

// Mute the video
    muteVideo() {
        if (videoElement.muted) {
            videoElement.muted = false;

            btnMuteIcon.classList.remove('fa-volume-up');
            btnMuteIcon.classList.add('fa-volume-off');
        } else {
            videoElement.muted = true;

            btnMuteIcon.classList.remove('fa-volume-off');
            btnMuteIcon.classList.add('fa-volume-up');
        }
    }

// Play / Pause the video
    playPauseVideo(event) {
        if (event.target.paused) {
            event.target.play();
            this.setState({play : true})
            btnPlayIcon.classList.remove('fa-play');
            btnPlayIcon.classList.add('fa-pause');
        } else {
            videoElement.pause();

            btnPlayIcon.classList.remove('fa-pause');
            btnPlayIcon.classList.add('fa-play');
        }
    }

// Restart the video
    restartVideo() {
        videoElement.currentTime = 0;
        btnPlay.removeAttribute('hidden');
        btnReset.setAttribute('hidden', 'true');
    }

// Stop the video
    stopVideo() {
        videoElement.pause();
        videoElement.currentTime = 0;
        btnPlayIcon.classList.remove('fa-pause');
        btnPlayIcon.classList.add('fa-play');
    }

// Update progress bar as the video plays
    updateProgress(event) {
        this.setState({currentTime : event.target.currentTime});
        let value = (100 / this.state.duration) * event.target.currentTime;
        this.setState({
            currentTimeHandler:value
        })
    }

    resetVideo() {
        this.setState({
            finished : true
        });
    }

    loadMetaData(event) {
        this.setState({
            duration : event.target.duration,
        });
        event.target.play()
    }

    onMouseDownHandler() {
        this.setState({
            movingHandler : true
        });
    }

    onMouseMoveHandler(event) {
        if(this.state.movingHandler) {
            this.changeTimeLineCurrentTime(event.pageX)
        }
    }

    onMouseUpHandler() {
        this.setState({
            movingHandler : false
        });
    }

    handlerTimelineBaseClick(event) {
        this.changeTimeLineCurrentTime(event.pageX);
    }

    changeTimeLineCurrentTime(currentX) {
        let width = document.getElementById("timeline-base").offsetWidth;
        let startingPoint = document.getElementById("timeline-base").getBoundingClientRect().left;
        let sizeRaw = currentX - startingPoint;
        let progress = (sizeRaw/width)*100;
        this.setState({
            currentTimeHandler : progress
        })
    }

// Event listeners
//     btnBackward.addEventListener('click', moveBackward, false);
//     btnExpand.addEventListener('click', expandVideo, false);
//     btnMute.addEventListener('click', muteVideo, false);
//     btnPlay.addEventListener('click', playPauseVideo, false);
//     btnForward.addEventListener('click', moveForward, false);
//     btnReset.addEventListener('click', restartVideo, false);
//     btnStop.addEventListener('click', stopVideo, false);
//     videoElement.addEventListener('ended', () => {
//     btnPlay.setAttribute('hidden', 'true');
//     btnReset.removeAttribute('hidden');
// }, false);
// videoElement.addEventListener('timeupdate', updateProgress, false);


    render() {
        return (
            <section>
                <div className="video-wrapper">
                    <video className="video-element"
                            preload="metadata"
                            onEnded={() => this.resetVideo()}
                            onLoadedMetadata={event => this.loadMetaData(event)}
                            onTimeUpdate={event => this.updateProgress(event)}
                            onMouseMove={event => this.onMouseMoveHandler(event)}>
                        <source src="/Chitra/videos/overview.mp4" type="video/mp4"/>
                    </video>

                    <div className="video-controls"
                         onMouseMove={event => this.onMouseMoveHandler(event)}>
                        <div className={"timeline-wrapper"}>
                            <div className={"timeline-base"}
                                 id={"timeline-base"}
                                 onMouseMove={event => this.onMouseMoveHandler(event)}
                                 onClick={event => this.handlerTimelineBaseClick(event)}/>
                            <div className={"timeline-buffer"}
                                 onMouseMove={event => this.onMouseMoveHandler(event)}
                                 onClick={event => this.handlerTimelineBaseClick(event)}/>
                            <div className={"timeline-current"}
                                 onMouseMove={event => this.onMouseMoveHandler(event)}
                                 onClick={event => this.handlerTimelineBaseClick(event)}
                                 style={{width : `${this.state.currentTimeHandler}%`}}/>
                            <div className={"timeline-handler"}
                                 id={"timeline-handler"}
                                 onMouseDown={this.onMouseDownHandler}
                                 onMouseUp={this.onMouseUpHandler}
                                 style={{left : `${this.state.currentTimeHandler}%`}}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}


export default VideoPlayer;
