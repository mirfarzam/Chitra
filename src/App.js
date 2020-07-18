import React from 'react';
import logo from './logo.svg';
import './Styles/fonts.css';
import './Styles/App.css';

import {increamentAction, decreamentAction} from './Actions/counterActions'
import connect from "react-redux/es/connect/connect";
import Submit from "./Components/formComponents/Submit";
import TextInput from "./Components/formComponents/TextInput";
import Checkbox from "./Components/formComponents/Checkbox";

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
                            <TextInput type={"usernameOrEmail"}/>
                            <TextInput type={"password"}/>
                            <Checkbox>
                                مرا به خاطر بسپار
                            </Checkbox>
                            <Submit value={"ورود"}/>
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


// const mapStateToProps = state =>({
//     ...state
// });
//
// const mapDispatchToProps = dispatch => ({
//    addOne : () => dispatch(increamentAction),
//    minusOne : () => dispatch(decreamentAction)
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;