import React from "react";
import {getCookie, deleteCookie} from '../shared/Cookie'
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';


const Header = (props) => {
    const history = useHistory();
    const [is_login, setIsLogin] = React.useState(false);

    React.useEffect(() => {
        let cookie = getCookie("user_id");
        console.log(cookie);
        if(cookie){
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    });

    if(is_login){
        return(
            <div className="Header">
                <HomeIcon onClick={() => history.push("/")} color="secondary" />
                <div style={{display: "inline-flex", float: "right"}}>
                    <Button onClick={() => history.push("")} variant="contained" color="secondary">My Page</Button>
                    <Button onClick={() => {deleteCookie("user_id")}} 
                            variant="contained" color="secondary" style={{marginRight: "10px"}}>Log Out</Button>
                </div>
            </div>
        )
    } else {
        return(
            <div className="Header">
                <HomeIcon onClick={() => history.push("/")} color="secondary" />
                <div style={{display: "inline-flex", float: "right"}}>
                    <Button onClick={() => history.push("/login")} variant="contained" color="secondary" style={{marginRight: "10px"}}>Log In</Button>
                    <Button onClick={() => history.push("/signup")} variant="contained" color="secondary">Sign Up</Button>
                </div>
            </div>
        )
    }
}
export default Header;