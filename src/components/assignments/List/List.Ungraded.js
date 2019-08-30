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
              // onChange={this.handleChange}
              name='grade'
              type='numeric'
              // value={this.state.assignmentTitle} 
              />
            <label htmlFor='total'>Total:</label>
            <input
              className='form-control'
              id='total'
              // onChange={this.handleChange}
              name='total'
              type='numeric'
              // value={this.state.assignmentTitle} 
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
