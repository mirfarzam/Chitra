import React from 'react'
import FormBox from "../../Components/form/FormBox";


const signUpForm = {
    title : "ورود",
    description : "برای ورود اطلاعات خود را وارد کنید",
    sister : {
        title: "ثبت نام",
        link : "/signup"
    },
    alternative :  {
      title: "رمز عبور خود را فراموش کردم",
      link : "/recovery-password"
    },
    structure : [
        {
            model : "text",
            type : "usernameOrEmail"
        },
        {
            model : "text",
            type : "password",
            metric : false
        },
        {
            model : "checkbox",
            children : () => {
                return(<section>
                  مرا به خاطر بسپار
                </section>);
            }
        },
        {
            model : "submit",
            value : "ورود"
        }
    ]
};


export default function SignIn() {
    return (
        <div className={"fullbox bsefid gocenter"}>
            <FormBox {...signUpForm}/>
        </div>
    );
}