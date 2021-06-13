import React from 'react';
import Product from './views/Products';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewProduct from './views/NewProduct';
//import NewProduct from './views/DeleteProduct';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        Product Manager
        <div>
          <Link to = "/new-product">Ingresar Productos</Link>
        </div>
        <div>
          <Link to = "/home">Home</Link>
        </div>
        <div>
          <Link to = "/products">Mostrar Productos</Link>
        </div>
        <div>
        <Link to = "/delete-product">Eliminar Productos</Link>
        </div>
      </div>
        <Switch>
            <Route path="/products"><Product /></Route>
            <Route path="/new-product"><NewProduct /></Route>
            {/* <Route path="/delete-product"><DeleteProduct /></Route> */}
        </Switch>
    </Router>
    </div>
  );
}
export default App;
