import React from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

// Helpers
import * as users from '../../api/users'

// Components
// import List from './List/List'
// import AssignmentsContainer from '../assignments/Container'
// import EditName from './Form/Edit.Name'

class Container extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        users: [],
        loading: true
      }
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
        const { currentUserId } = this.props
        const { users, loading } = this.state
        if (loading) return <span/>
    
        return (
          <main className='container'>
            {/* <Route path='/' exact component={() => <List users={users} />} />
            <PostsContainer
              currentUserId={currentUserId}
              refreshUsers={this.refreshUsers}
              users={users} /> */}
              <Route path='/' />
          </main>
        )
      }
    
}

export default withRouter(Container)