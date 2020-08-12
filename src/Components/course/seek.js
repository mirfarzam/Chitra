import React from 'react'
import TextInput from "../form/formComponents/TextInput";
import Checkbox from "../form/formComponents/Checkbox";
import Submit from "../form/formComponents/Submit";
import Form from "../form/Form";


class Seek extends React.Component {

    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            currentTimeHandler : 0,
            movingHandler : false
        }
        this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
        this.onMouseUpHandler = this.onMouseUpHandler.bind(this);
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


    render() {
        return (
            <section>
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
            </section>
        );
    }

}


export default Seek;
