import * as actionTypes from './action'

let initialState = {
    basketItems: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state,
                basketItems: state.basketItems + 1
            }
        default:
            return state
    }
}
export default reducer