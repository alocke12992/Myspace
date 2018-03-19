import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Users from './Users';
import UserView from './UserView';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';
import axios from 'axios'

class FetchUserProfiles extends React.Component
{
  state = { users: [], loaded: false }

  componentDidMount()
  {
    axios.get( '/api/users' )
      .then( res => this.setState( { users: res.data, loaded: true } ) )
  }


  render()
  {
    const { loaded } = this.state;
    if ( loaded )
    {
      return (
        <div>
          <Route exact path='/users' component={ Users } />
          <Route
            exact
            path='/users/:id'
            component={ UserView }
          />
        </div>
      )
    } else
    {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()( FetchUserProfiles )