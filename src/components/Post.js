import React from "react";
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import Text from "../elements/Text";
// import Image from "../elements/Image";
//../elements/index.js에서 export한거 가져다 씀
import {Text, Image} from "../elements";

const Post = (props) => {
    return (
        <Wrap>
            <Card>
                <Head>
                    <Profile>
                        <Image shape="circle" src={props.src} />
                        <Text bold>{props.user_info.user_name}</Text>
                    </Profile>
                    <Text>Jan 07 2023 17:00:00</Text>
                </Head>
                <Article>
                    <p> {props.contents} </p>
                    <Image shape="rectangle" src={props.src} />
                </Article>
                <Bottom>
                    <Comment>
                        <Text bold>Likes {props.comment_cnt}</Text>
                        <Text bold>Comments {props.comment_cnt}</Text>
                    </Comment>
                    <FavoriteIcon style={{color: "#9c27b0", marginRight: "10px", fontSize: "2em"}}/>
                </Bottom>
            </Card>
        </Wrap>
    );
}

//defaultProps
Post.defaultProps = {
    user_info: {
      user_name: "isabel_noh",
      user_profile: "simba.png",
    },
    image_url: "simba.png",
    contents: "ㅎㅎ",
    comment_cnt: 10,
    insert_dt: "2022-04-04 10:00:00",
};
  
//style
const Wrap = styled.div`
    
`
const Card = styled.div`
    width: 90%;
    margin: 40px auto;
`
const Head = styled.div`
    display: flex;
    justify-content: space-between; 
`
const Profile = styled.div`
    display: flex;
    gap: 10px;
`
const Article = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    height: 300px;
`
const Bottom = styled.div`
    display: flex;  
    justify-content: space-between; 
    margin: 10px auto;
`
const Comment = styled.div`
    display: flex;
    gap: 10px;
    align: center;
`

export default Post;