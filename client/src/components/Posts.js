import React from 'react'
import { connect } from 'react-redux';
import { getPosts, addPost, deletePost } from '../actions/posts';
import { Card, Icon, Button, Form, Segment, TextArea } from 'semantic-ui-react';
import PostForm from './PostForm'

class Posts extends React.Component
{
  state = { showform: false }

  componentDidMount()
  {
    this.props.dispatch( getPosts() )
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

    const { name, value } = e.target
    this.setState( { [name]: value } )
  }

  handleSubmit = ( e ) =>
  {
    e.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body,
      user_id: this.props.coolPerson.id
    }
    const { dispatch, closeForm } = this.props
    dispatch( addPost( post ) )
    this.setState( { title: '', body: '', showForm: false } )
  }

  removePost = () =>
  {

    const post = { id: this.props.id }
    const { dispatch } = this.props

    dispatch( deletePost( post ) )
  }

  form = () => 
  {
    const { title, body, coolPerson } = this.props
    return (
      <div>
        <Segment as="h2">What's going on { coolPerson.name } ?</Segment>
        <Segment.Group>
          <Segment>
            <Form onSubmit={ this.handleSubmit }>
              <Form.Group widths="equal">
                <Form.Input
                  onChange={ this.handleChange }
                  defaultValue={ title }
                  name='title'
                  placeholder='Title'
                />
              </Form.Group>
              <TextArea onChange={ this.handleChange } defaultValue={ body } name='body' placeholder="Tell us what you're up to" />
              <Segment textAlign='center' basic>
                <Button primary type="submit">Submit</Button>
              </Segment>
            </Form>
          </Segment>
        </Segment.Group>
      </div>
    )
  }

  posts = () =>
  {
    const { posts } = this.props
    return posts.map( post =>

      <Card key={ post.id }>
        <Card.Content>
          { post.name }
          <Card.Header>
            { post.title }
          </Card.Header>
          <Card.Content>
            { post.body }
          </Card.Content>
          {/* TODO EDIT AND DELETE */ }
          <Button id={ post.id } floated="right" icon="edit" />
          <Button id={ post.id } floated="right" icon="delete" onClick={ this.removePost } />
        </Card.Content>
      </Card>
    )
  }


  render()
  {
    const { showForm } = this.state
    if ( showForm )
    {
      return (
        <div>
          { this.form() }
          <Card.Group itemsPerRow={ 1 }>
            { this.posts() }
          </Card.Group>
        </div>
      )
    }
    return (
      <div>
        <Segment textAlign="center" >
          <Button size="mini" onClick={ this.toggleForm }>{ showForm ? 'Cancel' : 'Update your status' }</Button>
        </Segment>
        <Card.Group itemsPerRow={ 1 }>
          { this.posts() }
        </Card.Group>
      </div >
    )
  }
}

const mapStateToProps = ( state, props ) =>
{
  const posts = state.posts

  return {
    coolPerson: state.user,
    posts,
  }
}

export default connect( mapStateToProps )( Posts );

