// Action 과 Reducer를 편하게 사용하도록하는 함수
import { createAction, handleActions } from "redux-actions";
// 불변성 관리를 편한게 해주는 함수
import { produce } from "immer";

import { firestore } from "../../shared/firebase";
// Date객체처럼 날짜시간을 받아오는 함수
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
  // user 데이터는 리덕스 이미 들어있기때문에 리덕스에 있는 정보 사용할것
    // user_info: {
    //     id: 0,
    //     user_name: "isabel_noh",
    //     user_profile: "simba.png",
    // },    
    image_url: "simba.png",
    contents: "ㅎㅎ",
    comment_cnt: 10,
    like_cnt: 50,
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    // "2022-04-04 10:00:00",    
}


const getPostFB = () => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");

        postDB.get().then((docs) => {
            let post_list = [];
            
            docs.forEach((doc) => {
                let _post = doc.data();
                //key값들을 배열로 만들어줌 >> 내장함수 사용 가능해짐 //reduce : 누산
                // let post = Object.keys(_post).reduce((acc, cur) => {

                //     if(cur.indexOf("user_") !== -1){
                //         return {...acc,
                //                 user_info: { ...acc.user_info, [cur]:_post[cur]},
                //         }
                //     }
                //     return {...acc, [cur]: _post[cur]};
                // }, {id: doc.id, user_info: {}});

                let post = {
                    id: doc.id,
                    user_info: {
                        user_name: _post.user_name,
                        user_profile: _post.user_profile,
                        user_id: _post.user_id,
                    },
                    image_url: _post.image_url,
                    contents: _post.contents,
                    comment_cnt: _post.comment_cnt,
                    insert_dt: _post.insert_dt,   
                    like_cnt: _post.like_cnt,
                }
                post_list.push(post);
            })
            console.log(post_list);
            dispatch(setPost(post_list));
        })
    }
}


const addPostFB = (contents = "") => {
    return function (dispatch, getState, {history}){
        const _user = getState().user.user;
        const postDB = firestore.collection("post");

        const user_info = {
            user_name: _user.user_name,
            user_id: _user.uid,
            user_profile: _user.user_profile,
        };
        // 상단에 ㅣ있는데 또 만드는 이유 > post가 만들어지는 시점을 생각해야함.
      // addPost가 불려오고 나면 그때 하나하나 실행이 되면서 insert_dt를 만들 거임
        const _post = {
            ...initialPost,
            contents: contents,
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        };

        postDB.add({...user_info, ..._post}).then((doc)=> {
            let post = {user_info, ..._post, id: doc.id };
            dispatch(addPost(post));
            history.replace("/");
        }).catch((err) => {
            console.log("포스트 작성에 실패하였습니다.", err)  
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
            draft.list.unshift(action.payload.post);

        })
    }, initialState

)

//export 
const actionCreators = {
    setPost,
    addPost,
    getPostFB,
    addPostFB,
}
export { actionCreators };

