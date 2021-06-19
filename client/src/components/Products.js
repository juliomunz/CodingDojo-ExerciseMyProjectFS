import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Products = () => {
    const [products, setProducts]= useState([]);
    const history = useHistory()
    const onHandledit = (id) => {
        history.push (`/Detail/${id}`)
    }
    const onHandldelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        history.go(0)
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data);
            console.log(res.data);
        })
        .catch(err => console.log('Error:',err))
    },[])

    return (
        <div>
            {
        products.map((product, idx) => (
            <div key={idx}>{product.title}
            <div>
            {product.price}
            </div>
            <div>
            {product.description}
            </div>
            <button onClick={() => onHandledit(product._id)}>Editar</button>
            <button onClick={() => onHandldelete(product._id)}>Eliminar</button>
            </div>
        ))}
        </div>
    )
}

export default Products;
