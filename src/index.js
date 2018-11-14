import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// For offline function and faster loading, change
// unregister() to register() below. Note some pitfalls.
// More about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
