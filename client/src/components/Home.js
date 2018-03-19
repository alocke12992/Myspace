import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Card, Icon, Image, Segment, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import MyFriends from './MyFriends'
import Users from './Users'

class Home extends Component
{
  state = { users: [] }

  componentDidMount()
  {
    axios.get( '/api/take_four' )
      .then( res =>
      {
        this.setState( { users: res.data } )
        this.props.dispatch( { type: 'HEADERS', headers: res.headers } )
      } )
  }

  addFriend = ( id ) =>
  {
    let { users } = this.state
    axios.put( `/api/users/${ id }` )
      .then( res =>
      {
        this.setState( { users: users.filter( u => u.id !== id ) } )
        this.props.dispatch( { type: 'HEADERS', headers: res.headers } );
      } )
  }
  users = () =>
  {
    const { users } = this.state
    return users.map( user =>
      <Card key={ user.id }>
        <Image src={ user.image } />
        <Card.Content>
          <Card.Header>
            <Link to={ `/users/${ user.id }` }>{ user.name }</Link>
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined { user.created_at }
            </span>
          </Card.Meta>
          <Card.Description>
            Description will go here
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a onClick={ () => this.addFriend( user.id ) }>
            <Icon name='add user' />
            Add Friend
          </a>
        </Card.Content>
      </Card>
    )
  }
  render()
  {
    return (
      <div>
        <Header as='h1' textAlign='center'>Welcome to MyFace
        </Header>
        <Segment.Group>
          <Segment >Check out these cool users</Segment>
          <Segment padded="very">
            <Card.Group itemsPerRow={ 4 }>
              { this.users() }
            </Card.Group>
            <Link to='/users'>Find Friends</Link>
          </Segment>
        </Segment.Group>
      </div>

    );
  }
}


export default connect()( Home );
