import React from 'react'
import { getComments } from '../actions/comments'
import { connect } from 'react-redux'



class Comments extends React.Component
{
  state = {}

  componentDidMount()
  {
    this.props.dispatch( getComments() )
  }


  render()
  {
    return (
      <div>
        This is the comment
      </div>
    )
  }

}
const mapStateToProps = ( state ) =>
{
  const { comments } = state
  return { comments }
}
export default connect( mapStateToProps )( Comments ) 