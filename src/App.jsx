import React from "react";
import { Provider } from "react-redux";
import './App.css';
import store from "./presentation/redux/store/index";
import {BrowserRouter, Route } from 'react-router-dom';
import HomePage from "./presentation/pages/homePage";
import Routes from "./presentation/routes/routes";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/main/*" component={Routes}/>
      <Route path="/home" exact render={(props)=> <HomePage {...props}/>} ></Route>
      
    </BrowserRouter>
  </Provider>
);

export default App;
