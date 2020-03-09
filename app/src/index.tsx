import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import http from './api/http'
import './index.css';
import App from './App';

declare module 'react' {
  interface Component {
    $http: any
  }
}

Component.prototype.$http = http

ReactDOM.render(<App />, document.getElementById('root'));
