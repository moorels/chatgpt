import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
import _someInstanceProperty from "@babel/runtime-corejs3/core-js/instance/some";
import { AuthenticationError, ForbiddenError, context } from '@redwoodjs/graphql-server';
import { db } from './db';

/**
 * The session object sent in as the first argument to getCurrentUser() will
 * have a single key `id` containing the unique ID of the logged in user
 * (whatever field you set as `authFields.id` in your auth function config).
 * You'll need to update the call to `db` below if you use a different model
 * name or unique field name, for example:
 *
 *   return await db.profile.findUnique({ where: { email: session.id } })
 *                   ───┬───                       ──┬──
 *      model accessor ─┘      unique id field name ─┘
 *
 * !! BEWARE !! Anything returned from this function will be available to the
 * client--it becomes the content of `currentUser` on the web side (as well as
 * `context.currentUser` on the api side). You should carefully add additional
 * fields to the `select` object below once you've decided they are safe to be
 * seen if someone were to open the Web Inspector in their browser.
 */
export const getCurrentUser = async session => {
  if (!session || typeof session.id !== 'number') {
    throw new Error('Invalid session');
  }
  return await db.user.findUnique({
    where: {
      id: session.id
    },
    select: {
      id: true
    }
  });
};

/**
 * The user is authenticated if there is a currentUser in the context
 *
 * @returns {boolean} - If the currentUser is authenticated
 */
export const isAuthenticated = () => {
  return !!context.currentUser;
};

/**
 * When checking role membership, roles can be a single value, a list, or none.
 * You can use Prisma enums too (if you're using them for roles), just import your enum type from `@prisma/client`
 */

/**
 * Checks if the currentUser is authenticated (and assigned one of the given roles)
 *
 * @param roles: {@link AllowedRoles} - Checks if the currentUser is assigned one of these roles
 *
 * @returns {boolean} - Returns true if the currentUser is logged in and assigned one of the given roles,
 * or when no roles are provided to check against. Otherwise returns false.
 */
export const hasRole = roles => {
  if (!isAuthenticated()) {
    return false;
  }
  const currentUserRoles = context.currentUser?.roles;
  if (typeof roles === 'string') {
    if (typeof currentUserRoles === 'string') {
      // roles to check is a string, currentUser.roles is a string
      return currentUserRoles === roles;
    } else if (_Array$isArray(currentUserRoles)) {
      // roles to check is a string, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => roles === allowedRole);
    }
  }
  if (_Array$isArray(roles)) {
    if (_Array$isArray(currentUserRoles)) {
      // roles to check is an array, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => _includesInstanceProperty(roles).call(roles, allowedRole));
    } else if (typeof currentUserRoles === 'string') {
      // roles to check is an array, currentUser.roles is a string
      return _someInstanceProperty(roles).call(roles, allowedRole => currentUserRoles === allowedRole);
    }
  }

  // roles not found
  return false;
};

/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param roles: {@link AllowedRoles} - When checking role membership, these roles grant access.
 *
 * @returns - If the currentUser is authenticated (and assigned one of the given roles)
 *
 * @throws {@link AuthenticationError} - If the currentUser is not authenticated
 * @throws {@link ForbiddenError} If the currentUser is not allowed due to role permissions
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const requireAuth = ({
  roles
} = {}) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.");
  }
  if (roles && !hasRole(roles)) {
    throw new ForbiddenError("You don't have access to do that.");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvbkVycm9yIiwiRm9yYmlkZGVuRXJyb3IiLCJjb250ZXh0IiwiZGIiLCJnZXRDdXJyZW50VXNlciIsInNlc3Npb24iLCJpZCIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNlbGVjdCIsImlzQXV0aGVudGljYXRlZCIsImN1cnJlbnRVc2VyIiwiaGFzUm9sZSIsInJvbGVzIiwiY3VycmVudFVzZXJSb2xlcyIsIl9BcnJheSRpc0FycmF5Iiwic29tZSIsImFsbG93ZWRSb2xlIiwiX2luY2x1ZGVzSW5zdGFuY2VQcm9wZXJ0eSIsImNhbGwiLCJfc29tZUluc3RhbmNlUHJvcGVydHkiLCJyZXF1aXJlQXV0aCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvbGliL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBEZWNvZGVkIH0gZnJvbSAnQHJlZHdvb2Rqcy9hcGknXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRXJyb3IsIEZvcmJpZGRlbkVycm9yIH0gZnJvbSAnQHJlZHdvb2Rqcy9ncmFwaHFsLXNlcnZlcidcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi9kYidcclxuXHJcbi8qKlxyXG4gKiBUaGUgc2Vzc2lvbiBvYmplY3Qgc2VudCBpbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gZ2V0Q3VycmVudFVzZXIoKSB3aWxsXHJcbiAqIGhhdmUgYSBzaW5nbGUga2V5IGBpZGAgY29udGFpbmluZyB0aGUgdW5pcXVlIElEIG9mIHRoZSBsb2dnZWQgaW4gdXNlclxyXG4gKiAod2hhdGV2ZXIgZmllbGQgeW91IHNldCBhcyBgYXV0aEZpZWxkcy5pZGAgaW4geW91ciBhdXRoIGZ1bmN0aW9uIGNvbmZpZykuXHJcbiAqIFlvdSdsbCBuZWVkIHRvIHVwZGF0ZSB0aGUgY2FsbCB0byBgZGJgIGJlbG93IGlmIHlvdSB1c2UgYSBkaWZmZXJlbnQgbW9kZWxcclxuICogbmFtZSBvciB1bmlxdWUgZmllbGQgbmFtZSwgZm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqICAgcmV0dXJuIGF3YWl0IGRiLnByb2ZpbGUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLmlkIH0gfSlcclxuICogICAgICAgICAgICAgICAgICAg4pSA4pSA4pSA4pSs4pSA4pSA4pSAICAgICAgICAgICAgICAgICAgICAgICDilIDilIDilKzilIDilIBcclxuICogICAgICBtb2RlbCBhY2Nlc3NvciDilIDilJggICAgICB1bmlxdWUgaWQgZmllbGQgbmFtZSDilIDilJhcclxuICpcclxuICogISEgQkVXQVJFICEhIEFueXRoaW5nIHJldHVybmVkIGZyb20gdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGF2YWlsYWJsZSB0byB0aGVcclxuICogY2xpZW50LS1pdCBiZWNvbWVzIHRoZSBjb250ZW50IG9mIGBjdXJyZW50VXNlcmAgb24gdGhlIHdlYiBzaWRlIChhcyB3ZWxsIGFzXHJcbiAqIGBjb250ZXh0LmN1cnJlbnRVc2VyYCBvbiB0aGUgYXBpIHNpZGUpLiBZb3Ugc2hvdWxkIGNhcmVmdWxseSBhZGQgYWRkaXRpb25hbFxyXG4gKiBmaWVsZHMgdG8gdGhlIGBzZWxlY3RgIG9iamVjdCBiZWxvdyBvbmNlIHlvdSd2ZSBkZWNpZGVkIHRoZXkgYXJlIHNhZmUgdG8gYmVcclxuICogc2VlbiBpZiBzb21lb25lIHdlcmUgdG8gb3BlbiB0aGUgV2ViIEluc3BlY3RvciBpbiB0aGVpciBicm93c2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyID0gYXN5bmMgKHNlc3Npb246IERlY29kZWQpID0+IHtcclxuICBpZiAoIXNlc3Npb24gfHwgdHlwZW9mIHNlc3Npb24uaWQgIT09ICdudW1iZXInKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2Vzc2lvbicpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uLmlkIH0sXHJcbiAgICBzZWxlY3Q6IHsgaWQ6IHRydWUgfSxcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZCBpZiB0aGVyZSBpcyBhIGN1cnJlbnRVc2VyIGluIHRoZSBjb250ZXh0XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIElmIHRoZSBjdXJyZW50VXNlciBpcyBhdXRoZW50aWNhdGVkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gIHJldHVybiAhIWNvbnRleHQuY3VycmVudFVzZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIFdoZW4gY2hlY2tpbmcgcm9sZSBtZW1iZXJzaGlwLCByb2xlcyBjYW4gYmUgYSBzaW5nbGUgdmFsdWUsIGEgbGlzdCwgb3Igbm9uZS5cclxuICogWW91IGNhbiB1c2UgUHJpc21hIGVudW1zIHRvbyAoaWYgeW91J3JlIHVzaW5nIHRoZW0gZm9yIHJvbGVzKSwganVzdCBpbXBvcnQgeW91ciBlbnVtIHR5cGUgZnJvbSBgQHByaXNtYS9jbGllbnRgXHJcbiAqL1xyXG50eXBlIEFsbG93ZWRSb2xlcyA9IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkXHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhdXRoZW50aWNhdGVkIChhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcylcclxuICpcclxuICogQHBhcmFtIHJvbGVzOiB7QGxpbmsgQWxsb3dlZFJvbGVzfSAtIENoZWNrcyBpZiB0aGUgY3VycmVudFVzZXIgaXMgYXNzaWduZWQgb25lIG9mIHRoZXNlIHJvbGVzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudFVzZXIgaXMgbG9nZ2VkIGluIGFuZCBhc3NpZ25lZCBvbmUgb2YgdGhlIGdpdmVuIHJvbGVzLFxyXG4gKiBvciB3aGVuIG5vIHJvbGVzIGFyZSBwcm92aWRlZCB0byBjaGVjayBhZ2FpbnN0LiBPdGhlcndpc2UgcmV0dXJucyBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBoYXNSb2xlID0gKHJvbGVzOiBBbGxvd2VkUm9sZXMpOiBib29sZWFuID0+IHtcclxuICBpZiAoIWlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRVc2VyUm9sZXMgPSBjb250ZXh0LmN1cnJlbnRVc2VyPy5yb2xlc1xyXG5cclxuICBpZiAodHlwZW9mIHJvbGVzID09PSAnc3RyaW5nJykge1xyXG4gICAgaWYgKHR5cGVvZiBjdXJyZW50VXNlclJvbGVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhIHN0cmluZywgY3VycmVudFVzZXIucm9sZXMgaXMgYSBzdHJpbmdcclxuICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyUm9sZXMgPT09IHJvbGVzXHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFVzZXJSb2xlcykpIHtcclxuICAgICAgLy8gcm9sZXMgdG8gY2hlY2sgaXMgYSBzdHJpbmcsIGN1cnJlbnRVc2VyLnJvbGVzIGlzIGFuIGFycmF5XHJcbiAgICAgIHJldHVybiBjdXJyZW50VXNlclJvbGVzPy5zb21lKChhbGxvd2VkUm9sZSkgPT4gcm9sZXMgPT09IGFsbG93ZWRSb2xlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocm9sZXMpKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VXNlclJvbGVzKSkge1xyXG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhbiBhcnJheSwgY3VycmVudFVzZXIucm9sZXMgaXMgYW4gYXJyYXlcclxuICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyUm9sZXM/LnNvbWUoKGFsbG93ZWRSb2xlKSA9PlxyXG4gICAgICAgIHJvbGVzLmluY2x1ZGVzKGFsbG93ZWRSb2xlKVxyXG4gICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdXJyZW50VXNlclJvbGVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhbiBhcnJheSwgY3VycmVudFVzZXIucm9sZXMgaXMgYSBzdHJpbmdcclxuICAgICAgcmV0dXJuIHJvbGVzLnNvbWUoKGFsbG93ZWRSb2xlKSA9PiBjdXJyZW50VXNlclJvbGVzID09PSBhbGxvd2VkUm9sZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHJvbGVzIG5vdCBmb3VuZFxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG4vKipcclxuICogVXNlIHJlcXVpcmVBdXRoIGluIHlvdXIgc2VydmljZXMgdG8gY2hlY2sgdGhhdCBhIHVzZXIgaXMgbG9nZ2VkIGluLFxyXG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBhc3NpZ25lZCBhIHJvbGUsIGFuZCBvcHRpb25hbGx5IHJhaXNlIGFuXHJcbiAqIGVycm9yIGlmIHRoZXkncmUgbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0gcm9sZXM6IHtAbGluayBBbGxvd2VkUm9sZXN9IC0gV2hlbiBjaGVja2luZyByb2xlIG1lbWJlcnNoaXAsIHRoZXNlIHJvbGVzIGdyYW50IGFjY2Vzcy5cclxuICpcclxuICogQHJldHVybnMgLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgYXV0aGVudGljYXRlZCAoYW5kIGFzc2lnbmVkIG9uZSBvZiB0aGUgZ2l2ZW4gcm9sZXMpXHJcbiAqXHJcbiAqIEB0aHJvd3Mge0BsaW5rIEF1dGhlbnRpY2F0aW9uRXJyb3J9IC0gSWYgdGhlIGN1cnJlbnRVc2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkXHJcbiAqIEB0aHJvd3Mge0BsaW5rIEZvcmJpZGRlbkVycm9yfSBJZiB0aGUgY3VycmVudFVzZXIgaXMgbm90IGFsbG93ZWQgZHVlIHRvIHJvbGUgcGVybWlzc2lvbnNcclxuICpcclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVkd29vZGpzL3JlZHdvb2QvdHJlZS9tYWluL3BhY2thZ2VzL2F1dGggZm9yIGV4YW1wbGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZUF1dGggPSAoeyByb2xlcyB9OiB7IHJvbGVzPzogQWxsb3dlZFJvbGVzIH0gPSB7fSkgPT4ge1xyXG4gIGlmICghaXNBdXRoZW50aWNhdGVkKCkpIHtcclxuICAgIHRocm93IG5ldyBBdXRoZW50aWNhdGlvbkVycm9yKFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbiB0byBkbyB0aGF0LlwiKVxyXG4gIH1cclxuXHJcbiAgaWYgKHJvbGVzICYmICFoYXNSb2xlKHJvbGVzKSkge1xyXG4gICAgdGhyb3cgbmV3IEZvcmJpZGRlbkVycm9yKFwiWW91IGRvbid0IGhhdmUgYWNjZXNzIHRvIGRvIHRoYXQuXCIpXHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsU0FBU0EsbUJBQW1CLEVBQUVDLGNBQWMsRUFzQ2pDQyxPQUFPLFFBdENrQywyQkFBMkI7QUFFL0UsU0FBU0MsRUFBRSxRQUFRLE1BQU07O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxPQUFnQixJQUFLO0VBQ3hELElBQUksQ0FBQ0EsT0FBTyxJQUFJLE9BQU9BLE9BQU8sQ0FBQ0MsRUFBRSxLQUFLLFFBQVEsRUFBRTtJQUM5QyxNQUFNLElBQUlDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztFQUNwQztFQUVBLE9BQU8sTUFBTUosRUFBRSxDQUFDSyxJQUFJLENBQUNDLFVBQVUsQ0FBQztJQUM5QkMsS0FBSyxFQUFFO01BQUVKLEVBQUUsRUFBRUQsT0FBTyxDQUFDQztJQUFHLENBQUM7SUFDekJLLE1BQU0sRUFBRTtNQUFFTCxFQUFFLEVBQUU7SUFBSztFQUNyQixDQUFDLENBQUM7QUFDSixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQU1NLGVBQWUsR0FBR0EsQ0FBQSxLQUFlO0VBQzVDLE9BQU8sQ0FBQyxDQUFDVixPQUFPLENBQUNXLFdBQVc7QUFDOUIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFNQyxPQUFPLEdBQUlDLEtBQW1CLElBQWM7RUFDdkQsSUFBSSxDQUFDSCxlQUFlLENBQUMsQ0FBQyxFQUFFO0lBQ3RCLE9BQU8sS0FBSztFQUNkO0VBRUEsTUFBTUksZ0JBQWdCLEdBQUdkLE9BQU8sQ0FBQ1csV0FBVyxFQUFFRSxLQUFLO0VBRW5ELElBQUksT0FBT0EsS0FBSyxLQUFLLFFBQVEsRUFBRTtJQUM3QixJQUFJLE9BQU9DLGdCQUFnQixLQUFLLFFBQVEsRUFBRTtNQUN4QztNQUNBLE9BQU9BLGdCQUFnQixLQUFLRCxLQUFLO0lBQ25DLENBQUMsTUFBTSxJQUFJRSxjQUFBLENBQWNELGdCQUFnQixDQUFDLEVBQUU7TUFDMUM7TUFDQSxPQUFPQSxnQkFBZ0IsRUFBRUUsSUFBSSxDQUFFQyxXQUFXLElBQUtKLEtBQUssS0FBS0ksV0FBVyxDQUFDO0lBQ3ZFO0VBQ0Y7RUFFQSxJQUFJRixjQUFBLENBQWNGLEtBQUssQ0FBQyxFQUFFO0lBQ3hCLElBQUlFLGNBQUEsQ0FBY0QsZ0JBQWdCLENBQUMsRUFBRTtNQUNuQztNQUNBLE9BQU9BLGdCQUFnQixFQUFFRSxJQUFJLENBQUVDLFdBQVcsSUFDeENDLHlCQUFBLENBQUFMLEtBQUssRUFBQU0sSUFBQSxDQUFMTixLQUFLLEVBQVVJLFdBQVcsQ0FDNUIsQ0FBQztJQUNILENBQUMsTUFBTSxJQUFJLE9BQU9ILGdCQUFnQixLQUFLLFFBQVEsRUFBRTtNQUMvQztNQUNBLE9BQU9NLHFCQUFBLENBQUFQLEtBQUssRUFBQU0sSUFBQSxDQUFMTixLQUFLLEVBQU9JLFdBQVcsSUFBS0gsZ0JBQWdCLEtBQUtHLFdBQVcsQ0FBQztJQUN0RTtFQUNGOztFQUVBO0VBQ0EsT0FBTyxLQUFLO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFNSSxXQUFXLEdBQUdBLENBQUM7RUFBRVI7QUFBZ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLO0VBQ3ZFLElBQUksQ0FBQ0gsZUFBZSxDQUFDLENBQUMsRUFBRTtJQUN0QixNQUFNLElBQUlaLG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDO0VBQ3hFO0VBRUEsSUFBSWUsS0FBSyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7SUFDNUIsTUFBTSxJQUFJZCxjQUFjLENBQUMsbUNBQW1DLENBQUM7RUFDL0Q7QUFDRixDQUFDIn0=