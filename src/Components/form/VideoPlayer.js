import React from 'react'
import TextInput from "./formComponents/TextInput";
import Checkbox from "./formComponents/Checkbox";
import Submit from "./formComponents/Submit";
import Form from "./Form";


class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props
    }


    render() {
        return (
            <section>
                <video  className={"courseVideo"} controls preload poster="assets/poster.jpg">
                    <source src="/Chitra/videos/overview.mp4" type="video/mp4" />
                    </video>
                    {/*<div id="videoControls">*/}
                    {/*    <button id="play" title="Play"> &#x25BA; </button>*/}

                    {/*    <div id="progress">*/}
                    {/*        <div id="progress_box">*/}
                    {/*            <span id="play_progress"></span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <button id="fullScreen" title="FullScreen Toggle">  FS </button>*/}
                    {/*    <a href="http://www.tutsplus.com"><img src="http://tutsplus.s3.amazonaws.com/tutspremium/web-development/103_html5VideoPlayer/images/tuts_logo.png" alt="Tuts" id="video_tutsLogo" /></a>*/}
                    {/*</div>*/}
            </section>
        );
    }

}


export default VideoPlayer;
