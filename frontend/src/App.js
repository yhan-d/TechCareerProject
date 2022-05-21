import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateProductComponent from './component/CreateProductComponent';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListProductComponent from './component/ListProductComponent';
import UpdateProductComponent from './component/UpdateProductComponent';
import ViewProductComponent from './component/ViewProductComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className='container'>
        <Switch>
          <Route path = "/" exact component={ListProductComponent}></Route>
          <Route path = "/products" exact component={ListProductComponent}></Route>
          <Route path = "/add-product/:id" exact component={CreateProductComponent}></Route>
          <Route path = "/view-product/:id" exact component={ViewProductComponent}></Route>
          <Route path=  "/update-product/:id" component={UpdateProductComponent}></Route>
        </Switch>
      </div>
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
