//메인페이지
import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Post from './components/Post';

const Main = (props) => {
    console.log(props);
    return (
        <Post />
        // <Wrap>
        //     <Card>
        //         <Head>
        //             <Profile>
        //                 <div>img01</div>
        //                 <div>id</div>
        //             </Profile>
        //             <div>date</div>
        //         </Head>
        //         <Article>
        //             <p> paragraph </p>
        //             <p> photo </p>
        //         </Article>
        //         <Bottom>
        //             <Comment>
        //                 <div>Likes n</div>
        //                 <div>Comments n</div>
        //             </Comment>
        //             <div>💜</div>
        //         </Bottom>
        //     </Card>
        // </Wrap>
    )
}
//defaultProps
Main.defaultProps = {
    user_info: {
      user_name: "isabel_noh",
      user_profile: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2Fludotecaeboli%2Fphotos%2F&psig=AOvVaw2SZKa3RTLjI_rlqIAK_oOG&ust=1649162818978000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPC2qbS4-vYCFQAAAAAdAAAAABAD",
    },
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2Fludotecaeboli%2Fphotos%2F&psig=AOvVaw2SZKa3RTLjI_rlqIAK_oOG&ust=1649162818978000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPC2qbS4-vYCFQAAAAAdAAAAABAD",
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
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 400px;
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
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 650px;
`
const Comment = styled.div`
    display: flex;
    gap: 10px;
`
export default Main;