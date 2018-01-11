import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import {firebaseApp} from './firebase';
import { App } from './components/App';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
// import { createBrowserHistory } from 'history'


firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    console.log('User not logged in yet should have to login first', user);
  }else{
    console.log('User have to login for use this app', user);
  }
})


ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Main App</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
    </div>
  </Router>
  , document.getElementById('root')
)