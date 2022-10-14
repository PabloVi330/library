import { useState } from 'react';

const initialState = {
    cart: [],
    total: 0
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    const [stateSerch, setStateSerch] = useState()
    const [stateInfo, setStateInfo] = useState()

    const addToCart = (paylod) => {
        setState(
            {
                ...state,
                cart: [...state.cart, paylod],
                total: state.total + paylod.price

            }
        );
        console.log(state.total)
    }

    const removeFromCart = (paylod) => {
        var cont = 0;
        for(var i = 0; i<state.cart.length; i++) {
            if(state.cart[i].id === paylod.id)
            cont++
        }
        setState(
            {
                ...state,
                cart: state.cart.filter(items => items.id !== paylod.id),
                total: state.total - (paylod.price * cont)
            }
        )
        console.log(state.cart)
    }

    const setInfo = (paylod) => {
        setStateInfo(paylod)
    }

    const togleInfo = (paylod) => {
        setState(!paylod)
    }
    const serch = (paylod) => {
        setStateSerch(paylod)
        console.log(state)
    }
    return {
        state,
        stateSerch,
        stateInfo,
        setInfo,
        serch,
        togleInfo,
        addToCart,
        removeFromCart

    }

}

export default useInitialState