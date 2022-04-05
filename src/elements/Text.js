import styled from 'styled-components';
import React from 'react';

const Text = (props) => {
    const {children, bold, color, size} = props;

    const styles = {
        bold: bold,
        size: size,
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
    size: "14px",
}
const P = styled.p`
    size: ${(props)=> props.size};
    color: ${(props)=> props.color};
    font-weight: ${(props)=> (props.bold ? "800" : "400")};

`

export default Text;