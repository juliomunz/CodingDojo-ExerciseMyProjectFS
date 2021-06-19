import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res)
                setProduct({...res.data.productData})
            }
        )
    }, [])

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>${product.price}</h3>
            <p>Descripción: {product.description}</p>
                <Link to={"/Edit/"+id}>EDITAR PRODUCTO</Link>
                <br></br>
                <Link to="/Products">VOLVER</Link>
                <br></br>
                
        </div>
    )
}
export default Detail;
