import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { Login, Signup, Contacts, NotFound } from '../';

class Container extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/singup' component={Signup}/>
          <Route path='/contacts' component={Contacts}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Container;