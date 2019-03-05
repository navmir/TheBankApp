import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Navigation from './components/navigation/Navigation'
import Path from './components/path/Path';
import Start from './components/start/Start';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ApplyLoan from './components/apply-loan/ApplyLoan';
import './App.scss'

const styles = theme => ({
  toolbarTitle: {
    flex: 1,
    fontWeight: '600',
  },
  content: {
    marginLeft: 'auto', [theme.spacing.unit * 3]: {},
    marginRight: 'auto', [theme.spacing.unit * 3]: {},
    maxWidth: 1100,
  }
});

class App extends Component {
  render () {
   const { classes } = this.props;
    return (
    <div>
    <CssBaseline />
        <div className="nav-back">
            <div className="nav">
                <div className="ffcg-logo"></div>
                <Navigation />
            </div>
            <div className="heading">
                <Typography
                  component="h1"
                  variant="h2"
                  color="inherit"
                  align="center"
                  className={classes.toolbarTitle}>
                  Forefront Bank
                </Typography>
            </div>
        </div>
        <div className={classes.content}>
         <Switch>
            <Route exact path='/' component={Start} />
            <Route path='/ansokan' component={ApplyLoan} />
            <Route path='/logga-in' component={Login} />
            <Route path='/registrera' component={Register} />
            <Route component={Path} />
        </Switch>
        </div>
    </div>
    );
  }
}

export default withStyles(styles)(App)
