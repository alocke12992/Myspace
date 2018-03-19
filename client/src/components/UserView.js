import React from 'react'
import { connect } from 'react-redux'
import axios from "axios";
import { Grid, Segment, Image } from 'semantic-ui-react';
import Bio from './Bio';
import MyFriends from './MyFriends'
import Posts from './Posts'

class UserView extends React.Component
{
  state = { user: {} }

  componentDidMount()
  {
    axios.get( `/api/users/${ this.props.match.params.id }` )
      .then( res =>
      {
        this.setState( { user: res.data, type: 'HEADERS', headers: res.headers } )
        debugger
      } );
  }
  render()
  {
    const { user } = this.state
    return (
      <div>
        <Grid centered>
          <Segment.Group>
            {/* main info section  */ }
            <Image src={ user.image } />
            <Segment>
              <h3>{ user.name }</h3>
            </Segment>
          </Segment.Group>
        </Grid>
        <Grid columns={ 2 } relaxed>
          <Grid.Column>
            <Segment.Group textAlign="center">
              {/* Details section */ }
              Details section
              <Segment>
                <Bio />
              </Segment>
              <Segment>
                Interests
              </Segment>
              <Segment>
                Books
              </Segment>
            </Segment.Group>
            <Segment.Group>
              <Segment>
                Basic Details
              </Segment>
            </Segment.Group>
            <Segment.Group>
              {/* Friends */ }
              <Segment>My Friends</Segment>
              <MyFriends />
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group>
              {/* Status and Mood */ }
              <Segment>
                <Posts />
              </Segment>
            </Segment.Group>
            <Segment.Group>
              {/* Activity stream */ }
              <Segment>Activity Stream </Segment>
            </Segment.Group>
            {/* Comments */ }
            <Segment>Comments</Segment>
            <Segment.Group>

            </Segment.Group>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect()( UserView );