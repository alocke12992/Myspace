import React, { Component } from 'react';
import { Menu, Segment, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import Users from './Users'
import MyFriends from './MyFriends'
import Profile from './Profile'
import axios from 'axios'
import myspace_logo from './myspace_logo.jpg'

class NavBar extends Component
{



  rightNavs = () =>
  {
    const { user, dispatch, history } = this.props;
    if ( user.id )
    {
      return (
        <Menu.Menu position='right'>
          <Link to='/my_friends'>
            <Menu.Item name='My Friends' />
          </Link>
          <Link to='/profile'>
            <Menu.Item name="My Profile" />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={ () => dispatch( handleLogout( history ) ) }
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render()
  {
    const backgroundStyle =
      {
        backgroundColor: "#063796"
      }
    return (
      <div >
        <Segment style={ backgroundStyle }>
          <img src={ require( './myspace.gif' ) } />
        </Segment>
        <Segment>
          <Menu pointing secondary>
            <Link to='/'>
              <Menu.Item name='home' />
            </Link>
            { this.rightNavs() }
          </Menu>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state =>
{
  return { user: state.user, users: state.users };
};

export default withRouter( connect( mapStateToProps )( NavBar ) );
