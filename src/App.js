import React, { Component } from 'react';
import './style.css';

export class ParentComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Parent Component {}</h1>
        <ChildComponent source={this.props.name} />
      </div>
    );
  }
}

export class ChildComponent extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h2>Child Component {this.props.source}</h2>
      </div>
    );
  }
}
