import React from 'react';
import { Segment, Form, Button, TextArea } from 'semantic-ui-react';
import { updatePost, addPost } from '../actions/posts';
import { connect } from 'react-redux';

class PostForm extends React.Component
{

  initialState = {
    title: " ",
    body: " ",

  }
  state = { ...this.initialState }

  componentWillMount()
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
    const post = { ...this.state }
    const { dispatch, closeForm } = this.props
    debugger
    const func = this.props.id ? updatePost : addPost
    dispatch( func( post ) )
    closeForm()
  }

  render()
  {
    const { title, body } = this.props
    return (
      <div>
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
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}



export default connect()( PostForm ); 