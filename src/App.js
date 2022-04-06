import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Detail from "./Detail";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "./redux/modules/user";
import { loginCheckFB } from "./redux/modules/user";
import { apiKey } from "./shared/firebase";

function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);  // redux store에 is_login이 true인지 false인지 가져옴
    const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
   
    const is_session = sessionStorage.getItem(session_key) ? true : false;
    console.log(is_session);
    React.useEffect((is_session) =>{
        dispatch(userActions.loginCheckFB());
    })
    return (
        <div className="App"
            style={{ maxWidth: "1000px", margin: "20px auto"}}>
            <Header />
            <Route path="/" exact>
                <Main />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Route path="/detail/:index">
                <Detail />
            </Route>
        </div>
    );
}

export default App;
