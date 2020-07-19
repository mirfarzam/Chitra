import React from 'react'

class TextInput extends React.Component {
    constructor (props) {
        super(props);
        this.props = props;
    }

    onPasswordFieldChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const fieldValidation = fieldValue.length >= 8 ; //&& fieldValue.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);
        if(document.getElementsByClassName("passwordMetric").length > 0) {
            let numBars = fieldValue.length > 6 ? 6 : fieldValue.length;
            for(let i = 0; i < 7; i++) {
                if(i <= numBars && i != 0) {
                    document.getElementById("passwordMetric-"+i).classList.add("valid")
                } else if(i != 0) {
                    document.getElementById("passwordMetric-"+i).classList.remove("valid")
                }
            }
        }
        this.props.onChange(fieldName, fieldValue, fieldValidation)
    }

    render() {
        switch (this.props.type) {
            case "usernameOrEmail":
                return (
                    <section>
                        <label>ایمیل یا نام کاربری</label>
                        <input type={"text"} placeholder={"nima@gmail.com"} className={"text-left placeholder-text-left"}/>
                    </section>
                );
            case "email":
                return (
                    <section>
                        <label>ایمیل</label>
                        <input type={"text"} placeholder={"nima@gmail.com"} className={"text-left placeholder-text-left"}/>
                    </section>
                );
            case "username":
                return (
                    <section>
                        <label>نام کاربری</label>
                        <input type={"text"} placeholder={"nima_hamedi"} className={"text-left placeholder-text-left"}/>
                    </section>
                );
            case "password":
                return (
                    <section metric={`${this.props.metric}`}>
                        <label for="password" >رمز عبور</label>
                        <input name={"password"} id="password" type={"password"} placeholder={"حداقل ۸ کاراکتر"} className={"text-left"}
                               onChange={this.onPasswordFieldChange.bind(this)}
                        />
                        {this.props.metric === "true" &&
                        <div>
                            <div className={"passwordMetric"} id="passwordMetric-1"/>
                            <div className={"passwordMetric"} id="passwordMetric-2"/>
                            <div className={"passwordMetric"} id="passwordMetric-3"/>
                            <div className={"passwordMetric"} id="passwordMetric-4"/>
                            <div className={"passwordMetric"} id="passwordMetric-5"/>
                            <div className={"passwordMetric"} style={{marginLeft:"0"}} id="passwordMetric-6"/>
                        </div>
                            }
                    </section>
                );
        }
    }
}

// const mapDispatchToProps = dispatch => ({
//    addOne : () => dispatch(increamentAction),
//    minusOne : () => dispatch(decreamentAction)
// });


export default TextInput;