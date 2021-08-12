// app의 중심 state이다. reducer, store, middle-wares 사이의 모든 mapping을 보관한다.
// redux-thunk middleware 를 가짐으로써 actions에 대한 비동기 dispatching 이 가능하게 된다.
// redux를 위해 dev tools를 가능하게 하는 구성이 store.js 에서 구현된다.
// 프로젝트 사이즈가 크다면 각각의 directory 를 만든후 action, reducer, store를 만드는 것을 추천한다.

import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';


const middlewares = [thunk];

const devTools = 
    process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
        ?  window.__REDUX_DEVTOOLS_EXTENSION__ &&
           window.__REDUX_DEVTOOLS_EXTENSION__()
        : (a) => a;

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares), devTools)
);

