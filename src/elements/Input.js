import styled from 'styled-components';
import React from 'react';

const Input = (props) => {
    const { _onChange, type, placeholder } = props;

    return (
        <InputBox type={type} placeholder={placeholder} onChange = { _onChange } ></InputBox>
    );
}
Input.defaultProps = {
    _onChange: () =>{} ,
    placeholder: "text",
    type: "text",
    width: "300px", 
    height: "30px",
    borderRight: "none",
    borderLeft: "none",
    borderTop: "none",
    borderBottom: "1px solid #BE01E5",
    marginBottom: "10px",
    
}
const InputBox = styled.input`
    width: 300px;
    height: 30px;
    border-right: none;
    border-left:none;
    border-top: none;
    border-bottom: 1px solid #BE01E5;
    margin-bottom: 10px;
`

export default Input;