import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({setCreated}) => {
    const [title,setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

const onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product/new', {
        title,
        price,
        description})
    .then (res => {
        console.log(res)
        setCreated('created');
    })
    .catch (err => console.log(err))
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

                <input name="submit" type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm;