import React from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';
import { addBio } from '../actions/bios';
import { connect } from 'react-redux';


class BioForm extends React.Component
{

  state = { bio: " " }

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
    let bio = {
      bio: this.state.bio,
      user_id: this.props.coolPerson.id
    }
    this.props.dispatch( addBio( bio ) )
    this.setState( { bio: '' } )
  }

  render()
  {
    const { bio } = this.props
    return (
      <div>
        <h3>Add Bio</h3>
        <Form onSubmit={ this.handleSubmit }>
          <Form.Group widths="equal">
            <TextArea
              onChange={ this.handleChange }
              value={ bio }
              name='bio'
              placeholder='Add your bio...'
            />
          </Form.Group>

          <Button primary type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}
const mapStateToProps = ( state ) =>
{
  return {
    coolPerson: state.user,
    bio: state.bios,
  }
}


export default connect( mapStateToProps )( BioForm ); 