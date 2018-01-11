import React, { Component } from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router-dom';

export class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp(){
    console.log('this.state', this.state );
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log('error ', error);
      this.setState({error})
    })
  }


  render(){
    return(
      <div className="form-inline" style={{margin: '0 auto', width:'800px'}} >
        <h2>Sign Up</h2>
        <div className="form-group">
          <input type="text" style={{marginRight: '5px'}}
            className="form-control" placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          /><br/><br/>
          <input type="password" style={{marginRight: '5px'}}
            className="form-control" placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          /><br/><br/>
          <button className="btn btn-success" onClick={this.signUp} >Sign Up</button>
        </div>
        <p>{this.state.error.message}</p> 
        <div><Link  to="/signin">For Sign In</Link></div>

      </div>
    )
  }
}