import React from 'react'
import FormBox from "../../Components/form/FormBox";


const passwordRecoveryForm = {
    title : "بازیابی رمز عبور",
    description : "ایمیل یا نام کاربری خود را برای بازیابی رمز عبور وارد کنید",
    sister : {
        title: "بازگشت",
        link : "/signin"
    },
    alternative :  null,
    structure : [
        {
            model : "text",
            type : "usernameOrEmail"
        },
        {
            model : "submit",
            value : "بازیابی"
        }
    ]
};


export default function SignIn() {
    return (
        <div className={"fullbox bsefid gocenter"}>
            <FormBox {...passwordRecoveryForm}/>
        </div>
    );
}