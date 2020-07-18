import React from 'react';
import logo from './logo.svg';
import './Styles/fonts.css';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <div className={"fullbox bsefid gocenter"}>
        <div className={"formBox"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-sm-6"}>
                        <h4 className={"title"}>ورود</h4>
                    </div>
                    <div className={"col-sm-6"}>
                        <a className={"sisFormBox"} href={"#"}>
                           ثبت‌نام
                            <span></span>
                        </a>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-sm-12"}>
                        <p className={"description"}>
                            برای ورود به پنل اطلاعات خود را وارد کنید
                        </p>
                    </div>
                </div>
                <div className={"row"}>
                    <form>
                        <div className={"col-sm-12"}>
                            <label>ایمیل یا نام کاربری</label>
                            <input type={"text"} placeholder={"nima@gmail.com"} className={"text-left placeholder-text-left"}/>
                            <label>رمز عبور</label>
                            <input type={"password"} placeholder={"حداقل ۸ کاراکتر"} className={"text-left"}/>
                            <label className="checkBoxcontainer">
                                <input type="checkbox"/>
                                <span className="checkmark"/>
                                مرا به خاطر بسپار
                            </label>
                            <input type={"submit"} value={"ورود"}/>
                        </div>
                    </form>
                </div>
                <div className={"row"}>
                    <div className={"col-sm-12 text-center"}>
                        <a className={"altFormBox"} href={"#"}>رمز عبورم را فراموش کردم.</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
