import React from 'react';
import './SideDrawer.css';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function SideDrawer({show, click}) {
    const sideDrawerClass = ['sidedrawer'];

    if(show) {
        sideDrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart);
    const {cartItems} =cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer_links" onClick={click}>
                <li>
                    <Link to='/cart' className='link'>
                        <ShoppingCartIcon/>
                        Cart 
                        <span className='sidedrawer_cartbadge'>{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className='link'>
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer;
