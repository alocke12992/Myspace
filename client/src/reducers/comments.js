// import
// {
//   COMMENTS,
//   ADD_COMMENT,
//   EDIT_COMMENT,
//   DELETE_COMMENT,
// } from '../actions/comments'


// const comments = ( state = [], action ) =>
// {
//   switch ( action.type )
//   {
//     case COMMENTS:
//       return action.comments
//     case ADD_COMMENT:
//       return [action.comment, ...state]
//     case EDIT_COMMENT:
//       return state.map( c =>
//       {
//         if ( c.id === action.comment.id )
//           return action.comment
//         return comment
//       } )
//     case DELETE_COMMENT:
//       return state.filter( c => c.id !== action.id )
//     default:
//       return state;
//   }
// }

// export default comments;