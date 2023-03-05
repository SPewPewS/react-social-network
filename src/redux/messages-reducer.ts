import {stat} from "fs";

const ADD_MESSAGE = 'ADD-MESSAGE';



type DialogType = {
    id: number,
    name: string
}

type MessagesType = {
    id: number,
    message: string
}

let initialState =  {

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'}] as Array<MessagesType>,

    dialogs: [
        {id: 1, name: 'nameOne'},
        {id: 2, name: 'nameTwo'},
        {id: 3, name: 'nameThree'},
        {id: 4, name: 'nameFour'}] as Array<DialogType>
};

export type InitialStateType = typeof initialState;

const messagesReducer = (state = initialState, action: any) => {

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

type AddMessageActionCreatorActionType = {
    type: typeof ADD_MESSAGE,
    newMessageBody: string
}

export const addMessageActionCreator = (newMessageBody: string): AddMessageActionCreatorActionType => ({type: ADD_MESSAGE, newMessageBody});


export default messagesReducer;