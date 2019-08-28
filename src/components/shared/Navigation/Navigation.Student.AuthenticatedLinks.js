import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const AuthenticatedLinks = ({ currentUserId, logoutUser, history }) => {
  const logout = () => {
    logoutUser()
    history.push('/login')
  }
  // assignments/${currentUserId}
  return (
    <ul className='nav justify-content'>
      <li className='nav-item'>
        <Link className='nav-link' to={`/assignments/${currentUserId}`}>Home</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={`/students`}>All Students</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={`/assignments/new`}>
          Create New Assignment
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
