import React from 'react';
import logo from './logo.svg';
import './Styles/fonts.css';
import './Styles/App.css';

import {increamentAction, decreamentAction} from './Actions/counterActions'
import connect from "react-redux/es/connect/connect";
import Submit from "./Components/form/formComponents/Submit";
import TextInput from "./Components/form/formComponents/TextInput";
import Checkbox from "./Components/form/formComponents/Checkbox";
import FormBox from "./Components/form/FormBox";

function App() {
  return (
    <div className="App">
      <div className={"fullbox bsefid gocenter"}>
          <FormBox/>
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