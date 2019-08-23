import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// Helpers
import * as auth from '../api/auth'
import * as token from './helpers/local-storage'

// Components
import Header from './shared/Header'
import Navigation from './shared/Navigation/Navigation'
import Login from './auth/Login.Form'
import Signup from './auth/Signup.Form'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUserId: null,
      loading: true
    }

    this.loginUser = this.loginUser.bind(this)
    // this.logoutUser = this.logoutUser.bind(this)
    // this.signupUser = this.signupUser.bind(this)
  }
  
  async componentDidMount () {
    if (token.getToken()) {
      const { user } = await auth.profile();
        this.setState({ currentUserId: user._id, loading: false });
      } else {
      this.setState({ currentUserId: null, loading: false })
    }
  }

  async loginUser (user) {
    const response = await auth.login(user)
    await token.setToken(response)
    
    const profile = await auth.profile()
    if (profile.status === 401) {
      alert('Username or password is incorrect!')
    } else {
      this.setState({ currentUserId: profile.user._id })
    } 
  }

  render () {
    const { currentUserId, loading } = this.state
    if (loading) return "loading..." 

    return (
      <div>
        <Router>
        <Header />
        <Navigation
            currentUserId={currentUserId}
            logoutUser={this.logoutUser} />
         <Switch>
          <Route path='/login' exact component={() => {
            return currentUserId ? <Redirect to='/users' /> : <Login onSubmit={this.loginUser} />
          }} />
          <Route path='/signup' exact component={() => {
            return currentUserId ? <Redirect to='/users' /> : <Signup onSubmit={this.signupUser} />
          }} />
          {/* <Route path='/' render={() => {
            return currentUserId
              ? <UsersContainer currentUserId={currentUserId} />
              : <Redirect to='/login' />
          }} /> */}
          <Route path='/' />
          {/* <Redirect to='/login' /> */}
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
