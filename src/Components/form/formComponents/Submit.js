import React from "react";


export default class Submit extends React.Component {
    constructor (props) {
        super(props) ;
        this.props = props;
    }

    render() {
        return <input className={`${this.props.active ? "active" : ""}`} type={"submit"} value={`${this.props.value}`}
                      disabled={ this.props.disable === "true" ?
                           true :
                          undefined}
        />;
    }

}
