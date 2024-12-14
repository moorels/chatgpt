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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEYkF1dGhIYW5kbGVyIiwiZGIiLCJoYW5kbGVyIiwiZXZlbnQiLCJjb250ZXh0IiwiZm9yZ290UGFzc3dvcmRPcHRpb25zIiwidXNlciIsImV4cGlyZXMiLCJlcnJvcnMiLCJ1c2VybmFtZU5vdEZvdW5kIiwidXNlcm5hbWVSZXF1aXJlZCIsImxvZ2luT3B0aW9ucyIsInVzZXJuYW1lT3JQYXNzd29yZE1pc3NpbmciLCJpbmNvcnJlY3RQYXNzd29yZCIsInJlc2V0UGFzc3dvcmRPcHRpb25zIiwiX3VzZXIiLCJhbGxvd1JldXNlZFBhc3N3b3JkIiwicmVzZXRUb2tlbkV4cGlyZWQiLCJyZXNldFRva2VuSW52YWxpZCIsInJlc2V0VG9rZW5SZXF1aXJlZCIsInJldXNlZFBhc3N3b3JkIiwic2lnbnVwT3B0aW9ucyIsInVzZXJuYW1lIiwiaGFzaGVkUGFzc3dvcmQiLCJzYWx0IiwidXNlckF0dHJpYnV0ZXMiLCJjcmVhdGUiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZFZhbGlkYXRpb24iLCJfcGFzc3dvcmQiLCJmaWVsZE1pc3NpbmciLCJ1c2VybmFtZVRha2VuIiwiYXV0aEhhbmRsZXIiLCJhdXRoTW9kZWxBY2Nlc3NvciIsImF1dGhGaWVsZHMiLCJpZCIsInJlc2V0VG9rZW4iLCJyZXNldFRva2VuRXhwaXJlc0F0IiwiY29va2llIiwiSHR0cE9ubHkiLCJQYXRoIiwiU2FtZVNpdGUiLCJTZWN1cmUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJmb3Jnb3RQYXNzd29yZCIsImxvZ2luIiwicmVzZXRQYXNzd29yZCIsInNpZ251cCIsImludm9rZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZnVuY3Rpb25zL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBUElHYXRld2F5UHJveHlFdmVudCwgQ29udGV4dCB9IGZyb20gJ2F3cy1sYW1iZGEnXHJcblxyXG5pbXBvcnQgeyBEYkF1dGhIYW5kbGVyLCBEYkF1dGhIYW5kbGVyT3B0aW9ucyB9IGZyb20gJ0ByZWR3b29kanMvYXV0aC1kYmF1dGgtYXBpJ1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICdzcmMvbGliL2RiJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoXHJcbiAgZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50LFxyXG4gIGNvbnRleHQ6IENvbnRleHRcclxuKSA9PiB7XHJcbiAgY29uc3QgZm9yZ290UGFzc3dvcmRPcHRpb25zOiBEYkF1dGhIYW5kbGVyT3B0aW9uc1snZm9yZ290UGFzc3dvcmQnXSA9IHtcclxuICAgIC8vIGhhbmRsZXIoKSBpcyBpbnZva2VkIGFmdGVyIHZlcmlmeWluZyB0aGF0IGEgdXNlciB3YXMgZm91bmQgd2l0aCB0aGUgZ2l2ZW5cclxuICAgIC8vIHVzZXJuYW1lLiBUaGlzIGlzIHdoZXJlIHlvdSBjYW4gc2VuZCB0aGUgdXNlciBhbiBlbWFpbCB3aXRoIGEgbGluayB0b1xyXG4gICAgLy8gcmVzZXQgdGhlaXIgcGFzc3dvcmQuIFdpdGggdGhlIGRlZmF1bHQgZGJBdXRoIHJvdXRlcyBhbmQgZmllbGQgbmFtZXMsIHRoZVxyXG4gICAgLy8gVVJMIHRvIHJlc2V0IHRoZSBwYXNzd29yZCB3aWxsIGJlOlxyXG4gICAgLy9cclxuICAgIC8vIGh0dHBzOi8vZXhhbXBsZS5jb20vcmVzZXQtcGFzc3dvcmQ/cmVzZXRUb2tlbj0ke3VzZXIucmVzZXRUb2tlbn1cclxuICAgIC8vXHJcbiAgICAvLyBXaGF0ZXZlciBpcyByZXR1cm5lZCBmcm9tIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSByZXR1cm5lZCBmcm9tXHJcbiAgICAvLyB0aGUgYGZvcmdvdFBhc3N3b3JkKClgIGZ1bmN0aW9uIHRoYXQgaXMgZGVzdHJ1Y3R1cmVkIGZyb20gYHVzZUF1dGgoKWBcclxuICAgIC8vIFlvdSBjb3VsZCB1c2UgdGhpcyByZXR1cm4gdmFsdWUgdG8sIGZvciBleGFtcGxlLCBzaG93IHRoZSBlbWFpbFxyXG4gICAgLy8gYWRkcmVzcyBpbiBhIHRvYXN0IG1lc3NhZ2Ugc28gdGhlIHVzZXIgd2lsbCBrbm93IGl0IHdvcmtlZCBhbmQgd2hlcmVcclxuICAgIC8vIHRvIGxvb2sgZm9yIHRoZSBlbWFpbC5cclxuICAgIGhhbmRsZXI6ICh1c2VyKSA9PiB7XHJcbiAgICAgIHJldHVybiB1c2VyXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEhvdyBsb25nIHRoZSByZXNldFRva2VuIGlzIHZhbGlkIGZvciwgaW4gc2Vjb25kcyAoZGVmYXVsdCBpcyAyNCBob3VycylcclxuICAgIGV4cGlyZXM6IDYwICogNjAgKiAyNCxcclxuXHJcbiAgICBlcnJvcnM6IHtcclxuICAgICAgLy8gZm9yIHNlY3VyaXR5IHJlYXNvbnMgeW91IG1heSB3YW50IHRvIGJlIHZhZ3VlIGhlcmUgcmF0aGVyIHRoYW4gZXhwb3NlXHJcbiAgICAgIC8vIHRoZSBmYWN0IHRoYXQgdGhlIGVtYWlsIGFkZHJlc3Mgd2Fzbid0IGZvdW5kIChwcmV2ZW50cyBmaXNoaW5nIGZvclxyXG4gICAgICAvLyB2YWxpZCBlbWFpbCBhZGRyZXNzZXMpXHJcbiAgICAgIHVzZXJuYW1lTm90Rm91bmQ6ICdVc2VybmFtZSBub3QgZm91bmQnLFxyXG4gICAgICAvLyBpZiB0aGUgdXNlciBzb21laG93IGdldHMgYXJvdW5kIGNsaWVudCB2YWxpZGF0aW9uXHJcbiAgICAgIHVzZXJuYW1lUmVxdWlyZWQ6ICdVc2VybmFtZSBpcyByZXF1aXJlZCcsXHJcbiAgICB9LFxyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9naW5PcHRpb25zOiBEYkF1dGhIYW5kbGVyT3B0aW9uc1snbG9naW4nXSA9IHtcclxuICAgIC8vIGhhbmRsZXIoKSBpcyBjYWxsZWQgYWZ0ZXIgZmluZGluZyB0aGUgdXNlciB0aGF0IG1hdGNoZXMgdGhlXHJcbiAgICAvLyB1c2VybmFtZS9wYXNzd29yZCBwcm92aWRlZCBhdCBsb2dpbiwgYnV0IGJlZm9yZSBhY3R1YWxseSBjb25zaWRlcmluZyB0aGVtXHJcbiAgICAvLyBsb2dnZWQgaW4uIFRoZSBgdXNlcmAgYXJndW1lbnQgd2lsbCBiZSB0aGUgdXNlciBpbiB0aGUgZGF0YWJhc2UgdGhhdFxyXG4gICAgLy8gbWF0Y2hlZCB0aGUgdXNlcm5hbWUvcGFzc3dvcmQuXHJcbiAgICAvL1xyXG4gICAgLy8gSWYgeW91IHdhbnQgdG8gYWxsb3cgdGhpcyB1c2VyIHRvIGxvZyBpbiBzaW1wbHkgcmV0dXJuIHRoZSB1c2VyLlxyXG4gICAgLy9cclxuICAgIC8vIElmIHlvdSB3YW50IHRvIHByZXZlbnQgc29tZW9uZSBsb2dnaW5nIGluIGZvciBhbm90aGVyIHJlYXNvbiAobWF5YmUgdGhleVxyXG4gICAgLy8gZGlkbid0IHZhbGlkYXRlIHRoZWlyIGVtYWlsIHlldCksIHRocm93IGFuIGVycm9yIGFuZCBpdCB3aWxsIGJlIHJldHVybmVkXHJcbiAgICAvLyBieSB0aGUgYGxvZ0luKClgIGZ1bmN0aW9uIGZyb20gYHVzZUF1dGgoKWAgaW4gdGhlIGZvcm0gb2Y6XHJcbiAgICAvLyBgeyBtZXNzYWdlOiAnRXJyb3IgbWVzc2FnZScgfWBcclxuICAgIGhhbmRsZXI6ICh1c2VyKSA9PiB7XHJcbiAgICAgIHJldHVybiB1c2VyXHJcbiAgICB9LFxyXG5cclxuICAgIGVycm9yczoge1xyXG4gICAgICB1c2VybmFtZU9yUGFzc3dvcmRNaXNzaW5nOiAnQm90aCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgYXJlIHJlcXVpcmVkJyxcclxuICAgICAgdXNlcm5hbWVOb3RGb3VuZDogJ1VzZXJuYW1lICR7dXNlcm5hbWV9IG5vdCBmb3VuZCcsXHJcbiAgICAgIC8vIEZvciBzZWN1cml0eSByZWFzb25zIHlvdSBtYXkgd2FudCB0byBtYWtlIHRoaXMgdGhlIHNhbWUgYXMgdGhlXHJcbiAgICAgIC8vIHVzZXJuYW1lTm90Rm91bmQgZXJyb3Igc28gdGhhdCBhIG1hbGljaW91cyB1c2VyIGNhbid0IHVzZSB0aGUgZXJyb3JcclxuICAgICAgLy8gdG8gbmFycm93IGRvd24gaWYgaXQncyB0aGUgdXNlcm5hbWUgb3IgcGFzc3dvcmQgdGhhdCdzIGluY29ycmVjdFxyXG4gICAgICBpbmNvcnJlY3RQYXNzd29yZDogJ0luY29ycmVjdCBwYXNzd29yZCBmb3IgJHt1c2VybmFtZX0nLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBIb3cgbG9uZyBhIHVzZXIgd2lsbCByZW1haW4gbG9nZ2VkIGluLCBpbiBzZWNvbmRzXHJcbiAgICBleHBpcmVzOiA2MCAqIDYwICogMjQgKiAzNjUgKiAxMCxcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0UGFzc3dvcmRPcHRpb25zOiBEYkF1dGhIYW5kbGVyT3B0aW9uc1sncmVzZXRQYXNzd29yZCddID0ge1xyXG4gICAgLy8gaGFuZGxlcigpIGlzIGludm9rZWQgYWZ0ZXIgdGhlIHBhc3N3b3JkIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkIGluXHJcbiAgICAvLyB0aGUgZGF0YWJhc2UuIFJldHVybmluZyBhbnl0aGluZyB0cnV0aHkgd2lsbCBhdXRvbWF0aWNhbGx5IGxvZyB0aGUgdXNlclxyXG4gICAgLy8gaW4uIFJldHVybiBgZmFsc2VgIG90aGVyd2lzZSwgYW5kIGluIHRoZSBSZXNldCBQYXNzd29yZCBwYWdlIHJlZGlyZWN0IHRoZVxyXG4gICAgLy8gdXNlciB0byB0aGUgbG9naW4gcGFnZS5cclxuICAgIGhhbmRsZXI6IChfdXNlcikgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBJZiBgZmFsc2VgIHRoZW4gdGhlIG5ldyBwYXNzd29yZCBNVVNUIGJlIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG9uZVxyXG4gICAgYWxsb3dSZXVzZWRQYXNzd29yZDogdHJ1ZSxcclxuXHJcbiAgICBlcnJvcnM6IHtcclxuICAgICAgLy8gdGhlIHJlc2V0VG9rZW4gaXMgdmFsaWQsIGJ1dCBleHBpcmVkXHJcbiAgICAgIHJlc2V0VG9rZW5FeHBpcmVkOiAncmVzZXRUb2tlbiBpcyBleHBpcmVkJyxcclxuICAgICAgLy8gbm8gdXNlciB3YXMgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gcmVzZXRUb2tlblxyXG4gICAgICByZXNldFRva2VuSW52YWxpZDogJ3Jlc2V0VG9rZW4gaXMgaW52YWxpZCcsXHJcbiAgICAgIC8vIHRoZSByZXNldFRva2VuIHdhcyBub3QgcHJlc2VudCBpbiB0aGUgVVJMXHJcbiAgICAgIHJlc2V0VG9rZW5SZXF1aXJlZDogJ3Jlc2V0VG9rZW4gaXMgcmVxdWlyZWQnLFxyXG4gICAgICAvLyBuZXcgcGFzc3dvcmQgaXMgdGhlIHNhbWUgYXMgdGhlIG9sZCBwYXNzd29yZCAoYXBwYXJlbnRseSB0aGV5IGRpZCBub3QgZm9yZ2V0IGl0KVxyXG4gICAgICByZXVzZWRQYXNzd29yZDogJ011c3QgY2hvb3NlIGEgbmV3IHBhc3N3b3JkJyxcclxuICAgIH0sXHJcbiAgfVxyXG5cclxuICBjb25zdCBzaWdudXBPcHRpb25zOiBEYkF1dGhIYW5kbGVyT3B0aW9uc1snc2lnbnVwJ10gPSB7XHJcbiAgICAvLyBXaGF0ZXZlciB5b3Ugd2FudCB0byBoYXBwZW4gdG8geW91ciBkYXRhIG9uIG5ldyB1c2VyIHNpZ251cC4gUmVkd29vZCB3aWxsXHJcbiAgICAvLyBjaGVjayBmb3IgZHVwbGljYXRlIHVzZXJuYW1lcyBiZWZvcmUgY2FsbGluZyB0aGlzIGhhbmRsZXIuIEF0IGEgbWluaW11bVxyXG4gICAgLy8geW91IG5lZWQgdG8gc2F2ZSB0aGUgYHVzZXJuYW1lYCwgYGhhc2hlZFBhc3N3b3JkYCBhbmQgYHNhbHRgIHRvIHlvdXJcclxuICAgIC8vIHVzZXIgdGFibGUuIGB1c2VyQXR0cmlidXRlc2AgY29udGFpbnMgYW55IGFkZGl0aW9uYWwgb2JqZWN0IG1lbWJlcnMgdGhhdFxyXG4gICAgLy8gd2VyZSBpbmNsdWRlZCBpbiB0aGUgb2JqZWN0IGdpdmVuIHRvIHRoZSBgc2lnblVwKClgIGZ1bmN0aW9uIHlvdSBnb3RcclxuICAgIC8vIGZyb20gYHVzZUF1dGgoKWAuXHJcbiAgICAvL1xyXG4gICAgLy8gSWYgeW91IHdhbnQgdGhlIHVzZXIgdG8gYmUgaW1tZWRpYXRlbHkgbG9nZ2VkIGluLCByZXR1cm4gdGhlIHVzZXIgdGhhdFxyXG4gICAgLy8gd2FzIGNyZWF0ZWQuXHJcbiAgICAvL1xyXG4gICAgLy8gSWYgdGhpcyBoYW5kbGVyIHRocm93cyBhbiBlcnJvciwgaXQgd2lsbCBiZSByZXR1cm5lZCBieSB0aGUgYHNpZ25VcCgpYFxyXG4gICAgLy8gZnVuY3Rpb24gaW4gdGhlIGZvcm0gb2Y6IGB7IGVycm9yOiAnRXJyb3IgbWVzc2FnZScgfWAuXHJcbiAgICAvL1xyXG4gICAgLy8gSWYgdGhpcyByZXR1cm5zIGFueXRoaW5nIGVsc2UsIGl0IHdpbGwgYmUgcmV0dXJuZWQgYnkgdGhlXHJcbiAgICAvLyBgc2lnblVwKClgIGZ1bmN0aW9uIGluIHRoZSBmb3JtIG9mOiBgeyBtZXNzYWdlOiAnU3RyaW5nIGhlcmUnIH1gLlxyXG4gICAgaGFuZGxlcjogKHsgdXNlcm5hbWUsIGhhc2hlZFBhc3N3b3JkLCBzYWx0LCB1c2VyQXR0cmlidXRlcyB9KSA9PiB7XHJcbiAgICAgIHJldHVybiBkYi51c2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgZW1haWw6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgaGFzaGVkUGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG4gICAgICAgICAgc2FsdDogc2FsdCxcclxuICAgICAgICAgIC8vIG5hbWU6IHVzZXJBdHRyaWJ1dGVzLm5hbWVcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBJbmNsdWRlIGFueSBmb3JtYXQgY2hlY2tzIGZvciBwYXNzd29yZCBoZXJlLiBSZXR1cm4gYHRydWVgIGlmIHRoZVxyXG4gICAgLy8gcGFzc3dvcmQgaXMgdmFsaWQsIG90aGVyd2lzZSB0aHJvdyBhIGBQYXNzd29yZFZhbGlkYXRpb25FcnJvcmAuXHJcbiAgICAvLyBJbXBvcnQgdGhlIGVycm9yIGFsb25nIHdpdGggYERiQXV0aEhhbmRsZXJgIGZyb20gYEByZWR3b29kanMvYXBpYCBhYm92ZS5cclxuICAgIHBhc3N3b3JkVmFsaWRhdGlvbjogKF9wYXNzd29yZCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBlcnJvcnM6IHtcclxuICAgICAgLy8gYGZpZWxkYCB3aWxsIGJlIGVpdGhlciBcInVzZXJuYW1lXCIgb3IgXCJwYXNzd29yZFwiXHJcbiAgICAgIGZpZWxkTWlzc2luZzogJyR7ZmllbGR9IGlzIHJlcXVpcmVkJyxcclxuICAgICAgdXNlcm5hbWVUYWtlbjogJ1VzZXJuYW1lIGAke3VzZXJuYW1lfWAgYWxyZWFkeSBpbiB1c2UnLFxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIGNvbnN0IGF1dGhIYW5kbGVyID0gbmV3IERiQXV0aEhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIHtcclxuICAgIC8vIFByb3ZpZGUgcHJpc21hIGRiIGNsaWVudFxyXG4gICAgZGI6IGRiLFxyXG5cclxuICAgIC8vIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB5b3UnZCBjYWxsIG9uIGBkYmAgdG8gYWNjZXNzIHlvdXIgdXNlciB0YWJsZS5cclxuICAgIC8vIGkuZS4gaWYgeW91ciBQcmlzbWEgbW9kZWwgaXMgbmFtZWQgYFVzZXJgIHRoaXMgdmFsdWUgd291bGQgYmUgYHVzZXJgLCBhcyBpbiBgZGIudXNlcmBcclxuICAgIGF1dGhNb2RlbEFjY2Vzc29yOiAndXNlcicsXHJcblxyXG4gICAgLy8gQSBtYXAgb2Ygd2hhdCBkYkF1dGggY2FsbHMgYSBmaWVsZCB0byB3aGF0IHlvdXIgZGF0YWJhc2UgY2FsbHMgaXQuXHJcbiAgICAvLyBgaWRgIGlzIHdoYXRldmVyIGNvbHVtbiB5b3UgdXNlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IGEgdXNlciAocHJvYmFibHlcclxuICAgIC8vIHNvbWV0aGluZyBsaWtlIGBpZGAgb3IgYHVzZXJJZGAgb3IgZXZlbiBgZW1haWxgKVxyXG4gICAgYXV0aEZpZWxkczoge1xyXG4gICAgICBpZDogJ2lkJyxcclxuICAgICAgdXNlcm5hbWU6ICdlbWFpbCcsXHJcbiAgICAgIGhhc2hlZFBhc3N3b3JkOiAnaGFzaGVkUGFzc3dvcmQnLFxyXG4gICAgICBzYWx0OiAnc2FsdCcsXHJcbiAgICAgIHJlc2V0VG9rZW46ICdyZXNldFRva2VuJyxcclxuICAgICAgcmVzZXRUb2tlbkV4cGlyZXNBdDogJ3Jlc2V0VG9rZW5FeHBpcmVzQXQnLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBTcGVjaWZpZXMgYXR0cmlidXRlcyBvbiB0aGUgY29va2llIHRoYXQgZGJBdXRoIHNldHMgaW4gb3JkZXIgdG8gcmVtZW1iZXJcclxuICAgIC8vIHdobyBpcyBsb2dnZWQgaW4uIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Nvb2tpZXMjcmVzdHJpY3RfYWNjZXNzX3RvX2Nvb2tpZXNcclxuICAgIGNvb2tpZToge1xyXG4gICAgICBIdHRwT25seTogdHJ1ZSxcclxuICAgICAgUGF0aDogJy8nLFxyXG4gICAgICBTYW1lU2l0ZTogJ1N0cmljdCcsXHJcbiAgICAgIFNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcsXHJcblxyXG4gICAgICAvLyBJZiB5b3UgbmVlZCB0byBhbGxvdyBvdGhlciBkb21haW5zIChiZXNpZGVzIHRoZSBhcGkgc2lkZSkgYWNjZXNzIHRvXHJcbiAgICAgIC8vIHRoZSBkYkF1dGggc2Vzc2lvbiBjb29raWU6XHJcbiAgICAgIC8vIERvbWFpbjogJ2V4YW1wbGUuY29tJyxcclxuICAgIH0sXHJcblxyXG4gICAgZm9yZ290UGFzc3dvcmQ6IGZvcmdvdFBhc3N3b3JkT3B0aW9ucyxcclxuICAgIGxvZ2luOiBsb2dpbk9wdGlvbnMsXHJcbiAgICByZXNldFBhc3N3b3JkOiByZXNldFBhc3N3b3JkT3B0aW9ucyxcclxuICAgIHNpZ251cDogc2lnbnVwT3B0aW9ucyxcclxuICB9KVxyXG5cclxuICByZXR1cm4g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