import './App.css';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Summary from './components/Summary';
import Home from './components/Home';
import Test from './components/Test';
import IncidentAnalysis from './components/IncidentAnalysis';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>        
          <Route path="/Summary" component = {Summary}/>  
          <Route exact="true" path="/" component = {Home}/> 
          <Route path="/Test" component = {Test}/> 
          <Route path="/IncidentAnalysis" component = {IncidentAnalysis}/>   
        </Switch>
      </BrowserRouter>
    );
  } 
}

export default App ;
