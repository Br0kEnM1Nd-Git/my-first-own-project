import { AppWrapper, ChangingDiv } from './Helpers/Components.styled';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    backgroundColor: 'green',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({});
  };

  handleChange = e => {
    this.setState({ backgroundColor: e.target.value });
  };

  render() {
    return (
      <AppWrapper>
        <form onSubmit={this.handleSubmit}>
          <span>Change color</span>
          <input type="text" onChange={this.handleChange}></input>
        </form>
        <ChangingDiv backgroundcolor={this.state.backgroundColor} />
      </AppWrapper>
    );
  }
}

export default App;
