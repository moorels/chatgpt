import { DbAuthHandler } from '@redwoodjs/auth-dbauth-api';
import { db } from "../lib/db";
export const handler = async (event, context) => {
  const forgotPasswordOptions = {
    // handler() is invoked after verifying that a user was found with the given
    // username. This is where you can send the user an email with a link to
    // reset their password. With the default dbAuth routes and field names, the
    // URL to reset the password will be:
    //
    // https://example.com/reset-password?resetToken=${user.resetToken}
    //
    // Whatever is returned from this function will be returned from
    // the `forgotPassword()` function that is destructured from `useAuth()`
    // You could use this return value to, for example, show the email
    // address in a toast message so the user will know it worked and where
    // to look for the email.
    handler: user => {
      return user;
    },
    // How long the resetToken is valid for, in seconds (default is 24 hours)
    expires: 60 * 60 * 24,
    errors: {
      // for security reasons you may want to be vague here rather than expose
      // the fact that the email address wasn't found (prevents fishing for
      // valid email addresses)
      usernameNotFound: 'Username not found',
      // if the user somehow gets around client validation
      usernameRequired: 'Username is required'
    }
  };
  const loginOptions = {
    // handler() is called after finding the user that matches the
    // username/password provided at login, but before actually considering them
    // logged in. The `user` argument will be the user in the database that
    // matched the username/password.
    //
    // If you want to allow this user to log in simply return the user.
    //
    // If you want to prevent someone logging in for another reason (maybe they
    // didn't validate their email yet), throw an error and it will be returned
    // by the `logIn()` function from `useAuth()` in the form of:
    // `{ message: 'Error message' }`
    handler: user => {
      return user;
    },
    errors: {
      usernameOrPasswordMissing: 'Both username and password are required',
      usernameNotFound: 'Username ${username} not found',
      // For security reasons you may want to make this the same as the
      // usernameNotFound error so that a malicious user can't use the error
      // to narrow down if it's the username or password that's incorrect
      incorrectPassword: 'Incorrect password for ${username}'
    },
    // How long a user will remain logged in, in seconds
    expires: 60 * 60 * 24 * 365 * 10
  };
  const resetPasswordOptions = {
    // handler() is invoked after the password has been successfully updated in
    // the database. Returning anything truthy will automatically log the user
    // in. Return `false` otherwise, and in the Reset Password page redirect the
    // user to the login page.
    handler: _user => {
      return true;
    },
    // If `false` then the new password MUST be different from the current one
    allowReusedPassword: true,
    errors: {
      // the resetToken is valid, but expired
      resetTokenExpired: 'resetToken is expired',
      // no user was found with the given resetToken
      resetTokenInvalid: 'resetToken is invalid',
      // the resetToken was not present in the URL
      resetTokenRequired: 'resetToken is required',
      // new password is the same as the old password (apparently they did not forget it)
      reusedPassword: 'Must choose a new password'
    }
  };
  const signupOptions = {
    // Whatever you want to happen to your data on new user signup. Redwood will
    // check for duplicate usernames before calling this handler. At a minimum
    // you need to save the `username`, `hashedPassword` and `salt` to your
    // user table. `userAttributes` contains any additional object members that
    // were included in the object given to the `signUp()` function you got
    // from `useAuth()`.
    //
    // If you want the user to be immediately logged in, return the user that
    // was created.
    //
    // If this handler throws an error, it will be returned by the `signUp()`
    // function in the form of: `{ error: 'Error message' }`.
    //
    // If this returns anything else, it will be returned by the
    // `signUp()` function in the form of: `{ message: 'String here' }`.
    handler: ({
      username,
      hashedPassword,
      salt,
      userAttributes
    }) => {
      return db.user.create({
        data: {
          email: username,
          hashedPassword: hashedPassword,
          salt: salt
          // name: userAttributes.name
        }
      });
    },

    // Include any format checks for password here. Return `true` if the
    // password is valid, otherwise throw a `PasswordValidationError`.
    // Import the error along with `DbAuthHandler` from `@redwoodjs/api` above.
    passwordValidation: _password => {
      return true;
    },
    errors: {
      // `field` will be either "username" or "password"
      fieldMissing: '${field} is required',
      usernameTaken: 'Username `${username}` already in use'
    }
  };
  const authHandler = new DbAuthHandler(event, context, {
    // Provide prisma db client
    db: db,
    // The name of the property you'd call on `db` to access your user table.
    // i.e. if your Prisma model is named `User` this value would be `user`, as in `db.user`
    authModelAccessor: 'user',
    // A map of what dbAuth calls a field to what your database calls it.
    // `id` is whatever column you use to uniquely identify a user (probably
    // something like `id` or `userId` or even `email`)
    authFields: {
      id: 'id',
      username: 'email',
      hashedPassword: 'hashedPassword',
      salt: 'salt',
      resetToken: 'resetToken',
      resetTokenExpiresAt: 'resetTokenExpiresAt'
    },
    // Specifies attributes on the cookie that dbAuth sets in order to remember
    // who is logged in. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies
    cookie: {
      HttpOnly: true,
      Path: '/',
      SameSite: 'Strict',
      Secure: process.env.NODE_ENV !== 'development'

      // If you need to allow other domains (besides the api side) access to
      // the dbAuth session cookie:
      // Domain: 'example.com',
    },

    forgotPassword: forgotPasswordOptions,
    login: loginOptions,
    resetPassword: resetPasswordOptions,
    signup: signupOptions
  });
  return await authHandler.invoke();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEYkF1dGhIYW5kbGVyIiwiZGIiLCJoYW5kbGVyIiwiZXZlbnQiLCJjb250ZXh0IiwiZm9yZ290UGFzc3dvcmRPcHRpb25zIiwidXNlciIsImV4cGlyZXMiLCJlcnJvcnMiLCJ1c2VybmFtZU5vdEZvdW5kIiwidXNlcm5hbWVSZXF1aXJlZCIsImxvZ2luT3B0aW9ucyIsInVzZXJuYW1lT3JQYXNzd29yZE1pc3NpbmciLCJpbmNvcnJlY3RQYXNzd29yZCIsInJlc2V0UGFzc3dvcmRPcHRpb25zIiwiX3VzZXIiLCJhbGxvd1JldXNlZFBhc3N3b3JkIiwicmVzZXRUb2tlbkV4cGlyZWQiLCJyZXNldFRva2VuSW52YWxpZCIsInJlc2V0VG9rZW5SZXF1aXJlZCIsInJldXNlZFBhc3N3b3JkIiwic2lnbnVwT3B0aW9ucyIsInVzZXJuYW1lIiwiaGFzaGVkUGFzc3dvcmQiLCJzYWx0IiwidXNlckF0dHJpYnV0ZXMiLCJjcmVhdGUiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZFZhbGlkYXRpb24iLCJfcGFzc3dvcmQiLCJmaWVsZE1pc3NpbmciLCJ1c2VybmFtZVRha2VuIiwiYXV0aEhhbmRsZXIiLCJhdXRoTW9kZWxBY2Nlc3NvciIsImF1dGhGaWVsZHMiLCJpZCIsInJlc2V0VG9rZW4iLCJyZXNldFRva2VuRXhwaXJlc0F0IiwiY29va2llIiwiSHR0cE9ubHkiLCJQYXRoIiwiU2FtZVNpdGUiLCJTZWN1cmUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJmb3Jnb3RQYXNzd29yZCIsImxvZ2luIiwicmVzZXRQYXNzd29yZCIsInNpZ251cCIsImludm9rZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZnVuY3Rpb25zL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBUElHYXRld2F5UHJveHlFdmVudCwgQ29udGV4dCB9IGZyb20gJ2F3cy1sYW1iZGEnXG5cbmltcG9ydCB7IERiQXV0aEhhbmRsZXIsIERiQXV0aEhhbmRsZXJPcHRpb25zIH0gZnJvbSAnQHJlZHdvb2Rqcy9hdXRoLWRiYXV0aC1hcGknXG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnc3JjL2xpYi9kYidcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoXG4gIGV2ZW50OiBBUElHYXRld2F5UHJveHlFdmVudCxcbiAgY29udGV4dDogQ29udGV4dFxuKSA9PiB7XG4gIGNvbnN0IGZvcmdvdFBhc3N3b3JkT3B0aW9uczogRGJBdXRoSGFuZGxlck9wdGlvbnNbJ2ZvcmdvdFBhc3N3b3JkJ10gPSB7XG4gICAgLy8gaGFuZGxlcigpIGlzIGludm9rZWQgYWZ0ZXIgdmVyaWZ5aW5nIHRoYXQgYSB1c2VyIHdhcyBmb3VuZCB3aXRoIHRoZSBnaXZlblxuICAgIC8vIHVzZXJuYW1lLiBUaGlzIGlzIHdoZXJlIHlvdSBjYW4gc2VuZCB0aGUgdXNlciBhbiBlbWFpbCB3aXRoIGEgbGluayB0b1xuICAgIC8vIHJlc2V0IHRoZWlyIHBhc3N3b3JkLiBXaXRoIHRoZSBkZWZhdWx0IGRiQXV0aCByb3V0ZXMgYW5kIGZpZWxkIG5hbWVzLCB0aGVcbiAgICAvLyBVUkwgdG8gcmVzZXQgdGhlIHBhc3N3b3JkIHdpbGwgYmU6XG4gICAgLy9cbiAgICAvLyBodHRwczovL2V4YW1wbGUuY29tL3Jlc2V0LXBhc3N3b3JkP3Jlc2V0VG9rZW49JHt1c2VyLnJlc2V0VG9rZW59XG4gICAgLy9cbiAgICAvLyBXaGF0ZXZlciBpcyByZXR1cm5lZCBmcm9tIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSByZXR1cm5lZCBmcm9tXG4gICAgLy8gdGhlIGBmb3Jnb3RQYXNzd29yZCgpYCBmdW5jdGlvbiB0aGF0IGlzIGRlc3RydWN0dXJlZCBmcm9tIGB1c2VBdXRoKClgXG4gICAgLy8gWW91IGNvdWxkIHVzZSB0aGlzIHJldHVybiB2YWx1ZSB0bywgZm9yIGV4YW1wbGUsIHNob3cgdGhlIGVtYWlsXG4gICAgLy8gYWRkcmVzcyBpbiBhIHRvYXN0IG1lc3NhZ2Ugc28gdGhlIHVzZXIgd2lsbCBrbm93IGl0IHdvcmtlZCBhbmQgd2hlcmVcbiAgICAvLyB0byBsb29rIGZvciB0aGUgZW1haWwuXG4gICAgaGFuZGxlcjogKHVzZXIpID0+IHtcbiAgICAgIHJldHVybiB1c2VyXG4gICAgfSxcblxuICAgIC8vIEhvdyBsb25nIHRoZSByZXNldFRva2VuIGlzIHZhbGlkIGZvciwgaW4gc2Vjb25kcyAoZGVmYXVsdCBpcyAyNCBob3VycylcbiAgICBleHBpcmVzOiA2MCAqIDYwICogMjQsXG5cbiAgICBlcnJvcnM6IHtcbiAgICAgIC8vIGZvciBzZWN1cml0eSByZWFzb25zIHlvdSBtYXkgd2FudCB0byBiZSB2YWd1ZSBoZXJlIHJhdGhlciB0aGFuIGV4cG9zZVxuICAgICAgLy8gdGhlIGZhY3QgdGhhdCB0aGUgZW1haWwgYWRkcmVzcyB3YXNuJ3QgZm91bmQgKHByZXZlbnRzIGZpc2hpbmcgZm9yXG4gICAgICAvLyB2YWxpZCBlbWFpbCBhZGRyZXNzZXMpXG4gICAgICB1c2VybmFtZU5vdEZvdW5kOiAnVXNlcm5hbWUgbm90IGZvdW5kJyxcbiAgICAgIC8vIGlmIHRoZSB1c2VyIHNvbWVob3cgZ2V0cyBhcm91bmQgY2xpZW50IHZhbGlkYXRpb25cbiAgICAgIHVzZXJuYW1lUmVxdWlyZWQ6ICdVc2VybmFtZSBpcyByZXF1aXJlZCcsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGxvZ2luT3B0aW9uczogRGJBdXRoSGFuZGxlck9wdGlvbnNbJ2xvZ2luJ10gPSB7XG4gICAgLy8gaGFuZGxlcigpIGlzIGNhbGxlZCBhZnRlciBmaW5kaW5nIHRoZSB1c2VyIHRoYXQgbWF0Y2hlcyB0aGVcbiAgICAvLyB1c2VybmFtZS9wYXNzd29yZCBwcm92aWRlZCBhdCBsb2dpbiwgYnV0IGJlZm9yZSBhY3R1YWxseSBjb25zaWRlcmluZyB0aGVtXG4gICAgLy8gbG9nZ2VkIGluLiBUaGUgYHVzZXJgIGFyZ3VtZW50IHdpbGwgYmUgdGhlIHVzZXIgaW4gdGhlIGRhdGFiYXNlIHRoYXRcbiAgICAvLyBtYXRjaGVkIHRoZSB1c2VybmFtZS9wYXNzd29yZC5cbiAgICAvL1xuICAgIC8vIElmIHlvdSB3YW50IHRvIGFsbG93IHRoaXMgdXNlciB0byBsb2cgaW4gc2ltcGx5IHJldHVybiB0aGUgdXNlci5cbiAgICAvL1xuICAgIC8vIElmIHlvdSB3YW50IHRvIHByZXZlbnQgc29tZW9uZSBsb2dnaW5nIGluIGZvciBhbm90aGVyIHJlYXNvbiAobWF5YmUgdGhleVxuICAgIC8vIGRpZG4ndCB2YWxpZGF0ZSB0aGVpciBlbWFpbCB5ZXQpLCB0aHJvdyBhbiBlcnJvciBhbmQgaXQgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIGJ5IHRoZSBgbG9nSW4oKWAgZnVuY3Rpb24gZnJvbSBgdXNlQXV0aCgpYCBpbiB0aGUgZm9ybSBvZjpcbiAgICAvLyBgeyBtZXNzYWdlOiAnRXJyb3IgbWVzc2FnZScgfWBcbiAgICBoYW5kbGVyOiAodXNlcikgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9LFxuXG4gICAgZXJyb3JzOiB7XG4gICAgICB1c2VybmFtZU9yUGFzc3dvcmRNaXNzaW5nOiAnQm90aCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgYXJlIHJlcXVpcmVkJyxcbiAgICAgIHVzZXJuYW1lTm90Rm91bmQ6ICdVc2VybmFtZSAke3VzZXJuYW1lfSBub3QgZm91bmQnLFxuICAgICAgLy8gRm9yIHNlY3VyaXR5IHJlYXNvbnMgeW91IG1heSB3YW50IHRvIG1ha2UgdGhpcyB0aGUgc2FtZSBhcyB0aGVcbiAgICAgIC8vIHVzZXJuYW1lTm90Rm91bmQgZXJyb3Igc28gdGhhdCBhIG1hbGljaW91cyB1c2VyIGNhbid0IHVzZSB0aGUgZXJyb3JcbiAgICAgIC8vIHRvIG5hcnJvdyBkb3duIGlmIGl0J3MgdGhlIHVzZXJuYW1lIG9yIHBhc3N3b3JkIHRoYXQncyBpbmNvcnJlY3RcbiAgICAgIGluY29ycmVjdFBhc3N3b3JkOiAnSW5jb3JyZWN0IHBhc3N3b3JkIGZvciAke3VzZXJuYW1lfScsXG4gICAgfSxcblxuICAgIC8vIEhvdyBsb25nIGEgdXNlciB3aWxsIHJlbWFpbiBsb2dnZWQgaW4sIGluIHNlY29uZHNcbiAgICBleHBpcmVzOiA2MCAqIDYwICogMjQgKiAzNjUgKiAxMCxcbiAgfVxuXG4gIGNvbnN0IHJlc2V0UGFzc3dvcmRPcHRpb25zOiBEYkF1dGhIYW5kbGVyT3B0aW9uc1sncmVzZXRQYXNzd29yZCddID0ge1xuICAgIC8vIGhhbmRsZXIoKSBpcyBpbnZva2VkIGFmdGVyIHRoZSBwYXNzd29yZCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZCBpblxuICAgIC8vIHRoZSBkYXRhYmFzZS4gUmV0dXJuaW5nIGFueXRoaW5nIHRydXRoeSB3aWxsIGF1dG9tYXRpY2FsbHkgbG9nIHRoZSB1c2VyXG4gICAgLy8gaW4uIFJldHVybiBgZmFsc2VgIG90aGVyd2lzZSwgYW5kIGluIHRoZSBSZXNldCBQYXNzd29yZCBwYWdlIHJlZGlyZWN0IHRoZVxuICAgIC8vIHVzZXIgdG8gdGhlIGxvZ2luIHBhZ2UuXG4gICAgaGFuZGxlcjogKF91c2VyKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG5cbiAgICAvLyBJZiBgZmFsc2VgIHRoZW4gdGhlIG5ldyBwYXNzd29yZCBNVVNUIGJlIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG9uZVxuICAgIGFsbG93UmV1c2VkUGFzc3dvcmQ6IHRydWUsXG5cbiAgICBlcnJvcnM6IHtcbiAgICAgIC8vIHRoZSByZXNldFRva2VuIGlzIHZhbGlkLCBidXQgZXhwaXJlZFxuICAgICAgcmVzZXRUb2tlbkV4cGlyZWQ6ICdyZXNldFRva2VuIGlzIGV4cGlyZWQnLFxuICAgICAgLy8gbm8gdXNlciB3YXMgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gcmVzZXRUb2tlblxuICAgICAgcmVzZXRUb2tlbkludmFsaWQ6ICdyZXNldFRva2VuIGlzIGludmFsaWQnLFxuICAgICAgLy8gdGhlIHJlc2V0VG9rZW4gd2FzIG5vdCBwcmVzZW50IGluIHRoZSBVUkxcbiAgICAgIHJlc2V0VG9rZW5SZXF1aXJlZDogJ3Jlc2V0VG9rZW4gaXMgcmVxdWlyZWQnLFxuICAgICAgLy8gbmV3IHBhc3N3b3JkIGlzIHRoZSBzYW1lIGFzIHRoZSBvbGQgcGFzc3dvcmQgKGFwcGFyZW50bHkgdGhleSBkaWQgbm90IGZvcmdldCBpdClcbiAgICAgIHJldXNlZFBhc3N3b3JkOiAnTXVzdCBjaG9vc2UgYSBuZXcgcGFzc3dvcmQnLFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBzaWdudXBPcHRpb25zOiBEYkF1dGhIYW5kbGVyT3B0aW9uc1snc2lnbnVwJ10gPSB7XG4gICAgLy8gV2hhdGV2ZXIgeW91IHdhbnQgdG8gaGFwcGVuIHRvIHlvdXIgZGF0YSBvbiBuZXcgdXNlciBzaWdudXAuIFJlZHdvb2Qgd2lsbFxuICAgIC8vIGNoZWNrIGZvciBkdXBsaWNhdGUgdXNlcm5hbWVzIGJlZm9yZSBjYWxsaW5nIHRoaXMgaGFuZGxlci4gQXQgYSBtaW5pbXVtXG4gICAgLy8geW91IG5lZWQgdG8gc2F2ZSB0aGUgYHVzZXJuYW1lYCwgYGhhc2hlZFBhc3N3b3JkYCBhbmQgYHNhbHRgIHRvIHlvdXJcbiAgICAvLyB1c2VyIHRhYmxlLiBgdXNlckF0dHJpYnV0ZXNgIGNvbnRhaW5zIGFueSBhZGRpdGlvbmFsIG9iamVjdCBtZW1iZXJzIHRoYXRcbiAgICAvLyB3ZXJlIGluY2x1ZGVkIGluIHRoZSBvYmplY3QgZ2l2ZW4gdG8gdGhlIGBzaWduVXAoKWAgZnVuY3Rpb24geW91IGdvdFxuICAgIC8vIGZyb20gYHVzZUF1dGgoKWAuXG4gICAgLy9cbiAgICAvLyBJZiB5b3Ugd2FudCB0aGUgdXNlciB0byBiZSBpbW1lZGlhdGVseSBsb2dnZWQgaW4sIHJldHVybiB0aGUgdXNlciB0aGF0XG4gICAgLy8gd2FzIGNyZWF0ZWQuXG4gICAgLy9cbiAgICAvLyBJZiB0aGlzIGhhbmRsZXIgdGhyb3dzIGFuIGVycm9yLCBpdCB3aWxsIGJlIHJldHVybmVkIGJ5IHRoZSBgc2lnblVwKClgXG4gICAgLy8gZnVuY3Rpb24gaW4gdGhlIGZvcm0gb2Y6IGB7IGVycm9yOiAnRXJyb3IgbWVzc2FnZScgfWAuXG4gICAgLy9cbiAgICAvLyBJZiB0aGlzIHJldHVybnMgYW55dGhpbmcgZWxzZSwgaXQgd2lsbCBiZSByZXR1cm5lZCBieSB0aGVcbiAgICAvLyBgc2lnblVwKClgIGZ1bmN0aW9uIGluIHRoZSBmb3JtIG9mOiBgeyBtZXNzYWdlOiAnU3RyaW5nIGhlcmUnIH1gLlxuICAgIGhhbmRsZXI6ICh7IHVzZXJuYW1lLCBoYXNoZWRQYXNzd29yZCwgc2FsdCwgdXNlckF0dHJpYnV0ZXMgfSkgPT4ge1xuICAgICAgcmV0dXJuIGRiLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGVtYWlsOiB1c2VybmFtZSxcbiAgICAgICAgICBoYXNoZWRQYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgICAgc2FsdDogc2FsdCxcbiAgICAgICAgICAvLyBuYW1lOiB1c2VyQXR0cmlidXRlcy5uYW1lXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvLyBJbmNsdWRlIGFueSBmb3JtYXQgY2hlY2tzIGZvciBwYXNzd29yZCBoZXJlLiBSZXR1cm4gYHRydWVgIGlmIHRoZVxuICAgIC8vIHBhc3N3b3JkIGlzIHZhbGlkLCBvdGhlcndpc2UgdGhyb3cgYSBgUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JgLlxuICAgIC8vIEltcG9ydCB0aGUgZXJyb3IgYWxvbmcgd2l0aCBgRGJBdXRoSGFuZGxlcmAgZnJvbSBgQHJlZHdvb2Rqcy9hcGlgIGFib3ZlLlxuICAgIHBhc3N3b3JkVmFsaWRhdGlvbjogKF9wYXNzd29yZCkgPT4ge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuXG4gICAgZXJyb3JzOiB7XG4gICAgICAvLyBgZmllbGRgIHdpbGwgYmUgZWl0aGVyIFwidXNlcm5hbWVcIiBvciBcInBhc3N3b3JkXCJcbiAgICAgIGZpZWxkTWlzc2luZzogJyR7ZmllbGR9IGlzIHJlcXVpcmVkJyxcbiAgICAgIHVzZXJuYW1lVGFrZW46ICdVc2VybmFtZSBgJHt1c2VybmFtZX1gIGFscmVhZHkgaW4gdXNlJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgYXV0aEhhbmRsZXIgPSBuZXcgRGJBdXRoSGFuZGxlcihldmVudCwgY29udGV4dCwge1xuICAgIC8vIFByb3ZpZGUgcHJpc21hIGRiIGNsaWVudFxuICAgIGRiOiBkYixcblxuICAgIC8vIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB5b3UnZCBjYWxsIG9uIGBkYmAgdG8gYWNjZXNzIHlvdXIgdXNlciB0YWJsZS5cbiAgICAvLyBpLmUuIGlmIHlvdXIgUHJpc21hIG1vZGVsIGlzIG5hbWVkIGBVc2VyYCB0aGlzIHZhbHVlIHdvdWxkIGJlIGB1c2VyYCwgYXMgaW4gYGRiLnVzZXJgXG4gICAgYXV0aE1vZGVsQWNjZXNzb3I6ICd1c2VyJyxcblxuICAgIC8vIEEgbWFwIG9mIHdoYXQgZGJBdXRoIGNhbGxzIGEgZmllbGQgdG8gd2hhdCB5b3VyIGRhdGFiYXNlIGNhbGxzIGl0LlxuICAgIC8vIGBpZGAgaXMgd2hhdGV2ZXIgY29sdW1uIHlvdSB1c2UgdG8gdW5pcXVlbHkgaWRlbnRpZnkgYSB1c2VyIChwcm9iYWJseVxuICAgIC8vIHNvbWV0aGluZyBsaWtlIGBpZGAgb3IgYHVzZXJJZGAgb3IgZXZlbiBgZW1haWxgKVxuICAgIGF1dGhGaWVsZHM6IHtcbiAgICAgIGlkOiAnaWQnLFxuICAgICAgdXNlcm5hbWU6ICdlbWFpbCcsXG4gICAgICBoYXNoZWRQYXNzd29yZDogJ2hhc2hlZFBhc3N3b3JkJyxcbiAgICAgIHNhbHQ6ICdzYWx0JyxcbiAgICAgIHJlc2V0VG9rZW46ICdyZXNldFRva2VuJyxcbiAgICAgIHJlc2V0VG9rZW5FeHBpcmVzQXQ6ICdyZXNldFRva2VuRXhwaXJlc0F0JyxcbiAgICB9LFxuXG4gICAgLy8gU3BlY2lmaWVzIGF0dHJpYnV0ZXMgb24gdGhlIGNvb2tpZSB0aGF0IGRiQXV0aCBzZXRzIGluIG9yZGVyIHRvIHJlbWVtYmVyXG4gICAgLy8gd2hvIGlzIGxvZ2dlZCBpbi4gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQ29va2llcyNyZXN0cmljdF9hY2Nlc3NfdG9fY29va2llc1xuICAgIGNvb2tpZToge1xuICAgICAgSHR0cE9ubHk6IHRydWUsXG4gICAgICBQYXRoOiAnLycsXG4gICAgICBTYW1lU2l0ZTogJ1N0cmljdCcsXG4gICAgICBTZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnLFxuXG4gICAgICAvLyBJZiB5b3UgbmVlZCB0byBhbGxvdyBvdGhlciBkb21haW5zIChiZXNpZGVzIHRoZSBhcGkgc2lkZSkgYWNjZXNzIHRvXG4gICAgICAvLyB0aGUgZGJBdXRoIHNlc3Npb24gY29va2llOlxuICAgICAgLy8gRG9tYWluOiAnZXhhbXBsZS5jb20nLFxuICAgIH0sXG5cbiAgICBmb3Jnb3RQYXNzd29yZDogZm9yZ290UGFzc3dvcmRPcHRpb25zLFxuICAgIGxvZ2luOiBsb2dpbk9wdGlvbnMsXG4gICAgcmVzZXRQYXNzd29yZDogcmVzZXRQYXNzd29yZE9wdGlvbnMsXG4gICAgc2lnbnVwOiBzaWdudXBPcHRpb25zLFxuICB9KVxuXG4gIHJldHVybiBhd2FpdCBhdXRoSGFuZGxlci5pbnZva2UoKVxufVxuIl0sIm1hcHBpbmdzIjoiQUFFQSxTQUFTQSxhQUFhLFFBQThCLDRCQUE0QjtBQUVoRixTQUFTQyxFQUFFO0FBRVgsT0FBTyxNQUFNQyxPQUFPLEdBQUcsTUFBQUEsQ0FDckJDLEtBQTJCLEVBQzNCQyxPQUFnQixLQUNiO0VBQ0gsTUFBTUMscUJBQTZELEdBQUc7SUFDcEU7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0FILE9BQU8sRUFBR0ksSUFBSSxJQUFLO01BQ2pCLE9BQU9BLElBQUk7SUFDYixDQUFDO0lBRUQ7SUFDQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUVyQkMs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