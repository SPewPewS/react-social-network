const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState =  {

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'}],

    dialogs: [
        {id: 1, name: 'nameOne'},
        {id: 2, name: 'nameTwo'},
        {id: 3, name: 'nameThree'},
        {id: 4, name: 'nameFour'}]
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            }
        default:
            return state;
    }
}


export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});


export default messagesReducer;