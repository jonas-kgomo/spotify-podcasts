import React, { Component } from 'react';
//import { Link } from '@reach/router';
import { getUserInfo, logout } from './spotify';


import styled from 'styled-components/macro';

// cover profile image
const Profile = styled.div`
display: inline-block;
margin: 30px;
width: 200px;
height: 200px;
  img { 
    border: 3px white solid;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const UserName = styled.a`
  color: grey;
  text-decoration: none;
  margin: 30px 20px;
  padding: 20px 30px;

`;
const Name = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 0;
`;

const LogoutButton = styled.button`
  background-color: gray;
  color: white;
  border: 1px gray ;
  border-radius: 30px;
  margin: 20px;
  margin-left: 0px;
  align: left;
  padding: 10px 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  cursor: point;
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
             <Flex>  
              
             <Profile> {user.images.length> 0  ? ( 
             <img src={user.images[0].url} alt='urpic' /> ) : 
             (<div>IMG</div> )}

               
             </Profile>
           <div>
           <UserName href={user.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <h6>PROFILE</h6>
                <Name> {user.display_name}</Name>
                
           </UserName>
           <LogoutButton onClick={logout}>Logout</LogoutButton> </div>
           
           
            
            </Flex> ) : 
            (
            <div>Loading </div>
            ) }
    </React.Fragment>
     
    );
  }
}

export default Home;