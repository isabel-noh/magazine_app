//로그인
import React from "react";
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Input } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { loginFB } from "../redux/modules/user"
import { emailCheck } from "../shared/common";

const Login = (props) => {
    const dispatch = useDispatch();
    
    const [id, setId] = React.useState();
    const [pwd, setPwd] = React.useState();

    const loginID = (e) => {
        setId(e.target.value);
    }
    const loginPWD = (e) => {
        setPwd(e.target.value);
    }

    const logIn = () => {
        if(id === '' || pwd === ''){
            window.alert("아이디 혹은 비밀번호를 입력해주세요.");
            return;
        }
        if(!emailCheck(id)){
            window.alert("이메일 형식에 맞지 않습니다. 확인해주세요.");
            return;
        }
        dispatch(userActions.loginFB(id, pwd));
    }

    return (
        <Wrap>
            <h1>Log In</h1>
            <div>
                <div>
                    <label htmlFor="id">ID</label><br />
                    <Input id="id" value={id} _onChange={loginID} type="text" placeholder="Please enter your ID" /><br />
                    <label htmlFor="password">Password</label><br />
                    <Input id="password" value={pwd} _onChange={loginPWD} type="password" placeholder="Please enter your Password"/><br />
                </div>
                <br />

                <div>
                    <Button style={{width: "300px"}}  
                            variant="contained" color="secondary"
                            onClick={() => {logIn()}}>Log In</Button>
                </div>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 300px;
    margin: 100px auto;
`

export default Login;