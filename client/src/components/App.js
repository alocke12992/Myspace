import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import UserView from './UserView';
import Posts from './Posts'
import Profile from './Profile'


class App extends Component
{


  render()
  {
    return (
      < div >
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={ Home } />
            <AuthRoute exact path='/login' component={ Login } />
            <AuthRoute exact path='/register' component={ Register } />
            <ProtectedRoute exact path='/profile' component={ Profile } />
            <Route exact path='/users/:id' component={ UserView } />
            <Route exact path='/posts' component={ Posts } />
            <Route component={ NoMatch } />
          </Switch>
        </FetchUser>
      </div >
    );
  }
}

export default App;
