import {applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from "redux";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)
));

//let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;