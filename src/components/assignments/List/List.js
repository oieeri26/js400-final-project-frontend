import React from 'react'

import Actions from './List.Actions'

export default ({ currentUserId, destroyAssignment, users }) => {
  const assignments = users.assignments.map(assignment => (
    <div key={assignment._id} className='card text-muted d-flex'>
      <div className='card-body'>
        <p className='card-text'>{ assignment.assignmentTitle }</p>
        <p className='card-text'>{ assignment.projectDescription }</p>
        <p className='card-text'>{ assignment.projectLink }</p>
      </div>
      <Actions
        currentUserId={currentUserId}
        destroyAssignment={destroyAssignment}
        post={assignment}
        user={users} />
    </div>
  ))

    return (
      <>
      { assignments }
    </>
    )
}
