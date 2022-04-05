//디테일 페이지
import React from "react";
import Image from "./elements/Image";
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Detail = (props) => { 
    console.log(props);

    return (
        <Wrap>
            <Card>
                <Head>
                    <Profile>
                        <Image shape="circle" src={props.image_url} />
                        <div>{props.user_info.user_name}</div>
                    </Profile>
                    <div>{props.insert_dt}</div>
                </Head>
                <Article>
                    <p> {props.contents} </p>
                    <Image shape="rectangle" src={props.image_url} />
                </Article>
                <Bottom>
                    <Comment>
                        <div>Likes {props.comment_cnt}</div>
                        <div>Comments {props.comment_cnt}</div>
                    </Comment>
                    <FavoriteIcon style={{color: "#9c27b0", marginRight: "10px", fontSize: "2em"}}/>
                </Bottom>
            </Card>
        </Wrap>
    );
}

//defaultProps
Detail.defaultProps = {
    user_info: {
      user_name: "isabel_noh",
      user_profile: "../simba.png",
    },
    image_url: "../simba.png",
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

export default Detail;
// import React from "react";
// import styled from 'styled-components';
// import { useHistory } from "react-router-dom";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import Image from "./elements/Image";

// const Detail = (props) => {
//     const history = useHistory();

//     return (
//         <Wrap>
//             <Card>
//                 <Head>
//                     <Profile>
//                         <Image shape="circle" src={props.src} />
//                         <div>id</div>
//                     </Profile>
//                     <div>date</div>
//                 </Head>
//                 <Article>
//                     <p> paragraph </p>
//                     <Image shape="rectangle" src={props.src} />
//                 </Article>
//                 <Bottom>
//                     <Comment>
//                         <div>Likes n</div>
//                         <div>Comments n</div>
//                     </Comment>
//                     <FavoriteIcon style={{float: "right"}}/>
//                 </Bottom>
//             </Card>
//         </Wrap>
//     )
// }
// Detail.defaultProps = {
//     user_info: {
//       user_name: "isabel_noh",
//       user_profile: "simba.png",
//     },
//     image_url: "simba.png",
//     contents: "ㅎㅎ",
//     comment_cnt: 10,
//     insert_dt: "2022-04-04 10:00:00",
//   };
// const Wrap = styled.div`
    
// `
// const Card = styled.div`
//     width: 90%;
//     margin: 40px auto;
// `
// const Head = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 2fr;
//     gap: 400px;
// `
// const Profile = styled.div`
//     display: flex;
//     gap: 10px;
// `
// const Article = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 5px;
//     height: 300px;
// `
// const Bottom = styled.div`
//     display: flex;  
//     justify-content: between; 
// `
//     // display: grid;
//     // grid-template-columns: 2fr 1fr;
//     // gap: 450px;
// const Comment = styled.div`
//     display: flex;
//     gap: 10px;
// `
// export default Detail;