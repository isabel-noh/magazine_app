import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Post from "../components/Post";
import post from "../redux/modules/post";
import { useHistory } from "react-router-dom";



const PostList = (props) => {
    const post_list = useSelector((state) => state.post.list);
    const user_info = useSelector((state) => state.post.user);
    const dispatch = useDispatch();
    const history = useHistory();

    React.useEffect(()=>{
        if(post_list.length === 0){
            dispatch(postActions.getPostFB());
        }
        
    }, []);

    return (
        <React.Fragment>
            {/* <Post /> */}
        
            {/* props로 넘겨줌 */}
            {/* 이과정에서 새로 추가했을 때 다 불려오는게 아니고 index0번째가 꼭 undefined로 옴. 새로고침시에는 에러없음.. */}
            {post_list.map((p, idx) => {
                // console.log(p);
                // return;
                return <Post key={p.id} {...p}/>
            })}
        </React.Fragment>
    );
}
export default PostList;