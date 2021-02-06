
const initialState = {
    isCheck: false
}

const ReducerCheck = (state = initialState, action) => {

    switch(action.type){

        case 'CHANGE_CHECK':
            console.log("Check: ", action.data)
            
            state.isCheck = !action.data
            return state

        default:
            return state

    }

}

export default ReducerCheck