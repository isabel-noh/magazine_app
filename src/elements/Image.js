import styled from 'styled-components';
import React from 'react';

const Image = (props) => {
    const {shape, src, size} = props; // 아래 defaultProps에서 받아옴
    
    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return ( 
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOuter>
                <AspectInner {...styles}></AspectInner>
            </AspectOuter>
        )
    }

    return (
        <React.Fragment>

        </React.Fragment>
    );
}
const AspectOuter = styled.div`
    width: 100%;
    min-width: 250px;
`
const AspectInner = styled.div`
    height: 300px;
    
    overflow: hidden; 
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;

`
//반응형 참고
// position: relative;
// padding-top: 70%;
const ImageCircle = styled.div`
    //css 변수 선언
    --size: ${(props) => props.size}px; 
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`
Image.defaultProps = {
    shape: "circle",
    src: "simba.png",
    size: 36,
}

export default Image;