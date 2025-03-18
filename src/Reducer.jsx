const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return {...state, num: state.num + 1}
    
        default:
            return state
    }
}


export default reducer      