import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import jumboImage from './jumbo.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <Navbar inverse>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jonathan Casanueva Willumsen</h1>
        </header>
        
        <div>
        <Jumbotron background-image={jumboImage}>
          <Grid>
            <h1>Welcome!</h1>
          <img src={jumboImage}/>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="https://www.mutantyearzero.com/#1"
                target="_blank">
                Current Project
              </Button>
            </p>
          </Grid>
        </Jumbotron>
        </div>
      </div>
    );
  }
}

export default App;
