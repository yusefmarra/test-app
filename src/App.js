import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Header from './header';
import Signup from './signup';
import Input from './input';

class App extends Component {
  renderContent() {
    const { route } = this.props
    if (route === '/account') {
      return (
        <Input />
      )
    }
    else {
      return (
        <Signup />
      )
    }
  }
  render() {
    return (
      <Header>
        {this.renderContent()}
      </Header>
    );
  }
}

function mapStateToProps({ route }) {
  return {
    route
  }
}

export default connect(mapStateToProps)(App);
