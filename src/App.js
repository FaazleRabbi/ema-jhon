import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Orderreview from './components/orderReview/Orderreview';
import Inventory from './components/inventory/Inventory';
import Details from './components/details/Details';
import Error from './components/error/Error';
import Review from './components/review/Review';
import { removeFromDatabaseCart } from './utilities/databaseManager';
import Signin from './components/Signin/Signin';


function App() {
  return (
    <div className="App">
      
        

      <Router>
      <Header></Header>

        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          
          <Route path='/order'>
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path = "/product/:productKey">
            <Details></Details>
          </Route>
          <Route path='/signin'>
            <Signin/>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
          
        </Switch>
      </Router>

      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
