import React from "react";
import { Provider } from "react-redux";
import './App.css';
import store from "./presentation/redux/store/index";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./presentation/pages/homePage";
import Routes from "./presentation/routes/routes";

const App = () => (
  <Provider store={store}>
    <Switch> 
      <Route path="/main/*" component={Routes} />
      <Route path="/" exact component={HomePage} ></Route>
    </Switch>
  </Provider>
);

export default App;
