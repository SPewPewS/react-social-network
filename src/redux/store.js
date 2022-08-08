/*
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: '121212', likesCount: 10},
                {id: 3, message: 'blabla', likesCount: 12},
                {id: 4, message: 'Yo', likesCount: 12}],
            newPostText: '123456789'

        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'}],

            newMessageText: "123",

            dialogs: [
                {id: 1, name: 'nameOne'},
                {id: 2, name: 'nameTwo'},
                {id: 3, name: 'nameThree'},
                {id: 4, name: 'nameFour'}]
        },
        sidebar: {
            friends: [
                {id: 1, name: 'friend1'},
                {id: 2, name: 'friend2'},
                {id: 3, name: 'friend3'}

            ]
        }

    },
    getState() {
        return this._state
    },

    subscribe(observer)  {
        this._callSubscriber = observer;

    },

    _callSubscriber ()  {
        console.log('STATE');
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    }


}


export default store;*/
