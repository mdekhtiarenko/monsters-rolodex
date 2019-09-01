import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    new Component();
    super();

    this.state = {
      monsters: [
        {
          "id": 1,
          "name": "Frankenshtein"
        },
        {
          "id": 2,
          "name": "Dracula"
        },
        {
          "id": 3,
          "name": "Zombie"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App" >
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    )
  };




}

export default App;
