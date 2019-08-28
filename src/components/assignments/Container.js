import React from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

import * as assignments from '../../api/assignments'

// Components
import List from './List/List'
import EditAssignment from './Form/Edit.Assignment'
import NewAssignment from './Form/New.Assignment'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.createAssignment = this.createAssignment.bind(this)
    this.destroyAssignment = this.destroyAssignment.bind(this)
    this.editAssignment = this.editAssignment.bind(this)
  }

  async createAssignment (assignment) {
    if (assignment.assignmentTitle.length === 0) {
      alert('Please include an Assignment Title!')
    } else if (assignment.projectDescription.length === 0) {
      alert('Please include a project description!')
    } else if (assignment.projectLink.length === 0) {
      alert('Please include a project link!')
    } else {
      const { currentUserId, history, refreshUsers } = this.props
      await assignments.createAssignment({ user: { _id: currentUserId }, assignment })
      await refreshUsers()
      history.push(`/users/${currentUserId}`)
    }

    // const { currentUserId, history, refreshUsers } = this.props
    // try {
    //   await assignments.createAssignment({ user: { _id: currentUserId }, assignment })
    //   await refreshUsers()
    // } catch (errors) {
    //   this.setState({ errors: errors }) // add errors: [] to top
    // }
  }
  
  async destroyAssignment (assignment) {
    const { currentUserId, history, refreshUsers } = this.props
    
    await assignments.destroyAssignment({ user: { _id: currentUserId }, assignment })
    await refreshUsers()
    
    history.push(`/users/${currentUserId}`)
  }

  async editAssignment (assignment) {
    if (assignment.assignmentTitle.length === 0) {
      alert('Please include an Assignment Title!')
    } else if (assignment.projectDescription.length === 0) {
      alert('Please include a project description!')
    } else if (assignment.projectLink.length === 0) {
      alert('Please include a project link!')
    } else {
      const { currentUserId, history, refreshUsers } = this.props
      await assignments.updateAssignment({ user: { _id: currentUserId }, assignment })
      await refreshUsers()
      history.push(`/users/${currentUserId}`)
    }
  }

  render () {
    const { currentUserId, users } = this.props
    return (
      <> 
        <Route path='/assignments/:userId' exact component={({ match }) => {
          const user = users.find(user => user._id === match.params.userId)
          return (
            <List
              currentUserId={currentUserId}
              destroyAssignment={this.destroyAssignment}
              user={user} />
          ) 
        }} />
        <Route path='/assignments/new' exact component={() => {
          return <NewAssignment onSubmit={this.createAssignment} />
        }} />
        <Route path='/users/:userId/assignments/:postId/edit' exact component={({ match }) => {
          const user = users.find(user => user._id === match.params.userId)
          const assignment = user.assignments.find(user => user._id === match.params.postId)
          return <EditAssignment onSubmit={this.editAssignment} assignment={assignment} />
        }} />
      </>
    )
  }
}

export default withRouter(Container)