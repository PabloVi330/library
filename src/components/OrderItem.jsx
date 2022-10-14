import React, { useContext } from 'react';
import iconClose from '@icons/icon_close.png';
import AppContext from '../context/AppContext';


const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext)
    const handlenDelete = (item) => {
        removeFromCart(item)
    }
    
    return (
        <div className="shopping-cart">
            <figure >
                <img src={product.images[0]} alt="bike" />
            </figure>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src={iconClose} alt="close" onClick={ () =>handlenDelete(product)}/>
        </div>
    )
}

export default OrderItem