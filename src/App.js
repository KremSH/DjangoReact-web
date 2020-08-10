
import logo from './logo.svg';
import './App.css';
import React, {Component , Fragment} from 'react';
import {Route , Switch} from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from './layout/Header'
import Dashboard from './Music/Dashboard'
import Music from './Music/Music'
import Song from './Music/Song'
import Album from './Music/Album'
import Footer from './Music/Footer'
import Base from './Music/Base'
import Artist from './Music/Artist'

class App extends React.Component{

//data render
render(){
return(
    <Fragment>
        <Header />
      <div>
      <Switch>
      <Route path="/Song" exact component= {Song}/>
      <Route path="/" exact component= {Dashboard}/>
      <Route path="/Base" exact component ={Base}/>
      <Route path="/Album" exact component ={Album}/>
      <Route path="/Artist" exact component ={Artist}/>
      </Switch>
      </div>
     
        <Footer />

    </Fragment>
);

}
}
export default App;
