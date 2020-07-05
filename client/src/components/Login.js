import React from 'react';
import styled from 'styled-components/macro';

/* const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://spotify-profile.herokuapp.com/login'; */
const LOGIN_URI = 'http://localhost:8888/login';

const LoginButton = styled.a`
  display: inline-block;
  background-color: green;
  color: white;
  border-radius: 30px;
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
  <div>
    <h1>Spotify Profile</h1>
    <LoginButton href={LOGIN_URI}>Log in to Spotify</LoginButton>
  </div>
);

export default Login;