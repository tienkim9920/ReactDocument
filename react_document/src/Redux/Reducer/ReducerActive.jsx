const initialState = {
    isActive: true
}

const ReducerActive = (state = initialState, action) => {

    switch(action.type){

        case 'CHANGE_ACTIVE':
            console.log("Check: ", action.data)
            
            state.isActive = !action.data
            return state

        default:
            return state

    }

}

export default ReducerActive