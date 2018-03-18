import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { deletePost } from '../actions/posts';
import { Card, Icon, Button, Form, Segment, TextArea } from 'semantic-ui-react';
import PostForm from './PostForm'

class Post extends React.Component
{
  state = { showForm: false }

  toggleForm = () =>
  {
    this.setState( state =>
    {
      return { showForm: !state.showForm }
    } )
  }

  removeApp = () =>
  {

    const { app: { id }, dispatch, history } = this.props
    dispatch( deleteApp( id ) )
    history.push( '/apps' )
  }

  render()
  {
    const { post } = this.props
    const { showForm } = this.state
    return (
      posts.map( post =>

        <Card key={ post.id }>
          <Card.Content>
            { post.name }
            <Card.Header>
              { post.title }
            </Card.Header>
            <Card.Content>
              { post.body }
            </Card.Content>
            <Button id={ post.id } floated="right" icon="edit" />
            <Button id={ post.id } floated="right" icon="delete" onClick={ this.removePost } />
          </Card.Content>
        </Card>
      )
  }
}

const mapStateToProps = ( state, props ) =>
{
  const post = state.posts.find(
    a => a.id === parseInt( props.match.params.id ),
  );
  return { post };
};

export default connect( mapStateToProps )( Post );
