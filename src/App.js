
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
        {/*{this.state.Sdata.map(song=>{
        return(
        <li>
        <u>Name</u>:&nbsp;&nbsp;&nbsp;{song.Name}
        <ul>
        <li>
        <b>Genre</b>:&nbsp;&nbsp;&nbsp;{song.Genre}</li>
        <li><b>Artist</b>:&nbsp;&nbsp;&nbsp;{song.Artist}</li>
        <li><b>Album</b>:&nbsp;&nbsp;&nbsp;{song.Album}
        </li>
        </ul>
        </li>
        );
        })}*/}

        {/*{this.state.Adata.map(Artist=>{
        return(
        <li>
        <u>Name</u>:&nbsp;&nbsp;&nbsp;{Artist.Name}
        <ul>
        <li>
        <b>Type</b>:&nbsp;&nbsp;&nbsp;{Artist.Type}</li>
        <li style={{width:300 , overflowWrap: "break-word"}}><b>Albums</b>:&nbsp;&nbsp;&nbsp;{Artist.Album}</li>
        <li style={{width:300 , overflowWrap: "break-word"}}><b>Songs</b>:&nbsp;&nbsp;&nbsp;{Artist.Song}
        </li>
        <li><b>Date of Birth or Formation</b>:&nbsp;&nbsp;&nbsp;{Artist.DateOfFormationorBirth}
        </li>
        <li style={{width:300 , overflowWrap: "break-word"}}><b>Bio</b>:&nbsp;&nbsp;&nbsp;{Artist.Bio}</li>
        </ul>
        </li>
        );
        })}*/}

        {/*{this.state.Aldata.map(Album=>{
        return(
        <li>
        <u>Name</u>:&nbsp;&nbsp;&nbsp;{Album.Name}
        <ul>
        <li>
        <b>Genre</b>:&nbsp;&nbsp;&nbsp;{Album.Genre}</li>
        <li style={{width:300 , overflowWrap: "break-word"}}><b>Songs</b>:&nbsp;&nbsp;&nbsp;{Album.Song}</li>
        <li><b>Artist</b>:&nbsp;&nbsp;&nbsp;{Album.Artist}
        </li>
        <li><b>Date Published</b>:&nbsp;&nbsp;&nbsp;{Album.DatePublihsed}
        </li>
        </ul>
        </li>
        );
        })}*/}
        <Footer />

    </Fragment>
);

}
}
export default App;
