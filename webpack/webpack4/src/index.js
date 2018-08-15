console.log('i am index.js child')

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'; // will work w/ .jsx extension as well , just wanted to test for rendering of pure .js file by react w/ webpack 4

ReactDOM.render(<h1> i should be here instead <App/></h1>, document.getElementById('app'));
