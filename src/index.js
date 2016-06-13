import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'main';
import Gramventures from 'gramventures';
import 'applicationStyles';
import 'bootstrap';

//require('style!css!bootstrap/dist/css/bootstrap.min.css')
//$(document).bootstrap();

//require('style!css!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="gramventures" component={Gramventures}/>
      
    </Route>
  </Router>,
  document.getElementById('app')
);