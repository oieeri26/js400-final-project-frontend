import React from 'react'
import Form from './Signup.Component'

export default ({ onSubmit }) => (
  <main className='container'>
    <section className='row justify'>
      <div className='col col-lg-5'>
        <h1>Signup</h1>
        <Form onSubmit={onSubmit} />
      </div>
    </section>
  </main>
)