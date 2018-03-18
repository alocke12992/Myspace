import React from 'react';
import { connect } from 'react-redux'
import { getBios, addBio } from '../actions/bios'
import { getPosts } from '../actions/posts'
import Posts from './Posts'
import Bio from './Bio';
import { Grid, Segment } from 'semantic-ui-react';

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
    return (
      <div>
        <Grid>
          <Segment.Group horizontal>
            {/* main info section  */ }
            <Segment>These will be the details</Segment>
          </Segment.Group>
        </Grid>
        <Grid columns={ 2 } relaxed>
          <Grid.Column>
            <Segment.Group>
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
              {/* Activity stream */ }
              <Segment>Activity Stream </Segment>
            </Segment.Group>
            <Segment.Group>
              {/* Friends */ }
              <Segment>Top Friends</Segment>
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

export default connect()( Profile )