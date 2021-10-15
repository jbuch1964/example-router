import React from 'react'
import Home from './Home'
import About from './About'
import Cart from './Cart'
import Checkout from './Checkout'
//import PageNotFound from './PageNotFound'
import Products from './Products'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'

//import logo from './logo.svg';
import './App.css';

const App = () => {
  const {path, url} = useRouteMatch();
  console.log(path, url);
  return (
    <>
    <Router>
      <Switch> 
          <div>
          <Route exact path={`${url}/products`} component={Products}/>
          { /* <Route exact path="/selected" component={Selected}/> */}

          <Route exact path={`${url}/cart`} component={Cart}/>
          <Route exact path={`${url}/checkout`} component={Checkout}/>
          
          <Route exact path={`${url}/about`} component={About}/>  
          {/* <Route path="*"  component={PageNotFound}/> */}
   
          <Route exact path={`${url}/`} component={Home}/>
         
          
            <nav>
                {/* The unordered list below could also be a navigation bar */}
                <ul>
                  <li><Link to={`${url}/`}>Home</Link></li>
                  <li><Link to={`${url}/products`}>Products</Link></li>
                  <li><Link to={`${url}/products/selected`}>Selected Product</Link></li>
                  <li><Link to={`${url}/cart`}>Cart</Link></li>
                  <li><Link to={`${url}/cart/checkout`}>Checkout</Link></li>
                  

                  {/* Products */}
                  {/* Nested Redirect: Individual Product */}
                  {/* View cart */}
                  {/* Nested Redirect: Checkout */}
                  <li><Link to={`${url}/about`}>About</Link></li>
                </ul>
            </nav>
            <hr/>


          </div>
      </Switch> 
    </Router>
    </>
  );
}

export default App;
