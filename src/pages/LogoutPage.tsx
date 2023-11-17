import React from 'react'
import { Link } from 'react-router-dom'

export const LogoutPage = () => {
  return (
    <React.Fragment>
      <div>LogoutPage</div>
      <Link to={'/'}>Login</Link>
    </React.Fragment>
  )
}
