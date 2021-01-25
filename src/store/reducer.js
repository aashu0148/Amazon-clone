import * as actionTypes from './action'

let initialState = {
    basketCount: 0,
    basket: {},
    authUser: null,
    authUserName: undefined
}
// structure of basket will be like 
// basket :{
//     [some id] : {...data , qty}
// }

const reducer = (state = initialState, action) => {
    const id = action.id

    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state,
                basketCount: state.basketCount + 1
            }
        // if (state.basket[id]) {
        //     return {
        //         ...state,
        //     }
        // } else {
        // }

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

        case actionTypes.SUBTRACT_QTY:
            {
                let myBasket = { ...state.basket }
                myBasket[id].qty -= 1;
                if (myBasket[id].qty === 0) {
                    delete myBasket[id]
                    return {
                        ...state,
                        basketCount: state.basketCount - 1,
                        basket: myBasket
                    }
                } else {
                    return {
                        ...state,
                        basketCount: state.basketCount - 1,
                        basket: myBasket
                    }
                }
            }
        case actionTypes.ADD_QTY:
            {
                let myBasket = { ...state.basket }
                myBasket[id].qty += 1
                return {
                    ...state,
                    basketCount: state.basketCount + 1,
                    basket: myBasket
                }
            }

        case actionTypes.DELETE_ITEM_FROM_BASKET:
            {
                let myBasket = { ...state.basket }
                let qty = myBasket[id].qty;
                delete myBasket[id]
                return {
                    ...state,
                    basketCount: state.basketCount - qty,
                    basket: myBasket
                }
            }
        case actionTypes.SIGN_IN:
            return {
                ...state,
                authUser: action.userEmail,
                authUserName: action.userName
            }
        case actionTypes.SIGN_OUT:
            return {
                ...state,
                authUser: null,
                authUserName: undefined
            }
        case actionTypes.USER_NAME:
            return {
                ...state,
                authUserName: action.userName
            }


        default:
            return state
    }
}
export default reducer