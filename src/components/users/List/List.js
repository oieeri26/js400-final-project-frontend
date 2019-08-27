import React from 'react'
// import { Link } from 'react-router-dom'

export default ({ users }) => {
  const lis = users.map(user => (
    <div key={user._id} className="p-2 bd-highlight border card-footer">
      {/* <Link to={`/users/${user._id}/posts`}> */}
        {user.firstName} {user.lastName} - {user.email}
      {/* </Link> */}
    </div>
  ))

  return (
    <>
      <div className="d-flex flex-column bd-highlight mb-3"> 
      { lis }
      </div>
    </>
  )
}
