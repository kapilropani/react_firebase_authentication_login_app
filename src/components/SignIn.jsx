import React, { Component } from 'react';
import {firebaseApp} from '../firebase';
import {Link } from 'react-router-dom';

export class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
    this.signIn = this.signIn.bind(this);
  }

  signIn(){
    console.log('this.state', this.state );
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      console.log('error ', error);
      this.setState({error})
    })
  }


  render(){
    return(
      <div className="form-inline" style={{margin: '0 auto', width:'800px'}} >
        <h2>Sign In</h2>
        <div className="form-group">
          <input type="text" 
            className="form-control" placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          /><br/><br/>
          <input type="password" 
            className="form-control" placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          /><br/><br  />
          <button className="btn btn-success" onClick={this.signIn} >Sign In</button>
        </div>
        <p>{this.state.error.message}</p> 
        <div><Link  to="/signup">For Sign Up</Link></div>
        
      </div>
    )
  }
}