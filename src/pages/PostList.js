import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Post from "../components/Post";
import Permit from "../shared/Permit";
import CreateIcon from '@mui/icons-material/Create';
import zIndex from "@material-ui/core/styles/zIndex";
import { useHistory } from "react-router-dom";



const PostList = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const post_list = useSelector((state) => state.post.list);
    console.log(post_list);


    React.useEffect(()=>{
        dispatch(postActions.getPostFB());
    }, []);

    return (
        <React.Fragment>
            {/* <Post /> */}

            {/* props로 넘겨줌 */}
            {post_list.map((p, idx) => {
                return <Post key={p.id} {...p}/>
            })}
            <Permit>
                <CreateIcon 
                onClick={()=>history.push("/write")}
                style={{position:"fixed", bottom:"0", right:"0", margin: "25px", backgroundColor: "#9c27b0", padding: "5px", color : "white", borderRadius:"5px", zIndex:"9999"}} />
                {/* // onClick={history.push("/write")}/> */}
            </Permit>
        </React.Fragment>
    );
}
export default PostList;