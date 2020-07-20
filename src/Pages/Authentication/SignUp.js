import React from 'react'
import FormBox from "../../Components/form/FormBox";


const signInForm = {
    title : "ثبت نام",
    description : "برای ثبت نام اطلاعات خود را وارد کنید",
    sister : {
        title: "ورود",
        link : "/signin"
    },
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
            children : () => {
                return(<section>
                    قبل از ثبت نام
                    <a href={"#"}> قوانین و مقررات </a>
                    را مطالعه کردم و آنها را می‌پذیرم.
                </section>);
            }
        },
        {
            model : "submit",
            value : "ثبت نام"
        }
    ]
};


export default function SignUp() {
    return (
        <div className={"fullbox bsefid gocenter"}>
            <FormBox {...signInForm}/>
        </div>
    );
}