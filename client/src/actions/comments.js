import axios from 'axios';
import { setHeaders } from './headers'

export const COMMENTS = 'COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const getComments = () =>
{
  return ( dispatch ) =>
  {
    axios.get( '/api/comments' )
      .then( res => dispatch( { type: COMMENTS, comments: res.data, headers: res.headers } ) )
  }
}


export const addComment = ( comment ) =>
{
  return ( dispatch ) =>
  {
    axios.post( '/api/comments', { comment } )
      .then( res => dispatch( { type: ADD_COMMENT, comment: res.data, headers: res.headers } ) )
  }
}


export const editComment = ( comment ) =>
{
  return ( dispatch ) =>
  {
    axios.put( `/api/comments/${ post.id }`, { comment } )
      .then( res => dispatch( { type: EDIT_COMMENT, comment: res.data, headers: res.headers } ) )
  }
}


export const deleteComment = ( id ) =>
{
  return ( dispatch ) =>
  {
    axios.delete( `/api/comments/${ id }` )
      .then( res => dispatch( { type: DELETE_COMMENT, id, headers: res.headers } ) )
  }
}