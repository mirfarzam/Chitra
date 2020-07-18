import React from 'react'

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <label className="checkBoxcontainer">
                <input type="checkbox"/>
                <span className="checkmark"/>
                {this.props.children}
            </label>
        );
    }
}

export default Checkbox;
