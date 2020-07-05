import React from 'react';
import styled from 'styled-components/macro';

/* const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://spotify-profile.herokuapp.com/login'; */
const LOGIN_URI = 'http://localhost:8888/login';

const Center = styled.div`  
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;



const LoginButton = styled.a`
  display: inline-block;
  background-color: green;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  padding: 17px 35px;
  margin: 20px 0 70px;
  min-width: 160px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  &:hover
`;

const Login = () => (
  <Center >
    <h1>PodCatch</h1>
    <LoginButton href={LOGIN_URI}>Log with Spotify</LoginButton>
  </Center>
);

export default Login;