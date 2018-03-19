import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'

class MyFriends extends React.Component
{
  state = { users: [] }

  componentDidMount()
  {
    axios.get( '/api/my_friends' )
      .then( res =>
      {
        this.setState( { users: res.data } )
        this.props.dispatch( { type: "HEADERS", headers: res.headers } )
      } )
  }

  count = () =>
  {
    let { users } = this.state
    return users.length
  }


  render()
  {
    let { users } = this.state
    return (
      <div>
        <div> You have { this.count() } Friends </div>
        <Card.Group itemsPerRow={ 4 }>
          { users.map( user =>
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
            </Card>
          )
          }
        </Card.Group>
      </div>
    )
  }
}

export default connect()( MyFriends )