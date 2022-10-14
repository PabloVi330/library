import React, { useContext,useEffect } from 'react';

import OrderItem from '../components/OrderItem'
import AppContext from '../context/AppContext'
import flechita from '@icons/flechita.svg'
import '../styles/MyOrders.scss'

const MyOrders = ({setMyOrders}) => {

  const closeMyOrders = () =>{
    setMyOrders(false)
  }

  const { state } = useContext(AppContext)
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" onClick={closeMyOrders} />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map(product => (
          <OrderItem
            key={'pro' + product.id}
            product={product}
          />
        ))

        }

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>{state.total}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>

  )
}

export default MyOrders