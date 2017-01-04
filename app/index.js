import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './scenes/login.scene';
export default Login;

import Sign from './scenes/sign.scene.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} initial={true} />
          <Scene key="sign" component={Sign} title="Sign" />
        </Scene>
      </Router>
    );
  }
};
