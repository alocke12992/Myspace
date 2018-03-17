import
{
  BIOS,
  ADD_BIO,
  EDIT_BIO,
  DELETE_BIO,
} from '../actions/bios'


const bios = ( state = [], action ) =>
{
  switch ( action.type )
  {
    case BIOS:
      return action.bios
    case ADD_BIO:
      return [action.bio, ...state]
    case EDIT_BIO:
      return state.map( b =>
      {
        if ( b.id === action.bio.id )
          return action.bio
        return b
      } )
    case DELETE_BIO:
      return state.filter( b => b.id !== action.id )
    default:
      return state;
  }
}

export default bios;