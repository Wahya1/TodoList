import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer";
import profileReducer from "./profileReducer";

const rootReducer =combineReducers({
    todo:todoReducer,
    profile : profileReducer
})
//window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE() : midlware pour synchoroniser les modifs de store avec  redux devtools
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

export default store;