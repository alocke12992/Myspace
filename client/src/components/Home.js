import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Card, Icon, Image } from 'semantic-ui-react'

class Home extends Component
{
  state = { users: [] }

  componentDidMount()
  {
    axios.get( '/api/users' )
      .then( res => this.setState( { users: res.data } ) )
  }

  addFriend = ( id ) =>
  {
    let { users } = this.state
    axios.put( `/api/users/${ id }` )
      .then( () => this.setState( { users: users.filter( u => u.id !== id ) } ) )
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
        <Header as='h1' textAlign='center'>Home Component
        </Header>
        <Link to='/profile'>My Profile</Link>
        <Card.Group itemsPerRow={ 4 }>
          { this.users() }
        </Card.Group>
      </div>

    );
  }
}

export default Home;
