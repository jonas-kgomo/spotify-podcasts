import React, { Component } from 'react';
//import { Link } from '@reach/router';
import { getUserInfo, logout } from './spotify';



import styled from 'styled-components/macro';

// cover profile image
const Profile = styled.div`
display: inline-block;
margin: 14px;
width: 250px;
height: 250px;
  img { 
    border: 2px black solid;
    width: 100%;
    height: 100%;
    border-radius: 50%;
   object-fit: cover;
  }
`;


const UserName = styled.a`
  &:hover,

`;
const Name = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin: 20px 0 0;
`;

const LogoutButton = styled.a`
  background-color: black;
  color: white;
  border: 1px solid: white;
  border-radius: 30px;
  margin-top: 30px;
  padding: 12px 30px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  &:hover,
  &:focus {
    background-color: white;
    color: black;
  }
`;


class Home extends Component {
  state = {
    user: null,
/*     followedArtists: null,
    playlists: null,
    topArtists: null,
    topTracks: null, */
  };

  componentDidMount() {
    console.log(this.getData().user);
  }
  



  async getData() {
    const { user } = await getUserInfo();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
  //  const totalPlaylists = playlists ? playlists.total : 0;

    return (
      <React.Fragment>
          {user ? (
             <div>  
              
             <Profile>
               {user.images.length> 0  ? (
                  <img src={user.images[0].url} alt='urpic' />
                   ) : (<div>IMG</div> )}
              
             </Profile>
             <UserName href={user.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <Name> {user.display_name}</Name>
              </UserName>
             
              <LogoutButton onClick={logout}>Logout</LogoutButton>
              </div> ) : 
            (
            <div>Loading
                   <LogoutButton onClick={logout}>Logout</LogoutButton>
                   
            <div> no podcasts</div>
             
            </div>
            ) }
    </React.Fragment>
     
    );
  }
}

export default Home;