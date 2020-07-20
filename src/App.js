import logo from './logo.svg';
import './Styles/fonts.css';
import './Styles/App.css';
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

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/recovery-password">
                        <PasswordRecovery />
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