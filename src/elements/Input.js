import styled from 'styled-components';
import React from 'react';

const Input = (props) => {
    const { width, height, borderRight, borderLeft, borderTop, borderBottom, marginBottom } = props;

    const styles = {
        width: width,
        height: height,
        borderRight: borderRight, 
        borderLeft: borderLeft, 
        borderTop: borderTop, 
        borderBottom: borderBottom,
        marginBottom: marginBottom,
    }
    return (
        <InputBox {...styles}></InputBox>
    );
}
Input.defaultProps = {
    width: "300px", 
    height: "30px",
    borderRight: "none",
    borderLeft: "none",
    borderTop: "none",
    borderBottom: "1px solid #BE01E5",
    marginBottom: "10px",
}
const InputBox = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-right: ${(props) => props.borderRight};
    border-left: ${(props) => props.borderLeft};
    border-top: ${(props) => props.borderTop};
    border-bottom: ${(props) => props.borderBottom};
    margin-bottom:  ${(props) => props.marginBottom};
`

export default Input;