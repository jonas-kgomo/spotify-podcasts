import React, { Component } from 'react';
import { token } from './components/spotify.js';
import styled from 'styled-components';
import Login from './components/Login.js';
import Home from './components/Home.js';



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
      <div style={{ height:'100%', minHeight:'100vh' }}>
        

        {token ? <div>
                 <Home/> </div> : <Login />}
      </div>
    );
  }
}

export default App;