import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts]= useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data);
            console.log(res.data);
            console.log(products);
        })
        .catch(err => console.log('Error:',err))
    },[])

    return (
        <div>
            {
        products.map((product, idx) => (
            <div key={idx}>{product.title}
            </div>
        ))}
        </div>
    )
}

export default Products;
