import React, { Component } from 'react';
import './App.css';
import { CartList } from './components/cart-list/cart-list.component';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor() {
    new Component();
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(responce => responce.json()).then(users => this.setState({ "monsters": users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search for a monster" handleChangeFunction={e => this.setState({ searchField: e.target.value })} />
        <CartList monsters={filteredMonsters} />
      </div>
    )
  };

}

export default App;
