import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomeScreen.css';

import Product from '../components/Product';

import { getProducts as listProducts } from '../redux/actions/productActions';

function HomeScreen() {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className='homescreen'>
            <h2 className='homescreen_title'>Latest Products</h2>
            <div className="homescreen_products">
                {loading ? (
                    <div className="centerdiv">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> ):
                    error ? (<h2> { error } </h2>) : (
                        products.map((product) => (
                            <Product 
                                key={product._id} 
                                productId={product._id} 
                                description= {product.description}
                                imageUrl={product.imageUrl}
                                price ={product.price}
                                name={product.name}  
                            />
                        ))
                    )}
            </div>
        </div>
    );
};

export default HomeScreen;
