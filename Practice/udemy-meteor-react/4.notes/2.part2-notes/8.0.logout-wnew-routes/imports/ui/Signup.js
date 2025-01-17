import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import {Session} from 'meteor/session';

export class Signup extends React.Component{

  //////set state/////////
  constructor(props) {
    super(props);
    this.state = {
      privacy: 'unauth',
      error: ''
    };
  }///////////////////////

  //////take page back if no auth/////
  componentWillMount(){
    if(Meteor.userId()) {
        this.props.history.replace('/links');
    }
    Session.set('currentPagePrivacy', this.state.privacy);
  }//////////////////////////////////

  ////////error handler////
  onSubmit(e) {
    e.preventDefault();
    //trim gets rid of before and after trailing spaces
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if(password.length < 3) {
      return this.setState({error: 'Password must be more than 2 chars long'});
    }

    this.props.createUser({email, password}, (err) => {
      //if else
      err ? this.setState({error: err.reason}) : this.setState({error: ''});
    });

   }/////////////////////////

  //////////render component////////
  render(){
    return(
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="email" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button className="button">Create Account</button>
          </form>

          <Link to="/">Already have an account?</Link>
        </div>
      </div>
    );
  }/////////////////////////////////
}

/////////////////////////////////////////
Signup.propTypes = {
  createUser: PropTypes.func.isRequired
};//////////////////////////////////////////////////////////

export default createContainer(() => {
  return {
    createUser: Accounts.createUser
  };
}, Signup);
