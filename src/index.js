import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import App, { ParentComponent } from './App';
import App1, { ParentComponent } from './App1';

ReactDOM.render(
  <ParentComponent name="bulla" />,
  document.getElementById('root')
);
