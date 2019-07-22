import React, { Component } from 'react';
import logo from './logo.jpg';
class LandingPage extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={logo} alt="Landing Image" />
      </div>
    );
  }
}

export default LandingPage;