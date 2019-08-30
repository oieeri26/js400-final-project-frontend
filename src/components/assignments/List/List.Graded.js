import React from 'react'


export default ({ currentUserId, destroyAssignment, users }) => {
    const list = users.map(user => user.assignments.map(assignment => (
        <div key={assignment._id} className="p-2 bd-highlight border card-footer">
          <div className='card-body'>
              <p className='card-text'> <b> { assignment.assignmentTitle } </b> by {user.firstName} </p>
              <p className='card-text'> { assignment.projectDescription } </p>
              <p className='card-text'> { assignment.projectLink } </p>
              <p className='card-text'> <b> { assignment.grade } our of { assignment.total } </b></p>
            </div>
        </div>
        )))

    return (
      <>
      { list }
    </>
    )
}
