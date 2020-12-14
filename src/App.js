import './App.css';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Summary from './components/Summary';
import Home from './components/Home';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>        
          <Route path="/Summary" component = {Summary}/>  
          <Route path="/Home" component = {Home}/> 
          <Route path="/Test" component = {Test}/>   
        </Switch>
      </BrowserRouter>
    );
  } 
}

export default App ;
