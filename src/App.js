import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
constructor(){
  super();
  this.state = {
    greet: "Hi Taja!"
  }
}

  render() {
    return(
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
              {this.state.greet}
              </p>
              <button 
              onClick={() => this.setState(
                { greet: 'Welcome back Taja!' })}
                > 
                Click Here!
              </button>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
    )
  }
}

export default App;
