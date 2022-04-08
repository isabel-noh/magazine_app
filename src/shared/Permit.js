import React from "react";
import { Children } from "react";
import { useSelector } from "react-redux";
import { apiKey } from "./firebase";

const Permit = (props) => {
    const is_login = useSelector((state) => state.user.user);  // redux store에 is_login이 true인지 false인지 가져옴
    
    const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(session_key) ? true : false;  // redux store에 세션이 있는지 true인지 false인지 가져옴
    if(is_session && is_login){
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
    
        );
    }
    return null;
    
}

export default Permit;