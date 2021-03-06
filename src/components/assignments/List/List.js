import React from 'react'

import Actions from './List.Actions'

export default ({ currentUserId, destroyAssignment, user }) => {
  const assignments = user.assignments.map(assignment => (
    <div key={assignment._id} className='card text-muted d-flex'>
      <div className='card-body'>
        <p className='card-text'><b>{ assignment.assignmentTitle }</b></p>
        <p className='card-text'>{ assignment.projectDescription }</p>
        <p className='card-text'>{ assignment.projectLink }</p>
        {assignment.grade ? (
          <p className='card-text'> <b>Grade:</b> { assignment.grade } out of { assignment.total } </p>
          ): 
          <p className='card-text'> <b>Grade:</b> TBD </p>
          }
      </div>
      <Actions
        currentUserId={currentUserId}
        destroyAssignment={destroyAssignment}
        post={assignment}
        user={user} />
    </div>
  ))

    return (
      <>
      { assignments }
    </>
    )
}
