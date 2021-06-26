import React, { Component } from 'react';
import { Button } from './Button';

/**
 * 
 * Question One
 * 
 * Let's start out with a simple counter
 * 
 * Please create a h1 header with the text "Counter: " and the number of times a button has been pressed
 * 
 * Add the button bellow the h1 header. 
 * 
 * If the button has been pressed 4 times, the header should have the following text "Counter: 4"
 * 
 */

 class One extends Component {
  // Constructor initialize state to one
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  // Counter increment 
  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <br/>
        <Button
          count={this.state.count}
          updateCount={this.handleCount.bind(this)}
        />
      </div>
    );
  }
}

export default One;