//store 생성하기
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import User from "./modules/user";

export const history = createBrowserHistory();

//스토어는 리듀서를 뭉친 걸 가지고 만듦
const rootReducer = combineReducers({   //여러개의 reducer을 합칠 때에는 combineReducers({bucket1, bucket2 ,... })
    user: User,
    router: connectRouter(history), //history와 router연결, store에 브라우저 히스토리 저장
});  

//middleWares= [내가 사용할 미들웨어, .. ,]
const middleWares = [thunk.withExtraArgument({history:history})]; // withExtraArgument() : 추가적인 인자 같이 넘겨줌

//지금 어느 환경인지 알려줌(개발환경, 배포환경, ...)
const env = process.env.NODE_ENV;
if(env ==="development"){
    const {logger} = require("redux-logger"); // require쓰는 이유 ( 기능은 import와 비슷, import로 가져오면 모듈만 커짐, 개발할 때만 필요한 기능이라서 if문 돌릴 때만 잠깐 가져와서 사용하기 위해서)
    middleWares.push(logger);
}

//redux DevTool
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose; //compose:조합
    
const enhancer = composeEnhancers(applyMiddleware(...middleWares));

const store = (initialStore) => (createStore(rootReducer, enhancer));

export default store();