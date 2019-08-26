import React from 'react'
import { Link } from 'react-router-dom'

export default ({ users }) => {
  const lis = users.map(user => (
    <li key={user._id}>
      <Link to={`/users/${user._id}/posts`}>
        {user.firstName} {user.lastName} {user.email}
      </Link>
    </li>
  ))

  return (
    <>
      <p>
        { lis }
      </p>
    </>
  )
}
