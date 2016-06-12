import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'applicationStyles';
import 'bootstrap';

//require('style!css!bootstrap/dist/css/bootstrap.min.css')
//$(document).bootstrap();

//require('style!css!applicationStyles')

ReactDOM.render(<App />, document.getElementById('app'));