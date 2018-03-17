import axios from 'axios';
import { setHeaders } from './headers'

export const BIOS = 'BIOS'
export const ADD_BIO = 'ADD_BIO'
export const EDIT_BIO = 'EDIT_BIO'
export const DELETE_BIO = 'DELETE_BIO'

export const getBios = () =>
{
  return ( dispatch ) =>
  {
    axios.get( '/api/bios' )
      .then( res => dispatch( { type: BIOS, bios: res.data, headers: res.headers } ) )
  }
}


export const addBio = ( bio ) =>
{
  return ( dispatch ) =>
  {
    axios.post( '/api/bios', { bio } )
      .then( res => dispatch( { type: ADD_BIO, bio: res.data, headers: res.headers } ) )
  }
}


export const editBio = ( bio ) =>
{
  return ( dispatch ) =>
  {
    axios.put( `/api/bios/${ bio.id }`, { bio } )
      .then( res => dispatch( { type: EDIT_BIO, bio: res.data, headers: res.headers } ) )
  }
}


export const deleteBio = ( id ) =>
{
  return ( dispatch ) =>
  {
    axios.delete( `/api/bios/${ id }` )
      .then( res => dispatch( { type: DELETE_BIO, id, headers: res.headers } ) )
  }
}