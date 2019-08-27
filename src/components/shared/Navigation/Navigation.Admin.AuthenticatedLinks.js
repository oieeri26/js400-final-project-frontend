import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const AuthenticatedLinks = ({ currentUserId, isAdmin, logoutUser, history }) => {
  const logout = () => {
    logoutUser()
    history.push('/login')
  }
  return (
    <ul className='nav justify-content'>
      <li className='nav-item'>
        <Link className='nav-link' to={`/users/5d64723f31a7b54f2870f44a/posts`}>All Students</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/students'>Ungraded Assignments</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={`/users/${currentUserId}/posts/new`}>
          Graded Assignments
        </Link>
      </li>
      <li className='nav-item'>
        <button
          className='btn btn-link'
          onClick={logout}>
            Logout
        </button>
      </li>
    </ul>
  )
}

export default withRouter(AuthenticatedLinks)