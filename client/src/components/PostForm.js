import React from 'react';
import { Segment, Form, Button, TextArea } from 'semantic-ui-react';
import { editPost, addPost } from '../actions/posts';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class PostForm extends React.Component
{

  initialState = {
    title: " ",
    body: " ",

  }
  state = { title: " ", body: " ", }

  componentDidMount()
  {
    if ( this.props.id )
      this.setState( { ...this.props } )
  }

  handleChange = ( e ) =>
  {
    let { name, value } = e.target
    this.setState( { [name]: value } )
  }

  handleSubmit = ( e ) =>
  {
    e.preventDefault()
    let post = {
      title: this.state.title,
      body: this.state.body,
      user_id: this.props.coolPerson.id
    }
    this.props.dispatch( addPost( post ) )
    this.setState( { title: '', body: '' } )
    this.props.history.push( "/posts" )
  }

  render()
  {
    const { title, body, coolPerson } = this.props
    return (
      <div>
        <Segment.Group>
          <Segment as="h2">What's going on { coolPerson.name } ?</Segment>
          <Segment.Group>
            <Segment>
              <Form onSubmit={ this.handleSubmit }>
                <Form.Group widths="equal">
                  <Form.Input
                    onChange={ this.handleChange }
                    value={ title }
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
        </Segment.Group>
      </div>
    )
  }
}
const mapStateToProps = ( state ) =>
{
  return {
    coolPerson: state.user,
    posts: state.posts,
  }
}


export default connect( mapStateToProps )( PostForm ); 