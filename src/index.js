import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Layout from 'layout';
import Gramventures from 'gramventures';
import SignIn from 'signin';
import Home from './components/layout/Home.js';
import Signup from './components/layout/Signup.js';
import Connect from './components/api/Connect.js';
import Submissions from'./components/layout/Submissions.js';


import 'applicationStyles';
import 'bootstrap';

ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="gramventures" component={Gramventures} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={Signup} />
      <Route path='/connect' component={Connect} />
      <Route path='/submissions' component={Submissions} />
      
    </Route>
  </Router>,
  document.getElementById('app')
);