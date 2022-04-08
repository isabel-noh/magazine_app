import React from "react";
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Input, Image, Text, TextArea } from "../elements";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
const Write = (props) => {
    const is_login = useSelector((state) => state.user.is_login);
    const dispatch = useDispatch();
    const history = useHistory();
    const [contents, setContents] = React.useState("");

    const changeContents = (e) => {
        setContents(e.target.value);        
    }
    const addPost = () => {
        dispatch(postActions.addPostFB(contents));
        console.log(contents);
    }
    if(!is_login){
        return ( 
            <React.Fragment>
                <Wrap style={{textAlign: "center", marginTop: "200px"}}>
                    <Text bold fontSize="35px"> Please log in our web site to POST YOUR STORY.</Text>
                    <Button style={{width: "200px", margin: "100px 0px"}}  
                            variant="contained" color="secondary"
                            onClick={() => {history.push("/login");}}>Go to Login</Button>
                </Wrap>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Wrap>
                <Text fontSize="35px" >Posting</Text>
                <div>
                    <div>
                        <input type="file" placeholder="select the image" />
                    </div>
                    <div>
                        <Text fontSize="25px">Select the Layout</Text>
                        <input type="radio" style={{margin: "20px 0px"}}/> Image on the right, text on the left
                        <Article>
                            <TextArea 
                            _onChange={changeContents} placeholder="write your post" style={{border: "1px solid #BE01E5"}}> </TextArea>
                            <Image shape="rectangle" src={""} />
                        </Article>
                    </div>
                    
                    <Button style={{width: "100%"}}  
                            variant="contained" color="secondary"
                            onClick={addPost}>Post</Button>
                </div>
            </Wrap>
        </React.Fragment>
    );
}

const Wrap = styled.div`
    width: 90%;
    margin: 50px auto;
`
const Article = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    height: 300px;
`
const Article1 = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
    height: 350px;
`
export default Write; 

// <div>
//                         <input type="radio" style={{margin: "20px 0px"}} /> Image on the left, text on the right
//                         <Article>
//                             <Image shape="rectangle" src={""} />
//                             <TextArea placeholder="write your post" style={{border: "1px solid #BE01E5" }}> </TextArea>
//                         </Article>
//                     </div>
//                     <div>
//                         <input type="radio" style={{margin: "20px 0px"}} /> Image on the bottom, text on the top
//                         <Article1>
//                             {/* textarea placeholder 안나옴 */}
//                             <textarea placeholder="write your post" style={{ border: "1px solid #BE01E5", width: "100%", height: "200px"}}> </textarea>
//                             <Image shape="rectangle" src={""} />
//                         </Article1>
//                     </div>