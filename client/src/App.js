import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProductForm from './components/ProductForm';
import Products from './components/Products';
import Inicio from './views/Inicio';
import Detail from './components/DetailsProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/ProductForm">Crear Producto</Link>
            </li>
            <li>
              <Link to="/Products">Mostrar Productos</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Inicio/>
            </Route>
            <Route exact path="/detail/:id">
              <Detail/>
            </Route>
            <Route exact path="/Edit/:id">
              <ProductForm/>
            </Route>
            <Route exact path="/ProductForm">
              <ProductForm />
            </Route>
            <Route exact path="/Products">
              <Products />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
