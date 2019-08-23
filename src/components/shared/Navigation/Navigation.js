import React from 'react'

import AuthenticatedStudentLinks from './Navigation.Student.AuthenticatedLinks'
import AuthenticatedAdminLinks from './Navigation.Admin.AuthenticatedLinks'
import UnauthenticatedLinks from './Navigation.UnauthenticatedLinks'

export default ({ currentUserId, logoutUser }) => (
  <section className='bg-light border-bottom mb-4'>
    <div className='container'>
      { 
        // currentUserId 
        // ? (
        //   <AuthenticatedLinks 
        //     currentUserId={currentUserId} 
        //     logoutUser={logoutUser}
        //   /> 
        // )
        // : <UnauthenticatedLinks /> 
        <AuthenticatedStudentLinks />
      }
    </div>
  </section>
)