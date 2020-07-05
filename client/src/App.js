import React, { Component } from 'react';
import { token } from './components/spotify.js';
import styled from 'styled-components';
import Login from './components/Login.js';
import Home from './components/Home.js';
import { createGlobalStyle } from "styled-components";



const GlobalStyle= createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  body {
    font-family: 'Inter', sans-serif;
  }
`

const Style = styled.div`
  height: 100%;
  min-height:100vh;
  margin: 0px;
  background-color: #181818;
`;

class App extends Component {
  state = {
    token: '',
  };

  componentDidMount() {
    this.setState({ token });
    console.log('TOKEN: ' +  token);
  }

  render() {
    const { token } = this.state;

    return (
      <React.Fragment>
      <GlobalStyle/>
        <Style>
        {token ?   <Home/> : <Login />}
       </Style>
  
      </React.Fragment>
    );
  }
}

export default App;