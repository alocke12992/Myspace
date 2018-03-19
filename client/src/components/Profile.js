import React from 'react';
import { connect } from 'react-redux'
import { getBios, addBio } from '../actions/bios'
import { getPosts } from '../actions/posts'
import Posts from './Posts'
import Bio from './Bio';
import { Grid, Segment, Image } from 'semantic-ui-react';
import MyFriends from './MyFriends'
class Profile extends React.Component
{

  showMore = () =>
  {
    return (
      <div>

      </div>
    )
  }

  render()
  {
    // { isAdmin ? this.showMore() : null) }
    const { user } = this.props
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
          </Grid.Column>
          <Grid.Column>
            <Segment.Group>
              {/* Status and Mood */ }
              <Segment>
                <Posts />
              </Segment>
            </Segment.Group>
            <Segment.Group>
              {/* Friends */ }
              <MyFriends />
              <Segment>My Friends</Segment>
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

const mapStateToProps = ( state, props ) =>
{
  return {
    user: state.user,

  }
}

export default connect( mapStateToProps )( Profile )