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

import { UserContext } from '../UserContext'

import { useAuth } from './auth'
import SkelLayout from './layouts/SkelLayout/SkelLayout'

const Routes = () => {
  const sum = Math.floor(Math.random() * 9999999)
  const [user, setUser] = useState('')
  const [cust, setCust] = useState('')
  return (
    <Router useAuth={useAuth}>
      <UserContext.Provider value={{ user, setUser, cust, setCust }}>
        <Set wrap={SkelLayout}>
          <Private unauthenticated="login">
            <Route path="/users/new" page={UserNewUserPage} name="newUser" />
            <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
            <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
            <Route path="/users" page={UserUsersPage} name="users" />
            <Route path={`/${sum}`} page={HelperPage} name="helper" />
            <Route path="/members" page={MembersPage} name="members" />
            <Route path="/contacts/{id:Int}/edit" page={ContactEditContactPage} name="editContact" />
            <Route path="/contacts/{id:Int}" page={ContactContactPage} name="contact" />
            <Route path="/contacts/new" page={ContactNewContactPage} name="newContact" />
            <Route path="/contacts" page={ContactContactsPage} name="contacts" />
          </Private>

          <Route path="/explore" page={ExplorePage} name="explore" />
          <Route path="/computer" page={ModulesPage} name="computer" />
          <Route path="/store2" page={Store2Page} name="store2" />
          <Route path="/store3" page={Store3Page} name="store3" />
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
