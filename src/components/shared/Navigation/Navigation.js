import React from 'react'

import AuthenticatedStudentLinks from './Navigation.Student.AuthenticatedLinks'
import AuthenticatedAdminLinks from './Navigation.Admin.AuthenticatedLinks'
import UnauthenticatedLinks from './Navigation.UnauthenticatedLinks'

export default ({ currentUserId, logoutUser, admin }) => (
  <section className='bg-dark border-bottom mb-4'>
    <div className='container'>
      { 
        currentUserId 
        ? admin ? (<AuthenticatedAdminLinks
          currentUserId={currentUserId} 
          logoutUser={logoutUser}
          isAdmin={admin}
        />) : (
          <AuthenticatedStudentLinks
            currentUserId={currentUserId} 
            logoutUser={logoutUser}
          /> 
        )
        : <UnauthenticatedLinks /> 
      }
    </div>
  </section>
)