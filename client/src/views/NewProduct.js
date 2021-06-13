import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import { BrowserRouter as navigate } from "react-router-dom";


const NewProduct = () => {
    const [created, setCreated] = useState('')
    const onClickHandler = event => {
        event.preventDefault();
        navigate('/Home');
    }

return (
    <div>
    <ProductForm setCreated={setCreated} />
    <button onClick={onClickHandler}> Volver al menu principal </button>
    </div>
)
}

export default NewProduct;
