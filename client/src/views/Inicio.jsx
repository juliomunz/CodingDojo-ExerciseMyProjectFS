import axios from 'axios';
import React, { useState } from 'react';

export default function Login() {
    const [correo, setCorreo]= useState('')
    const [contrasena, setContrasena]= useState('')

    const login = async(e) =>{
        e.preventDefault()
        const usuario={correo,contrasena}
        const respuesta=await axios.post('http://localhost:8000/user/login', usuario)
        const mensaje=respuesta.data.mensaje
        if (mensaje!=='Bienvenido'){
            alert(mensaje)
        }else {
            alert(mensaje)
        }    
        //console.log(respuesta)
    }
    return (
        <div>
            <h3>Hola, bienvenido al administrador de productos. Inicia sesión para continuar.</h3>
            <div className="row">
                <div className="card">
                    <h4> Inicio de sesión</h4>
                </div>
                <div className="card">
                    <form onSubmit={login}>
                        <div>
                            <label>Correo: </label>
                            <input type="email" className="form-control" autoFocus required onChange={(e)=>setCorreo(e.target.value)}/>
                            <label>Contraseña: </label>
                            <input type="password" className="form-control" onChange={(e)=>setContrasena(e.target.value)}/>
                        </div>
                        <div>
                        <input type="submit"/>
                        </div>
                    </form>
                </div>
            </div>                    
        </div>
    )
}
