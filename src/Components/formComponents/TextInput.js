import React from 'react'

class TextInput extends React.Component {
    constructor (props) {
        super(props);
        this.props = props;
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
                    <section>
                        <label>رمز عبور</label>
                        <input type={"password"} placeholder={"حداقل ۸ کاراکتر"} className={"text-left"}/>
                    </section>
                );
        }
    }
}


export default TextInput;