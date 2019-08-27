import React from 'react'

export default ({ users }) => {
  const lis = users.map(user => (
    <div key={user._id} className="p-2 bd-highlight border card-footer">
        {user.firstName} {user.lastName} - {user.email}
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
