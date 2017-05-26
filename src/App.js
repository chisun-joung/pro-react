import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var place = "world"
    return (
      <h1>Hello {place}</h1>
    );
  }
}

export class GroceryList extends Component {
  render() {
    return (
      <ul>
        <ListItem quantity="1" name="Bread" />
        <ListItem quantity="2" name="Eggs" />
        <ListItem quantity="3" name="Milk" />
      </ul>
    )
  }
}

class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.quantity} x {this.props.name}
      </li>
    );
  }
}

export default App;
