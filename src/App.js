import React, {Component} from 'react';

import {CardList} from './components/card-list/component.card-list';

import {SearchBox} from './components/search-box/search-box.component';

import './App.css';


class App extends Component {
constructor() {
  super();

  this.state = {
    monsters: [],
    searchField: ''
};

  // this.handleChange = this.handleChange.bind(this); <- So instead of creating handlelChange(e){}, I made it into an arrow function which eliminated the need to write this.handleChange method. This way, we don't have to bind every class method that is written.

}

componentDidMount(){
  fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters : users})
    );
}

  handleChange = (e) => {
    this.setState({searchField: e.target.value })
  }


  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
          <div className='App'>
            
          <h1>Monsters Rolodex </h1>
          <SearchBox 
            placeholder= 'search monsters'
            handleChange= {this.handleChange}
            />

          <CardList monsters = {filteredMonsters}/ >
          </div>
    );
  }
}

export default App;
