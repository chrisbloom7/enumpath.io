import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enumerable: '',
      path: '',
      results: ''
    };
    this.getResults = this.getResults.bind(this);
  }

  getResults() {
    this.setState({
      enumerable: '{ food: %w(pizza tacos) }',
      path: 'food.0',
      results: '["pizza"]'
    });
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={this.getResults}
          style={{marginTop: '25vh'}}
          >
          Get Results
        </button>
        <p>{this.state.results}</p>
      </div>
    );
  }
}

export default App;
