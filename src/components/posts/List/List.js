import React from 'react'

import Actions from './List.Actions'

export default ({ currentUserId, destroyAssignment, user }) => {
  const posts = user.posts.map(post => (
    <div key={post._id} className='card'>
      <div className='card-body'>
        <p className='card-text'>{ post.assignmentTitle }</p>
        <p className='card-text'>{ post.projectDescription}</p>
        <p className='card-text'>{ post.projectLink}</p>
      </div>
      <Actions
        currentUserId={currentUserId}
        destroyAssignment={destroyAssignment}
        post={post}
        user={user} />
    </div>
  ))

    return (
      <>
      { posts }
    </>
    )
}
