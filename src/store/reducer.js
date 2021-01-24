import * as actionTypes from './action'

let initialState = {
    basketCount: 0,
    basket: {}
}
// structure of basket will bw like 
// basket :{
//     [some id] : {...data , qty}
// }

const reducer = (state = initialState, action) => {
    const id = action.id
    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            if (state.basket[id]) {
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                    basketCount: state.basketCount + 1
                }
            }

        case actionTypes.FILL_BASKET:
            let basketItem = state.basket[id] || {
                ...action.data
            }
            basketItem.qty = basketItem.qty + 1 || 0 + 1;
            return {
                ...state,
                basket: {
                    ...state.basket,
                    [id]: basketItem
                }
            }
        default:
            return state
    }
}
export default reducer