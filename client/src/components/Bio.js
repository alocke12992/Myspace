import React from 'react'
import { connect } from 'react-redux';
import { editBio, addBio, getBios } from '../actions/bios';
import { Button, Form, } from 'semantic-ui-react';

class Bio extends React.Component
{
  state = { bio: " ", showform: false }

  componentDidMount()
  {
    this.props.dispatch( getBios() )
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
        <h3>Bio</h3>
        { showForm ? this.form() : this.bio() }
        <Button size="mini" onClick={ this.toggleForm }>{ showForm ? 'Cancel' : 'Edit Bio' }</Button>
      </div>
    )
  }
}

const mapStateToProps = ( state ) =>
{
  return { coolPerson: state.user, bio: state.bios, }
}


export default connect( mapStateToProps )( Bio );
