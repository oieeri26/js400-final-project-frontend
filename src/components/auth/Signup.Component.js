import React from 'react'
import { withRouter } from 'react-router'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.props.history.push('/users')
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
        <div className='form-group col-md-6'>
          <label htmlFor='email'>Email Address</label>
          <input
            className='form-control'
            id='email'
            onChange={this.handleChange}
            name='email'
            type='text'
            value={this.state.email} />
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-control'
            id='password'
            onChange={this.handleChange}
            name='password'
            type='password'
            value={this.state.password} />
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='firstName'>First Name</label>
          <input
            className='form-control'
            id='firstName'
            onChange={this.handleChange}
            name='firstName'
            type='firstName'
            value={this.state.firstName} />
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            className='form-control'
            id='lastName'
            onChange={this.handleChange}
            name='lastName'
            type='lastName'
            value={this.state.lastName} />
        </div>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}

export default withRouter(Form)