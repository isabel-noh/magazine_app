import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";
import moment from "moment";

//Actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

//Action creators
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

//reducer이 사용할 initialState
const initialState= {
    list: [],
}
// 게시글 하나에 대한 default initial 값
const initialPost = {
    id: 0,
    user_info: {
        user_name: "isabel_noh",
        user_profile: "simba.png",
    },    
    image_url: "simba.png",
    contents: "ㅎㅎ",
    comment_cnt: 10,
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    // "2022-04-04 10:00:00",    
}

const addPostFB = () => {
    return function (dispatch, getState, {history}){
        const _user = getState().user.user;
        const postDB = firestore.collection("post");
        
        const user_info = {
            user_name: _user.user_name,
            user_id: _user.user_id,
            user_profile: _user.user_profile,
        };

        const _post = {
            ...initialPost,
            contents: _user.contents,
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        };

        console.log({...user_info, ..._post});
        return;
        postDB.add({...user_info, ..._post}).then((doc)=> {

        }).catch((err) => {
            console.log("포스트 작성에 실패하였습니다.")
        })
    }
}

const getPostFB = () => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");

        postDB.get().then((docs) => {
            let post_list = [];
            
            docs.forEach((doc) => {
                let _post = doc.data();
                //key값들을 배열로 만들어줌 >> 내장함수 사용 가능해짐 //reduce : 누산
                let post = Object.keys(_post).reduce((acc, cur) => {

                    if(cur.indexOf("user_") !== -1){
                        return {...acc,
                                user_info: { ...acc.user_info, [cur]:_post[cur]},
                        }
                    }
                    return {...acc, [cur]: _post[cur]};
                }, {id: doc.id, user_info: {}});

                // let post = {
                //     id: doc.id,
                //     user_info: {
                //         user_name: _post.user_name,
                //         user_profile: _post.user_profile,
                //         user_id: _post.user_id,
                //     },
                //     image_url: _post.image_url,
                //     contents: _post.contents,
                //     comment_cnt: _post.comment_cnt,
                //     insert_dt: _post.insert_dt,   
                // }
                post_list.push(post);
            })
            console.log(post_list);
            dispatch(setPost(post_list));
        })
    }
}


//Reducer
export default handleActions(
    {
        [SET_POST] : (state, action) => produce (state, (draft) => {
            draft.list = action.payload.post_list;

        }),
        [ADD_POST] : (state, action) => produce (state, (draft) => {


        })
    }, initialState

)

//export 
const actionCreators = {
    setPost,
    addPost,
    getPostFB,
}
export { actionCreators };

