import React from 'react'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    const { assignment = {} } = this.props
    const { assignmentTitle = '', projectDescription = '', projectLink = '' } = assignment
    this.state = { assignmentTitle, projectDescription, projectLink }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { assignment } = this.props

    if (assignment && assignment._id) {
      const body = Object.assign({}, this.state, { _id: assignment._id })
      this.props.onSubmit(body)
    } else {
      this.props.onSubmit(this.state)
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='assignmentTitle'>Assignment Title</label>
          <input
            className='form-control'
            id='assignmentTitle'
            onChange={this.handleChange}
            name='assignmentTitle'
            type='text'
            value={this.state.assignmentTitle} />
        </div>
        <div className='form-group'>
          <label htmlFor='projectDescription'>Project Description</label>
          <textarea
            className='form-control'
            id='projectDescription'
            onChange={this.handleChange}
            name='projectDescription'
            type='text'
            value={this.state.projectDescription} />
        </div>
        <div className='form-group'>
          <label htmlFor='projectLink'>Project Link</label>
          <textarea
            className='form-control'
            id='projectLink'
            onChange={this.handleChange}
            name='projectLink'
            type='text'
            value={this.state.projectLink} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}
