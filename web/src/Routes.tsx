// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { useState } from 'react'

import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { UserContext } from '../UserContext'

import { useAuth } from './auth'
import SkelLayout from './layouts/SkelLayout/SkelLayout'

const Routes = () => {
  const [user, setUser] = useState('')
  const [cust, setCust] = useState('')
  return (
    <Router useAuth={useAuth}>
      <UserContext.Provider value={{ user, setUser, cust, setCust }}>
        <Set wrap={SkelLayout}>
          <Private unauthenticated="login">
            <Route path="/modules" page={ModulesPage} name="modules" />
            <Set wrap={ScaffoldLayout} title="Users" titleTo="users">
              <Route path="/users/new" page={UserNewUserPage} name="newUser" />
              <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
              <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
              <Route path="/users" page={UserUsersPage} name="users" />
            </Set>
          </Private>
          <Route path="/" page={HomepagePage} name="homepage" />
          <Route notfound page={NotFoundPage} />
          <Route path="/login" page={LoginPage} name="login" />
          <Route path="/AdminSignup" page={SignupPage} name="signup" />
          <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
          <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        </Set>
      </UserContext.Provider>
    </Router>
  )
}

export default Routes
