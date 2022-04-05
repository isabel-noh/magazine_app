//로그인
import React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { Input } from "../elements";

const Login = () => {
    const history = useHistory();

    return (
        <Wrap>
            <h1>Log In</h1>
            <div>
                <div>
                    <label>ID</label><br />
                    <Input placeholder="Please enter your ID" ></Input><br />
                    <label>Password</label><br />
                    <Input placeholder="Please enter your Password" ></Input><br />
                </div>
                <br />

                <div>
                    <Button onClick={() => {history.push("/");}} variant="contained" color="secondary">Log In</Button>
                </div>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    
`

export default Login;