import React from "react";
import { Route } from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';
import Permit from "./shared/Permit";
import Main from "./Main";
import Login from "./pages/Login";
import Write from "./pages/Write";
import SignUp from "./pages/SignUp";
import Detail from "./Detail";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "./redux/modules/user";
import { loginCheckFB } from "./redux/modules/user";
import { apiKey } from "./shared/firebase";
import { borderRadius } from "@mui/system";
import PostList from "./pages/PostList";

function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);  // redux store에 is_login이 true인지 false인지 가져옴
    const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
   
    const is_session = sessionStorage.getItem(session_key) ? true : false;
    console.log(is_session);
    React.useEffect((is_session) =>{
        dispatch(userActions.loginCheckFB()); // 세션 있으면 user.js에 loginCheckFB 실행
    })
    return (
        <div className="App"
            style={{ maxWidth: "1000px", margin: "20px auto"}}>
            <Header />
            <Route path="/" exact>
                <PostList />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
            <Route path="/signup" exact>
                <SignUp />
            </Route>
            <Route path="/detail/:index">
                <Detail />
            </Route>
            <Route path="/write" exact>
                <Write />
            </Route>
            
            
        </div>
    );
}

export default App;
