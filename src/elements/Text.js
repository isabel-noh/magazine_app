import styled from 'styled-components';
import React from 'react';

const Text = (props) => {
    const {children, bold, color, fontSize} = props;

    const styles = {
        bold: bold,
        fontSize: fontSize,
        color: color,
    }
    return (
        <P {...styles}>
            {children}
        </P>
    );
}
Text.defaultProps = {
    children: null,
    bold: false,
    color: "black",
    fontSize: "14px",
}
const P = styled.p`
    font-size: ${(props)=> props.fontSize};
    color: ${(props)=> props.color};
    font-weight: ${(props)=> (props.bold ? "800" : "400")};

`

export default Text;