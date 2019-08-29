import React from 'react'


export default ({ currentUserId, destroyAssignment, users }) => {
    const list = users.map(user => user.assignments.map(assignment => (
        <div key={assignment._id} className="p-2 bd-highlight border card-footer">
          <div className='card-body'>
              <p className='card-text'> { assignment.assignmentTitle } by {user.firstName} </p>
              <p className='card-text'> { assignment.projectDescription } </p>
              <p className='card-text'> { assignment.projectLink }</p>
            </div>
        </div>
        )))

    return (
      <>
      { list }
    </>
    )
}
