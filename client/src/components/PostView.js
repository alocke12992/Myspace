import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';


const PostView = ( { post = {} } ) => (
  <Card key={ post.id } >
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
      <Button id={ post.id } floated="right" icon="delete" />
    </Card.Content>
  </Card>

)
const mapStateToProps = ( state, props ) =>
{
  return { post: state.posts.find( p => p.id === parseInt( props.match.params.id ) ) }
}
export default connect( mapStateToProps )( PostView );