import React from 'react';
import { useState, useContext } from 'react'
import '../styles/Header.scss';
import logo from '@logos/logo_yard_sale.svg';
import icon from '@icons/icon_menu.svg'
import card from '@icons/icon_shopping_cart.svg'
import Menu from './Menu';
import MenuMobile from '../pages/MenuMobile';

import AppContext from '../context/AppContext';
import MyOrders from '../containers/MyOrders';

const Header = () => {
    const [toggle, settoggle] = useState(false)
    const [menu, setMenu] = useState(false)
    const [myOrders, setMyOrders] = useState(false)

    const { serch, state } = useContext(AppContext)

    const handleAccount = () => {
        settoggle(!toggle)
    }

    const handleMenu = () => {
        setMenu(!menu)
    }
    const handleMyOrders = () => {
        setMyOrders(!myOrders)
    }

    const serchInput = (e) => {
        serch(e.target.value)

    }

    return (
        <div>
            <nav>

                <img src={icon} alt="/menu-mobile" className="menu" onClick={handleMenu} />
                <div className="navbar-left">
                    <img src={logo} alt="logo" className="nav-logo" />
                    <ul>
                        <li>
                            <a href="/"  >All</a>
                        </li>
                        <li>
                            <a href="/">Clothes</a>
                        </li>
                        <li>
                            <a href="/">Electronics</a>
                        </li>
                        <li>
                            <a href="/">Furnitures</a>
                        </li>
                        <li>
                            <a href="/">Toys</a>
                        </li>
                        <li>
                            <a href="/" on>Others</a>
                        </li>
                    </ul>

                </div>

                <div className="navbar-right">
                    <ul>
                        <li className="navbar-email" onClick={handleAccount}>
                            platzi@example.com
                        </li>
                        <li className="navbar-shopping-cart" onClick={handleMyOrders}>
                            <img src={card} alt="shopping cart" />
                            {state.cart.length > 0 ? <div>+{state.cart.length}</div> : null}
                        </li>
                    </ul>
                </div>
                {toggle && <Menu />}
                {menu && <MenuMobile />}
                {myOrders && <MyOrders 
                  setMyOrders={setMyOrders}
                />}



            </nav>
            <nav>


                <div className="container-serch">
                    
                        <input type="text" className='search' placeholder='search' onChange={serchInput} />
                    
                </div>


            </nav>
        </div>

    )
}

export default Header