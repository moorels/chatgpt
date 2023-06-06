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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvbkVycm9yIiwiRm9yYmlkZGVuRXJyb3IiLCJjb250ZXh0IiwiZGIiLCJnZXRDdXJyZW50VXNlciIsInNlc3Npb24iLCJpZCIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNlbGVjdCIsImlzQXV0aGVudGljYXRlZCIsImN1cnJlbnRVc2VyIiwiaGFzUm9sZSIsInJvbGVzIiwiY3VycmVudFVzZXJSb2xlcyIsIl9BcnJheSRpc0FycmF5Iiwic29tZSIsImFsbG93ZWRSb2xlIiwiX2luY2x1ZGVzSW5zdGFuY2VQcm9wZXJ0eSIsImNhbGwiLCJfc29tZUluc3RhbmNlUHJvcGVydHkiLCJyZXF1aXJlQXV0aCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvbGliL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBEZWNvZGVkIH0gZnJvbSAnQHJlZHdvb2Rqcy9hcGknXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVycm9yLCBGb3JiaWRkZW5FcnJvciB9IGZyb20gJ0ByZWR3b29kanMvZ3JhcGhxbC1zZXJ2ZXInXG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnLi9kYidcblxuLyoqXG4gKiBUaGUgc2Vzc2lvbiBvYmplY3Qgc2VudCBpbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gZ2V0Q3VycmVudFVzZXIoKSB3aWxsXG4gKiBoYXZlIGEgc2luZ2xlIGtleSBgaWRgIGNvbnRhaW5pbmcgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgbG9nZ2VkIGluIHVzZXJcbiAqICh3aGF0ZXZlciBmaWVsZCB5b3Ugc2V0IGFzIGBhdXRoRmllbGRzLmlkYCBpbiB5b3VyIGF1dGggZnVuY3Rpb24gY29uZmlnKS5cbiAqIFlvdSdsbCBuZWVkIHRvIHVwZGF0ZSB0aGUgY2FsbCB0byBgZGJgIGJlbG93IGlmIHlvdSB1c2UgYSBkaWZmZXJlbnQgbW9kZWxcbiAqIG5hbWUgb3IgdW5pcXVlIGZpZWxkIG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgcmV0dXJuIGF3YWl0IGRiLnByb2ZpbGUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLmlkIH0gfSlcbiAqICAgICAgICAgICAgICAgICAgIOKUgOKUgOKUgOKUrOKUgOKUgOKUgCAgICAgICAgICAgICAgICAgICAgICAg4pSA4pSA4pSs4pSA4pSAXG4gKiAgICAgIG1vZGVsIGFjY2Vzc29yIOKUgOKUmCAgICAgIHVuaXF1ZSBpZCBmaWVsZCBuYW1lIOKUgOKUmFxuICpcbiAqICEhIEJFV0FSRSAhISBBbnl0aGluZyByZXR1cm5lZCBmcm9tIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhdmFpbGFibGUgdG8gdGhlXG4gKiBjbGllbnQtLWl0IGJlY29tZXMgdGhlIGNvbnRlbnQgb2YgYGN1cnJlbnRVc2VyYCBvbiB0aGUgd2ViIHNpZGUgKGFzIHdlbGwgYXNcbiAqIGBjb250ZXh0LmN1cnJlbnRVc2VyYCBvbiB0aGUgYXBpIHNpZGUpLiBZb3Ugc2hvdWxkIGNhcmVmdWxseSBhZGQgYWRkaXRpb25hbFxuICogZmllbGRzIHRvIHRoZSBgc2VsZWN0YCBvYmplY3QgYmVsb3cgb25jZSB5b3UndmUgZGVjaWRlZCB0aGV5IGFyZSBzYWZlIHRvIGJlXG4gKiBzZWVuIGlmIHNvbWVvbmUgd2VyZSB0byBvcGVuIHRoZSBXZWIgSW5zcGVjdG9yIGluIHRoZWlyIGJyb3dzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VXNlciA9IGFzeW5jIChzZXNzaW9uOiBEZWNvZGVkKSA9PiB7XG4gIGlmICghc2Vzc2lvbiB8fCB0eXBlb2Ygc2Vzc2lvbi5pZCAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2Vzc2lvbicpXG4gIH1cblxuICByZXR1cm4gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi5pZCB9LFxuICAgIHNlbGVjdDogeyBpZDogdHJ1ZSB9LFxuICB9KVxufVxuXG4vKipcbiAqIFRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgaWYgdGhlcmUgaXMgYSBjdXJyZW50VXNlciBpbiB0aGUgY29udGV4dFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIElmIHRoZSBjdXJyZW50VXNlciBpcyBhdXRoZW50aWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAoKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiAhIWNvbnRleHQuY3VycmVudFVzZXJcbn1cblxuLyoqXG4gKiBXaGVuIGNoZWNraW5nIHJvbGUgbWVtYmVyc2hpcCwgcm9sZXMgY2FuIGJlIGEgc2luZ2xlIHZhbHVlLCBhIGxpc3QsIG9yIG5vbmUuXG4gKiBZb3UgY2FuIHVzZSBQcmlzbWEgZW51bXMgdG9vIChpZiB5b3UncmUgdXNpbmcgdGhlbSBmb3Igcm9sZXMpLCBqdXN0IGltcG9ydCB5b3VyIGVudW0gdHlwZSBmcm9tIGBAcHJpc21hL2NsaWVudGBcbiAqL1xudHlwZSBBbGxvd2VkUm9sZXMgPSBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZFxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudFVzZXIgaXMgYXV0aGVudGljYXRlZCAoYW5kIGFzc2lnbmVkIG9uZSBvZiB0aGUgZ2l2ZW4gcm9sZXMpXG4gKlxuICogQHBhcmFtIHJvbGVzOiB7QGxpbmsgQWxsb3dlZFJvbGVzfSAtIENoZWNrcyBpZiB0aGUgY3VycmVudFVzZXIgaXMgYXNzaWduZWQgb25lIG9mIHRoZXNlIHJvbGVzXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50VXNlciBpcyBsb2dnZWQgaW4gYW5kIGFzc2lnbmVkIG9uZSBvZiB0aGUgZ2l2ZW4gcm9sZXMsXG4gKiBvciB3aGVuIG5vIHJvbGVzIGFyZSBwcm92aWRlZCB0byBjaGVjayBhZ2FpbnN0LiBPdGhlcndpc2UgcmV0dXJucyBmYWxzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGhhc1JvbGUgPSAocm9sZXM6IEFsbG93ZWRSb2xlcyk6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBjdXJyZW50VXNlclJvbGVzID0gY29udGV4dC5jdXJyZW50VXNlcj8ucm9sZXNcblxuICBpZiAodHlwZW9mIHJvbGVzID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgY3VycmVudFVzZXJSb2xlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIHJvbGVzIHRvIGNoZWNrIGlzIGEgc3RyaW5nLCBjdXJyZW50VXNlci5yb2xlcyBpcyBhIHN0cmluZ1xuICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyUm9sZXMgPT09IHJvbGVzXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRVc2VyUm9sZXMpKSB7XG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhIHN0cmluZywgY3VycmVudFVzZXIucm9sZXMgaXMgYW4gYXJyYXlcbiAgICAgIHJldHVybiBjdXJyZW50VXNlclJvbGVzPy5zb21lKChhbGxvd2VkUm9sZSkgPT4gcm9sZXMgPT09IGFsbG93ZWRSb2xlKVxuICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHJvbGVzKSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRVc2VyUm9sZXMpKSB7XG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhbiBhcnJheSwgY3VycmVudFVzZXIucm9sZXMgaXMgYW4gYXJyYXlcbiAgICAgIHJldHVybiBjdXJyZW50VXNlclJvbGVzPy5zb21lKChhbGxvd2VkUm9sZSkgPT5cbiAgICAgICAgcm9sZXMuaW5jbHVkZXMoYWxsb3dlZFJvbGUpXG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3VycmVudFVzZXJSb2xlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIHJvbGVzIHRvIGNoZWNrIGlzIGFuIGFycmF5LCBjdXJyZW50VXNlci5yb2xlcyBpcyBhIHN0cmluZ1xuICAgICAgcmV0dXJuIHJvbGVzLnNvbWUoKGFsbG93ZWRSb2xlKSA9PiBjdXJyZW50VXNlclJvbGVzID09PSBhbGxvd2VkUm9sZSlcbiAgICB9XG4gIH1cblxuICAvLyByb2xlcyBub3QgZm91bmRcbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogVXNlIHJlcXVpcmVBdXRoIGluIHlvdXIgc2VydmljZXMgdG8gY2hlY2sgdGhhdCBhIHVzZXIgaXMgbG9nZ2VkIGluLFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgYXNzaWduZWQgYSByb2xlLCBhbmQgb3B0aW9uYWxseSByYWlzZSBhblxuICogZXJyb3IgaWYgdGhleSdyZSBub3QuXG4gKlxuICogQHBhcmFtIHJvbGVzOiB7QGxpbmsgQWxsb3dlZFJvbGVzfSAtIFdoZW4gY2hlY2tpbmcgcm9sZSBtZW1iZXJzaGlwLCB0aGVzZSByb2xlcyBncmFudCBhY2Nlc3MuXG4gKlxuICogQHJldHVybnMgLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgYXV0aGVudGljYXRlZCAoYW5kIGFzc2lnbmVkIG9uZSBvZiB0aGUgZ2l2ZW4gcm9sZXMpXG4gKlxuICogQHRocm93cyB7QGxpbmsgQXV0aGVudGljYXRpb25FcnJvcn0gLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWRcbiAqIEB0aHJvd3Mge0BsaW5rIEZvcmJpZGRlbkVycm9yfSBJZiB0aGUgY3VycmVudFVzZXIgaXMgbm90IGFsbG93ZWQgZHVlIHRvIHJvbGUgcGVybWlzc2lvbnNcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWR3b29kanMvcmVkd29vZC90cmVlL21haW4vcGFja2FnZXMvYXV0aCBmb3IgZXhhbXBsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlcXVpcmVBdXRoID0gKHsgcm9sZXMgfTogeyByb2xlcz86IEFsbG93ZWRSb2xlcyB9ID0ge30pID0+IHtcbiAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgIHRocm93IG5ldyBBdXRoZW50aWNhdGlvbkVycm9yKFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbiB0byBkbyB0aGF0LlwiKVxuICB9XG5cbiAgaWYgKHJvbGVzICYmICFoYXNSb2xlKHJvbGVzKSkge1xuICAgIHRocm93IG5ldyBGb3JiaWRkZW5FcnJvcihcIllvdSBkb24ndCBoYXZlIGFjY2VzcyB0byBkbyB0aGF0LlwiKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7OztBQUNBLFNBQVNBLG1CQUFtQixFQUFFQyxjQUFjLEVBc0NqQ0MsT0FBTyxRQXRDa0MsMkJBQTJCO0FBRS9FLFNBQVNDLEVBQUUsUUFBUSxNQUFNOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFNQyxjQUFjLEdBQUcsTUFBT0MsT0FBZ0IsSUFBSztFQUN4RCxJQUFJLENBQUNBLE9BQU8sSUFBSSxPQUFPQSxPQUFPLENBQUNDLEVBQUUsS0FBSyxRQUFRLEVBQUU7SUFDOUMsTUFBTSxJQUFJQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7RUFDcEM7RUFFQSxPQUFPLE1BQU1KLEVBQUUsQ0FBQ0ssSUFBSSxDQUFDQyxVQUFVLENBQUM7SUFDOUJDLEtBQUssRUFBRTtNQUFFSixFQUFFLEVBQUVELE9BQU8sQ0FBQ0M7SUFBRyxDQUFDO0lBQ3pCSyxNQUFNLEVBQUU7TUFBRUwsRUFBRSxFQUFFO0lBQUs7RUFDckIsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFNTSxlQUFlLEdBQUdBLENBQUEsS0FBZTtFQUM1QyxPQUFPLENBQUMsQ0FBQ1YsT0FBTyxDQUFDVyxXQUFXO0FBQzlCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBTUMsT0FBTyxHQUFJQyxLQUFtQixJQUFjO0VBQ3ZELElBQUksQ0FBQ0gsZUFBZSxDQUFDLENBQUMsRUFBRTtJQUN0QixPQUFPLEtBQUs7RUFDZDtFQUVBLE1BQU1JLGdCQUFnQixHQUFHZCxPQUFPLENBQUNXLFdBQVcsRUFBRUUsS0FBSztFQUVuRCxJQUFJLE9BQU9BLEtBQUssS0FBSyxRQUFRLEVBQUU7SUFDN0IsSUFBSSxPQUFPQyxnQkFBZ0IsS0FBSyxRQUFRLEVBQUU7TUFDeEM7TUFDQSxPQUFPQSxnQkFBZ0IsS0FBS0QsS0FBSztJQUNuQyxDQUFDLE1BQU0sSUFBSUUsY0FBQSxDQUFjRCxnQkFBZ0IsQ0FBQyxFQUFFO01BQzFDO01BQ0EsT0FBT0EsZ0JBQWdCLEVBQUVFLElBQUksQ0FBRUMsV0FBVyxJQUFLSixLQUFLLEtBQUtJLFdBQVcsQ0FBQztJQUN2RTtFQUNGO0VBRUEsSUFBSUYsY0FBQSxDQUFjRixLQUFLLENBQUMsRUFBRTtJQUN4QixJQUFJRSxjQUFBLENBQWNELGdCQUFnQixDQUFDLEVBQUU7TUFDbkM7TUFDQSxPQUFPQSxnQkFBZ0IsRUFBRUUsSUFBSSxDQUFFQyxXQUFXLElBQ3hDQyx5QkFBQSxDQUFBTCxLQUFLLEVBQUFNLElBQUEsQ0FBTE4sS0FBSyxFQUFVSSxXQUFXLENBQzVCLENBQUM7SUFDSCxDQUFDLE1BQU0sSUFBSSxPQUFPSCxnQkFBZ0IsS0FBSyxRQUFRLEVBQUU7TUFDL0M7TUFDQSxPQUFPTSxxQkFBQSxDQUFBUCxLQUFLLEVBQUFNLElBQUEsQ0FBTE4sS0FBSyxFQUFPSSxXQUFXLElBQUtILGdCQUFnQixLQUFLRyxXQUFXLENBQUM7SUFDdEU7RUFDRjs7RUFFQTtFQUNBLE9BQU8sS0FBSztBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBTUksV0FBVyxHQUFHQSxDQUFDO0VBQUVSO0FBQWdDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSztFQUN2RSxJQUFJLENBQUNILGVBQWUsQ0FBQyxDQUFDLEVBQUU7SUFDdEIsTUFBTSxJQUFJWixtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQztFQUN4RTtFQUVBLElBQUllLEtBQUssSUFBSSxDQUFDRCxPQUFPLENBQUNDLEtBQUssQ0FBQyxFQUFFO0lBQzVCLE1BQU0sSUFBSWQsY0FBYyxDQUFDLG1DQUFtQyxDQUFDO0VBQy9EO0FBQ0YsQ0FBQyJ9