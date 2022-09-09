import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Wagon from "./components/Wagon/Wagon";
import SingleItem from "./components/SingleItem/SingleItem";
import { SideBar } from "./components/SideBar";
import { Calendar } from "./components/Calendar";
import AddMoney from "./components/AddMoney/AddMoney";
import Wallet from "./components/Wallet/Wallet";

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <SideBar>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path='/calendar' component={Calendar}></Route>
          <Route exact path='/addMoney' component={AddMoney}></Route>
          <Route exact path='/wallet' component={Wallet}></Route>
          <Route exact path="/wagon" component={Wagon} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
        </SideBar>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.ship.currentItem,
  };
};

export default connect(mapStateToProps)(App);
