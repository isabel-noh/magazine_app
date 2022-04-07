import styled from 'styled-components';
import React from 'react';

// Use the `defaultValue` or `value` props instead of setting children on <textarea>. 
const TextArea = (props) => {
    const {_onChange, type, placeholder } = props;

    
    return (
        <TextareaBox ype={type} placeholder={placeholder} onChange = { _onChange } ></TextareaBox>
    );
}
TextArea.defaultProps = {
    multiLine: false,
    _onChange: () =>{} ,
    placeholder: "text",
    type: "text",
    marginBottom: "10px",
}
const TextareaBox = styled.textarea`
    height: 300px;
    width: 300px;
    border: 1px solid #BE01E5;
`

export default TextArea;