import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import { history } from "../redux/configStore";
import Button from '@mui/material/Button';
import {getCookie, deleteCookie} from '../shared/Cookie'
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "../shared/firebase";
import { logoutFB } from "../redux/modules/user";

const Header = (props) => {
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);  // redux store에 is_login이 true인지 false인지 가져옴
    
    const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(session_key) ? true : false;
    console.log(is_session);

    // React.useEffect(() => {
    //     let cookie = getCookie("user_id");
    //     if(cookie){  // 해당 이름의 쿠키가 있으면 true 
    //         setIsLogin(true);
    //     } else {  // 없으면 false 
    //         setIsLogin(false);
    //     }
    // });

    if(is_login && is_session){
        return(
            <React.Fragment>
                <Button onClick={() => history.push("/")} color="secondary" style={{fontSize: "20px"}}>Share your Story</Button>
                <div style={{display: "inline-flex", float: "right"}}>
                    <Button onClick={() => history.push("")} 
                             style={{marginRight: "10px"}} variant="contained" color="secondary">Alert</Button>
                    <Button onClick= {() => {dispatch(userActions.logoutFB())} }
                            variant="contained" color="secondary">Log Out</Button>
                </div>
            </React.Fragment>
        )
    } else {
        return(
            <React.Fragment>
                <HomeIcon onClick={() => history.push("/")} color="secondary" />
                <div style={{display: "inline-flex", float: "right"}}>
                    <Button onClick={() => history.push("/login")} 
                            variant="contained" color="secondary" style={{marginRight: "10px"}}>Log In</Button>
                    <Button onClick={() => history.push("/signup")} 
                            variant="contained" color="secondary">Sign Up</Button>
                </div>
            </React.Fragment>
        )
    }
}
export default Header;