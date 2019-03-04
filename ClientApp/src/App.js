import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Start from './components/start/Start';
import Login from './components/login/Login';
import ApplyLoan from './components/apply-loan/ApplyLoan';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Start} />
        <Route path='/ansokan' component={ApplyLoan} />
        <Route path='/logga-in' component={Login} />
      </Layout>
    );
  }
}
