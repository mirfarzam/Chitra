import logo from './logo.svg';
import './Styles/fonts.css';
import './Styles/App.css';
import './Styles/Course.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignUp from "./Pages/Authentication/SignUp";
import SignIn from "./Pages/Authentication/SignIn";
import PasswordRecovery from "./Pages/Authentication/PasswordRecovery";
import Overview from './Pages/Course/Overview'

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route exact path="/Chitra/signup">
                        <SignUp />
                    </Route>
                    <Route path="/Chitra/signin">
                        <SignIn />
                    </Route>
                    <Route path="/Chitra/recovery-password">
                        <PasswordRecovery />
                    </Route>
                    <Route path="/Chitra">
                        <Overview />
                    </Route>
                </Switch>
            </div>
        </Router>
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
