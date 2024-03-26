
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBasket } from '../../slice/BasketSlice';
import './Products.css'


function Products() {
    const dispatch = useDispatch()

    const addedBasket = (product) => {
        dispatch(addBasket(product))
    };
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='products-container'>
            {products.map((product, index) => (
                <div className='products' key={index}>
                    <div className='first-product'>
                        <div><img className='product-img' src={product.image} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>{product.info}</div>
                            <div><p className='ptext'>£{product.price.toFixed(2)}</p></div>
                            <div><button className='add' onClick={()=>addedBasket(product)}>ADD TO CART</button></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
