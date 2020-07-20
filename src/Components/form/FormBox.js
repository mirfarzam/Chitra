import React from 'react'
import TextInput from "./formComponents/TextInput";
import Checkbox from "./formComponents/Checkbox";
import Submit from "./formComponents/Submit";
import Form from "./Form";


class FormBox extends React.Component {

    constructor(props) {
        super(props);
        this.props = props
    }

    static checkboxLabel() {
        return(<section>
            قبل از ثبت نام
            <a href={"#"}> قوانین و مقررات </a>
            را مطالعه کردم و آنها را می‌پذیرم.
        </section>);
    }

    static defaultProps = {
        title : "ثبت نام",
        description : "برای ثبت نام اطلاعات خود را وارد کنید",
        sister : "ورود",
        alternative : null,
        structure : [
            {
                model : "text",
                type : "username"
            },
            {
                model : "text",
                type : "email"
            },
            {
                model : "text",
                type : "password",
                metric : true
            },
            {
                model : "checkbox",
                children : this.checkboxLabel()
            },
            {
                model : "submit",
                value : "ثبت نام"
            }
        ]
    };

    render() {
        return (
            <div className={"formBox"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-sm-8"}>
                            <h4 className={"title"}>
                                {this.props.title}
                            </h4>
                        </div>
                        {this.props.sister != null &&
                        <div className={"col-sm-4"}>
                            <a className={"sisFormBox"} href={`${this.props.sister.link}`}>
                                {this.props.sister.title}
                                <span></span>
                            </a>
                        </div>
                        }
                    </div>
                    { this.props.description != null &&
                    <div className={"row"}>
                        <div className={"col-sm-12"}>
                            <p className={"description"}>
                                {this.props.description}
                            </p>
                        </div>
                    </div>
                    }
                    <div className={"row rowForm"}>
                        <form>
                            <Form structure={this.props.structure}/>
                        </form>
                    </div>
                    {this.props.alternative != null &&
                    <div className={"row"}>
                        <div className={"col-sm-12 text-center"}>
                            <a className={"altFormBox"} href={`${this.props.alternative.link}`}>
                                {this.props.alternative.title}
                            </a>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }

}


export default FormBox;