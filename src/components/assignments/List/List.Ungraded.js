import React from 'react'


export default ({ currentUserId, destroyAssignment, users }) => {
    const list = users.map(user => user.assignments.map(assignment => (
        <div key={assignment._id} className="p-2 bd-highlight border card-footer">
          <form>
          <div className='card-body'>
              <p className='card-text'> { assignment.assignmentTitle } by {user.firstName} </p>
              <p className='card-text'> { assignment.projectDescription } </p>
              <p className='card-text'> { assignment.projectLink }</p>
            </div>
            <label htmlFor='grade'>Grade:</label>
            <input
              className='form-control'
              id='grade'
              name='grade'
              type='numeric'
              />
            <label htmlFor='total'>Total:</label>
            <input
              className='form-control'
              id='total'
              name='total'
              type='numeric'
              />
               <button type='submit' className='btn-basic'>Submit</button>
          </form>
        </div>
        )))

    return (
      <>
      { list }
    </>
    )
}
