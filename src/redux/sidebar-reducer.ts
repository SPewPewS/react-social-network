
type InitialStateType = typeof initialState

let initialState =  {
    friends: [
        {id: 1, name: 'friend1'},
        {id: 2, name: 'friend2'},
        {id: 3, name: 'friend3'}

    ]
}

const sidebarReducer = (state = initialState, action: any): InitialStateType  => {



    return state;
}

export default sidebarReducer;