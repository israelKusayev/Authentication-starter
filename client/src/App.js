import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from './actions/authActions';
import './utils/axiosSettings';

import ReduxToastr from 'react-redux-toastr';
import NavBar from './components/navbar/mainNavbar';
import Home from './components/home';
import Loading from './components/loading';
import NotFound from './components/notFound';

class App extends Component {
  componentDidMount = () => {
    this.props.loadUser();
  };

  render() {
    return (
      <>
        <NavBar />
        <Loading />

        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/not-found' component={NotFound} />
          <Route path='/' exact={true} component={Home} />
          <Redirect to='/not-found' />
        </Switch>
        <ReduxToastr />
      </>
    );
  }
}

export default connect(
  null,
  { loadUser }
)(App);
