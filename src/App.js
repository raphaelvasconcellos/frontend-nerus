import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './container/Home';

class App extends Component {
  render() {
    const logo = 'Nerus App'
    return (
      <div className="container">
        <NavBar logo={logo} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
