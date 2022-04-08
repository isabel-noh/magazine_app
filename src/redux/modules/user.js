//redux store
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { auth } from "../../shared/firebase";
import { getAuth, setPersistence, browserSessionPersistence, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

//Action
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

const initialState = {
    user: null,
    is_login: false,
}

const user_initial = {

}

//middleWare actions
// const loginAction = (user) => { // 로그인하면서 메인페이지로 이동
//     return function (dispatch, getState, {history}){
//         console.log(history);
//         dispatch(setUser());
//         history.push("/");
//     }
// }
const loginFB = (id, pwd) => {
    return function ( dispatch, getState, { history }){
        setPersistence(auth, browserSessionPersistence)
        .then(() => {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            signInWithEmailAndPassword(auth, id, pwd)
            .then((user) => {
            // Signed in
                console.log(user);
                dispatch(setUser({
                    id: id, 
                    user_name: user.user.displayName, 
                    user_profile: '',
                    uid: user.user.uid,
                }));
                history.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
          
        })
        
    }
}
const loginCheckFB = () => {
    return function ( dispatch, getState ){
        onAuthStateChanged(auth, (user) => {
            if (user){         
                dispatch(setUser({
                    id: user.email,
                    user_name: user.displayName, 
                    user_profile: "", 
                    uid: user.uid,
                }))        
              // User is signed in, see docs for a list of available properties
            } else {
              // User is signed out
              dispatch(logOut());
            }
          
        }          
    )}
}
const signupFB = (id, pwd, user_name) => {
    return function ( dispatch, getState, { history }) {

        createUserWithEmailAndPassword(auth, id, pwd)
        .then((user) => {
            // Signed in
            console.log(user);
        
            updateProfile(auth.currentUser, {
                displayName: user_name,
            }).then(() => { // Profile updated!
                dispatch(setUser({
                    id: id, 
                    user_name: user_name, 
                    user_profile: '',
                    uid: user.user.uid, //uid: 특정 컴퓨터 사용자에게 부여되는 숫자 또는 이름 user identifier , 사용자 식별자
                }));
                history.push('/');
            }).catch((error) => { // An error occurred
                console.log(error);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage);
            // ..
        });
    }
}
const logoutFB = () => {
    return function ( dispatch, getState, { history }){
        signOut(auth).then(() => {
            dispatch(logOut());
            history.replace("/");
        }).catch((error) => {
            console.log(error);
        });
    }
}

//Action function
// const logIn = createAction(LOG_IN, (user) => ({user}));
const setUser = createAction(SET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));

//Reducer
export default handleActions({
    // [LOG_IN]:(state, action) => produce(state, (draft)=>{  //state : 원본 나의 정보. draft : immer가 원본 데이터를 복사한 것
    //     setCookie("is_login", "success");
        
    //     draft.user = action.payload.user;  //createAction을 사용하면 정보를 payload로 받아오기 때문에 action.payload.user로 빼줘야함
    //     //(payload: 넘겨준값)
    //     draft.is_login = true;
    // }), 
    [SET_USER]:(state, action) => produce(state, (draft)=>{  //state : 원본 나의 정보. draft : immer가 원본 데이터를 복사한 것
        setCookie("is_login", "success");
        
        draft.user = action.payload.user;  //createAction을 사용하면 정보를 payload로 받아오기 때문에 action.payload.user로 빼줘야함
        //(payload: 넘겨준값)
        draft.is_login = true;
    }), 
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
    }),
    [GET_USER]:(state, action) => produce(state, (draft)=>{ }),
}, initialState);

const actionCreators = {
    // logIn,
    signupFB,
    logOut,
    getUser,
    loginFB,
    loginCheckFB,
    logoutFB,
    //loginAction,
}
export { actionCreators };

