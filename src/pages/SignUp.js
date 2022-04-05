//회원가입
import React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';


const SignUp = () => {
    const history = useHistory();

    return (
        <Wrap>
            <h1>Sign Up</h1>
                <div>
                    <div>
                        <label>ID</label><br />
                        <input placeholder="Please enter ID"></input><br />
                        <label>Nickname</label><br />
                        <input placeholder="Please enter Nickname"></input><br />
                        <label>Password</label><br />
                        <input placeholder="Please enter Password"></input><br />
                        <label>Confirm Password</label><br />
                        <input placeholder=" Please enter password again to confirm"></input><br />
                    </div>
                    <div>
                        <Button onClick={() => {history.push("/");}} variant="contained" color="secondary">Sign Up</Button>
                    </div>
                </div>
        </Wrap>
    )
}
const Wrap = styled.div`
    
`
export default SignUp;
