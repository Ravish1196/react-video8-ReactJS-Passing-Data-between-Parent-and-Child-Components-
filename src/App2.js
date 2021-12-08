import React, { Component } from 'react';
import './style.css';

export class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  parentHandler = (e) => {
    console.log('parent clicked', e.target.value);
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Parent Component {this.props.name}</h1>
        <ChildComponent
          clickHandler={this.parentHandler}
          source={this.state.name}
        />
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
        <input type="text " onChange={(e) => this.props.clickHandler(e)} />
        <button onClick={() => this.props.clickHandler('ravish')}>
          dabao muje
        </button>
      </div>
    );
  }
}
