//회원가입
import React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { Input } from "../elements";
import { signupFB } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const SignUp = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [pwd_chk, setPwdChk] = React.useState("");
    const [user_name, setUserName] = React.useState("");

    const check = () => {
        if(!id || !pwd){
            window.alert('아이디 혹은 비밀번호를 입력하세요');
            return;
        }
        if(pwd !== pwd_chk){
            window. alert('비밀번호가 동일하지 않습니다. 확인해주세요');
            return;
        }
        if(pwd.length < 6){
            window.alert('비밀번호는 6자리 이상 입력해주세요.');
            return;
        }
    }   
    const signId = (e) => {
        setId(e.target.value);
    }
    const signUserName = (e) => {
        setUserName(e.target.value);
    }
    const signPwd = (e) => {
        setPwd(e.target.value);
    }
    const signPwdCheck = (e) => {
        setPwdChk(e.target.value);
    }

    return (
        <Wrap>
            <h1>Sign Up</h1>
                <div>
                    <div>
                        <label htmlFor="id">ID</label><br />
                        <Input id="id" type="text" placeholder="Please enter ID" 
                        _onChange={signId} // 여기서 _onChange인 이유는 element 쪼갤때 defaultProps로 그렇게 정했기 때문
                        ></Input><br />

                        <label htmlFor="nickname">Nickname</label><br />
                        <Input id="nickname" type="text" placeholder="Please enter Nickname"
                        _onChange = {signUserName}
                        ></Input><br />

                        <label htmlFor="pwd">Password</label><br />
                        <Input id="pwd" type="password" placeholder="Please enter Password"
                        _onChange={signPwd}
                        ></Input><br />

                        <label htmlFor="pwd_check">Confirm Password</label><br />
                        <Input id="pwd_check" type="password" placeholder=" Please enter password again to confirm"
                        _onChange={signPwdCheck}
                        ></Input><br />
                    </div>
                    <br />
                    <div>
                        <Button style={{width: "300px"}} 
                                variant="contained" color="secondary"
                                onClick={() => {dispatch(userActions.signupFB(id, pwd, user_name)); check(); }}>Sign Up</Button>
                    </div>
                </div>
        </Wrap>
    )
}
const Wrap = styled.div`
    width: 300px;
    margin: 100px auto;
`
export default SignUp;
