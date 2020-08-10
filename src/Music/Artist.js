import React, {Component , Fragment} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import  gql  from 'graphql-tag';
import { ApolloProvider , Query } from 'react-apollo';


const client = new ApolloClient({

    uri: 'http://127.0.0.1:8000/graphql'

});

const ARTISTS_QUERY = gql`
            query {allArtists {
                Name
                Form
                Album
                Song
                PreferredGenre
                DateOfFormationorBirth
                Bio
      }
      }
    `;

class Artist extends React.Component{


  render(){
    return(
      <Fragment>
  <ApolloProvider client= {client}>
  <div>
  <Query query={ARTISTS_QUERY}>
    {({loading , data})=>{

    if(loading) return "Loading...";
    const { allArtists } = data;
    return allArtists.map(artist => <div class="GFont"><li>
        <u>Name</u>:&nbsp;&nbsp;&nbsp;{artist.Name}
        <ul>
        <li>
        <b>Type</b>:&nbsp;&nbsp;&nbsp;{artist.Form}</li>
        <li><b>Albums</b>:&nbsp;&nbsp;&nbsp;{artist.Album}</li>
        <li><b>Songs</b>:&nbsp;&nbsp;&nbsp;{artist.Song}
        </li>
        <li><b>Preferred Genre</b>:&nbsp;&nbsp;&nbsp;{artist.PreferredGenre}
        </li>
         <li><b>Date Of Birth or Formation</b>:&nbsp;&nbsp;&nbsp;{artist.DateOfFormationorBirth}
        </li>
         <li><b>Bio</b>:&nbsp;&nbsp;&nbsp;{artist.Bio}
        </li>
        </ul>
        </li></div>);
    }}

  </Query>
  </div>
  </ApolloProvider>
      </Fragment>
    );
  }
}
export default Artist;

