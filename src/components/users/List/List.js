import React from 'react'

export default ({ users, admin }) => {
  const list = users.map(user => (
    <div key={user._id} className="p-2 bd-highlight border card-footer">
      <div>{user.firstName} {user.lastName} - {user.email}</div>
  
    </div>
  ))

  if (admin) {
    return (
      <div className="d-flex flex-column bd-highlight mb-3"> 
      <form>
        <label>
          <b>Score is Above:</b>
          <input type="numeric" name="scoreAbove" />
        </label>
        <label>
          <b>Score is Above:</b>
          <input type="numeric" name="scoreBelow" />
        </label>
        <button type='submit' className='btn-basic'>Submit</button>
      </form>
        { list }
        </div>
    )
  } else {
    return (
      <>
        <div className="d-flex flex-column bd-highlight mb-3"> 
        { list }
        </div>
      </>
    )
  }
}
