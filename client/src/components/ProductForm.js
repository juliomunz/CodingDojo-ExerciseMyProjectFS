import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import {BrowserRouter as Router, useLocation} from "react-router-dom";

const ProductForm = ({setCreated}) => {
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const location = useLocation();
    
    const getOneProduct = async () => {
        try {
            const product = await axios.get(`http://localhost:8000/api/products/${id}`)

            setTitle(product.data.productData.title)
            setPrice(product.data.productData.price)
            setDescription(product.data.productData.description)
        } catch (err) {
            return err
        }
    }
    useEffect(() => {
        if (id !== undefined ){
        getOneProduct();
        } 
    },[])

    const onSubmitHandler = e => {
        e.preventDefault();
        if (! location.pathname.includes ('/Edit/')){
            axios.post('http://localhost:8000/api/product/new', {
                title,
                price,
                description})
            .then (res => {
                console.log(res)
                setCreated('created');
            })
            .catch (err => console.log(err))
        } else {
            axios.put(`http://localhost:8000/api/products/update/${id}`, {
            title,
            price,
            description})
        .then (res => {
            console.log(res)
        })
        .catch (err => console.log(err))
    }
}
    
    return (
        <div className="form">
            <form onSubmit={onSubmitHandler}>
                <label>Title:</label>
                <input name="title" type="text" value={title} onChange = {(e) => setTitle(e.target.value)}/>

                <label>Price:</label>
                <input name="price" type="text" value={price} onChange = {(e) => setPrice(e.target.value)}/>

                <label>Description:</label>
                <input name="description" type="text" value={description} onChange = {(e) => setDescription(e.target.value)}/>

                <input name="submit"type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm;