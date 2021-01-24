import * as actionTypes from './action'

let initialState = {
    basketCount: 0,
    basket: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state,
                basketCount: state.basketCount + 1
            }
        case actionTypes.FILL_BASKET:
            return {
                ...state,
                basket: state.basket.concat(action.basketItems)
            }
        default:
            return state
    }
}
export default reducer