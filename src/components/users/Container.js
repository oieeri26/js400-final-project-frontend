import React from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

// Helpers
import * as users from '../../api/users'

// Components
import List from './List/List'
import AssignmentsContainer from '../assignments/Container'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      loading: true
    }
    this.refreshUsers = this.refreshUsers.bind(this)
  }

  async componentDidMount () {
    this.refreshUsers().then(() => this.setState({ loading: false }))
  }

  // Internal
  async refreshUsers () {
    const { response } = await users.fetchUsers()
    this.setState({ users: response })
  }

  render () {
    const { currentUserId, admin } = this.props
    // console.log(admin)
    const { users, loading } = this.state
    if (loading) return <span/>

    return (
      <main className='container'>
        <Route path='/students' exact component={() => <List users={users} admin={admin}/>} />
        <AssignmentsContainer
          currentUserId={currentUserId}
          refreshUsers={this.refreshUsers}
          users={users} 
          admin={admin}/>
      </main>
    )
  }
}

export default withRouter(Container)
