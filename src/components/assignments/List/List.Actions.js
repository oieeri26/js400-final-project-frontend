import React from 'react'
import { Link } from 'react-router-dom'

export default ({ currentUserId, destroyAssignment, post, user }) => (
  <div className='card-footer text-muted d-flex'>
    {
      currentUserId === user._id
      && (
        <>
          <Link className='btn btn-link' to={`/users/${user._id}/assignments/${post._id}/edit`}>Edit Assignment</Link>
          <button
            className='btn text-danger'
            onClick={() => destroyAssignment(post)}>
            Delete Assignment
          </button>
        </>
      )
    }
  </div>
)
