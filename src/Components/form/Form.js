import React from 'react'
import TextInput from "./formComponents/TextInput";
import Checkbox from "./formComponents/Checkbox";
import Submit from "./formComponents/Submit";



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    static defaultProps = {
        structure : [
            {
                model : "text",
                type : "email",
            },
            {
                model : "text",
                type : "password",
            },
            {
                model : "checkbox",
                children : "مرا به خاطر بسپار"
            },
            {
                model : "submit",
                value : "مجید"
            }
        ]
    };

    onChange(field, value, validation) {
        // parent class change handler is always called with field name and value
        //this.setState({[field]: value});
        console.log({
            name: field,
            value: value,
            validation : validation
        });
    }

    render() {
        let output = [];
        this.props.structure.forEach(element=>{
            switch (element.model) {
                case "text":
                   output.push(
                       <TextInput type={`${element.type}`}  onChange={this.onChange.bind(this)}
                                  metric = {`${element.metric || false}`}
                       />
                   );
                   break;
                case "checkbox":
                    output.push(
                        <Checkbox>
                            {element.children}
                        </Checkbox>
                    );
                    break;
                case "submit":
                    output.push(
                        <Submit value={`${element.value}`} />
                    );
                    break;
            }
        });
        console.log(output);
        return output;
    }
}


export default Form;