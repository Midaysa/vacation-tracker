import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './layout/Header';
import Login from './accounts/Login';
import Register from './accounts/Register';

class App extends Component {
  render() {
    return (
    	<Router>
    		<Header />
    		<Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
    		</Switch>
    	</Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));