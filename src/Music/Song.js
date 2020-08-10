

import React, {Component , Fragment} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import  gql  from 'graphql-tag';
import { ApolloProvider , Query } from 'react-apollo';


const client = new ApolloClient({

    uri: 'http://127.0.0.1:8000/graphql'

});

const SONGS_QUERY = gql`
            query {allSongs {
                Name
                Genre
                Artist
                Album
      }
      }
    `;

class Song extends React.Component{


  render(){
    return(
      <Fragment>
  <ApolloProvider client= {client}>
  <div>
  <Query query={SONGS_QUERY}>
    {({loading , data})=>{

    if(loading) return "Loading...";
    const { allSongs } = data;
    return allSongs.map(song => <div class="GFont"> <li>
        <u>Name</u>:&nbsp;&nbsp;&nbsp;{song.Name}
        <ul>
        <li>
        <b>Genre</b>:&nbsp;&nbsp;&nbsp;{song.Genre}</li>
        <li><b>Artist</b>:&nbsp;&nbsp;&nbsp;{song.Artist}</li>
        <li><b>Album</b>:&nbsp;&nbsp;&nbsp;{song.Album}
        </li>
        </ul>
        </li>
        </div>);
    }}

  </Query>
  </div>
  </ApolloProvider>
      </Fragment>
    );
  }
}
export default Song;

