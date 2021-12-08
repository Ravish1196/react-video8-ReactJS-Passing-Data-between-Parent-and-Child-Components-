import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App, { ParentComponent } from './App';

ReactDOM.render(
  <ParentComponent name="bulla" />,
  document.getElementById('root')
);
