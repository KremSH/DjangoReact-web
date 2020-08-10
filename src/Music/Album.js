

import React, {Component , Fragment} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import  gql  from 'graphql-tag';
import { ApolloProvider , Query } from 'react-apollo';


const client = new ApolloClient({

    uri: 'http://127.0.0.1:8000/graphql'

});

const ALBUMS_QUERY = gql`
            query {allAlbums {
                Name
                Genre
                Artist
                Song
                DatePublihsed
      }
      }
    `;

class Album extends React.Component{


  render(){
    return(
      <Fragment>
  <ApolloProvider client= {client}>
  <div>
  <Query query={ALBUMS_QUERY}>
    {({loading , data})=>{

    if(loading) return "Loading...";
    const { allAlbums } = data;
    return allAlbums.map(album => <div class="GFont"><li>
        <u>Name</u>:&nbsp;&nbsp;&nbsp;{album.Name}
        <ul>
        <li>
        <b>Genre</b>:&nbsp;&nbsp;&nbsp;{album.Genre}</li>
        <li><b>Artist</b>:&nbsp;&nbsp;&nbsp;{album.Artist}</li>
        <li><b>Songs</b>:&nbsp;&nbsp;&nbsp;{album.Song}
        </li>
        <li><b>Date Published</b>:&nbsp;&nbsp;&nbsp;{album.DatePublihsed}
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
export default Album;

