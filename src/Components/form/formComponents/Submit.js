import React from "react";
import {decreamentAction, increamentAction} from "../../../Actions/counterActions";
import connect from "react-redux/es/connect/connect";


class Submit extends React.Component {
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


function mapStateToProps(state, ownProps) {
    return  {
       active : state.form.submit
    }
}

// const mapDispatchToProps = dispatch => ({
//     addOne : () => dispatch(increamentAction),
//     minusOne : () => dispatch(decreamentAction)
// });

export default connect(
    mapStateToProps,
    null
)(Submit);
