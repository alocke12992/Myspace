import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editBio, addBio, getBios } from '../actions/bios';
import { getPosts } from '../actions/posts';
import { Container, Button, Card, Icon, Grid, Segment, Form, } from 'semantic-ui-react';

class Posts extends React.Component
{
  state = { bio: " ", showform: false }

  componentDidMount()
  {
    this.props.dispatch( getPosts(), getBios() )
  }

  toggleForm = () =>
  {
    this.setState( state =>
    {
      return { showForm: !state.showForm }
    } )
  }

  handleChange = ( e ) =>
  {
    debugger
    const { name, value } = e.target
    this.setState( { [name]: value } )
  }

  handleSubmit = ( e ) =>
  {
    e.preventDefault()
    let bio = {
      bio: this.state.bio,
      user_id: this.props.coolPerson.id
    }
    this.props.dispatch( addBio( bio ) )
    this.setState( { bio: '', showForm: false } )
  }

  form()
  {

    const { bio } = this.props
    return (
      <div>
        <Form >
          <Form.TextArea
            name="bio"
            required
            defaultValue={ bio }
            onChange={ this.handleChange }
            label="Add a bio"
          />
          <Form.Button size="mini" onClick={ this.handleSubmit }>Save</Form.Button>
        </Form>
      </div>
    )
  }

  posts = () =>
  {
    const { coolPerson, posts } = this.props
    return posts.map( post =>

      <Card key={ post.id }>
        <Card.Content>
          { post.name }
          <Card.Header>
            { post.title }
          </Card.Header>
          <Card.Description>
            { post.body }
          </Card.Description>
          <Icon name='favorite' />
        </Card.Content>
      </Card>
    )
  }



  bio = () =>
  {
    return this.props.bio.map( bio =>
      <div key={ bio.id }>
        <p>{ bio.bio }</p>
      </div>
    )
  }

  render()
  {
    const { showForm } = this.state
    return (
      <div>
        <Grid columns={ 3 } relaxed>
          <Grid.Column>
            <Segment>
              <h3>Bio</h3>
              { showForm ? this.form() : this.bio() }
              <Button size="mini" onClick={ this.toggleForm }>{ showForm ? 'Cancel' : 'Edit Bio' }</Button>
            </Segment>
            <Segment>
              <h3>Interests</h3>
            </Segment>
            <Segment>
              <h3>Music</h3>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Card.Group itemsPerRow={ 1 }>
              { this.posts() }
            </Card.Group>
          </Grid.Column>

        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ( state ) =>
{
  return { coolPerson: state.user, posts: state.posts, bio: state.bios, }
}


export default connect( mapStateToProps )( Posts );

