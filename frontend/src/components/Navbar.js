import React from 'react';
import './Navbar.css';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar({click}) {

    const cart = useSelector(state => state.cart);
    const {cartItems} =cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }

    return (
        <nav className='navbar'>
            <Link to= '/' className='logo_link'>
            <div className="navbar_logo">
                <h2>Ecomm Store</h2>
            </div>
            </Link>
            <ul className="navbar_links">
                <li>
                    <Link to = '/cart' className='cart_link' >
                        <ShoppingCartIcon/>
                        <span>
                        Cart
                            <div className='cartlogo_badge'>{getCartCount()}</div>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to = '/' >
                      Shop
                    </Link>
                </li>
            </ul>
            <div className="hamburger_menu" onClick={click} >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
