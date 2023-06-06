import { authDecoder } from '@redwoodjs/auth-dbauth-api';
import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
import * as sdls_contacts_sdl from "../graphql/contacts.sdl";
sdls.contacts_sdl = sdls_contacts_sdl;
import * as sdls_users_sdl from "../graphql/users.sdl";
sdls.users_sdl = sdls_users_sdl;
let services = {};
import * as services_contacts_contacts from "../services/contacts/contacts";
services.contacts_contacts = services_contacts_contacts;
import * as services_users_users from "../services/users/users";
services.users_users = services_users_users;
import { getCurrentUser } from "../lib/auth";
import { db } from "../lib/db";
import { logger } from "../lib/logger";
export const handler = createGraphQLHandler({
  authDecoder,
  getCurrentUser,
  loggerConfig: {
    logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhdXRoRGVjb2RlciIsImNyZWF0ZUdyYXBoUUxIYW5kbGVyIiwiZGlyZWN0aXZlcyIsImRpcmVjdGl2ZXNfcmVxdWlyZUF1dGhfcmVxdWlyZUF1dGgiLCJyZXF1aXJlQXV0aF9yZXF1aXJlQXV0aCIsImRpcmVjdGl2ZXNfc2tpcEF1dGhfc2tpcEF1dGgiLCJza2lwQXV0aF9za2lwQXV0aCIsInNkbHMiLCJzZGxzX2NvbnRhY3RzX3NkbCIsImNvbnRhY3RzX3NkbCIsInNkbHNfdXNlcnNfc2RsIiwidXNlcnNfc2RsIiwic2VydmljZXMiLCJzZXJ2aWNlc19jb250YWN0c19jb250YWN0cyIsImNvbnRhY3RzX2NvbnRhY3RzIiwic2VydmljZXNfdXNlcnNfdXNlcnMiLCJ1c2Vyc191c2VycyIsImdldEN1cnJlbnRVc2VyIiwiZGIiLCJsb2dnZXIiLCJoYW5kbGVyIiwibG9nZ2VyQ29uZmlnIiwib3B0aW9ucyIsIm9uRXhjZXB0aW9uIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2Z1bmN0aW9ucy9ncmFwaHFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhEZWNvZGVyIH0gZnJvbSAnQHJlZHdvb2Rqcy9hdXRoLWRiYXV0aC1hcGknXG5pbXBvcnQgeyBjcmVhdGVHcmFwaFFMSGFuZGxlciB9IGZyb20gJ0ByZWR3b29kanMvZ3JhcGhxbC1zZXJ2ZXInXG5cbmltcG9ydCBkaXJlY3RpdmVzIGZyb20gJ3NyYy9kaXJlY3RpdmVzLyoqLyoue2pzLHRzfSdcbmltcG9ydCBzZGxzIGZyb20gJ3NyYy9ncmFwaHFsLyoqLyouc2RsLntqcyx0c30nXG5pbXBvcnQgc2VydmljZXMgZnJvbSAnc3JjL3NlcnZpY2VzLyoqLyoue2pzLHRzfSdcblxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICdzcmMvbGliL2F1dGgnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdzcmMvbGliL2xvZ2dlcidcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVHcmFwaFFMSGFuZGxlcih7XG4gIGF1dGhEZWNvZGVyLFxuICBnZXRDdXJyZW50VXNlcixcbiAgbG9nZ2VyQ29uZmlnOiB7IGxvZ2dlciwgb3B0aW9uczoge30gfSxcbiAgZGlyZWN0aXZlcyxcbiAgc2RscyxcbiAgc2VydmljZXMsXG4gIG9uRXhjZXB0aW9uOiAoKSA9PiB7XG4gICAgLy8gRGlzY29ubmVjdCBmcm9tIHlvdXIgZGF0YWJhc2Ugd2l0aCBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgIGRiLiRkaXNjb25uZWN0KClcbiAgfSxcbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFdBQVcsUUFBUSw0QkFBNEI7QUFDeEQsU0FBU0Msb0JBQW9CLFFBQVEsMkJBQTJCO0FBQUEsSUFBQUMsVUFBQTtBQUFBLFlBQUFDLGtDQUFBO0FBQUFELFVBQUEsQ0FBQUUsdUJBQUEsR0FBQUQsa0NBQUE7QUFBQSxZQUFBRSw0QkFBQTtBQUFBSCxVQUFBLENBQUFJLGlCQUFBLEdBQUFELDRCQUFBO0FBQUEsSUFBQUUsSUFBQTtBQUFBLFlBQUFDLGlCQUFBO0FBQUFELElBQUEsQ0FBQUUsWUFBQSxHQUFBRCxpQkFBQTtBQUFBLFlBQUFFLGNBQUE7QUFBQUgsSUFBQSxDQUFBSSxTQUFBLEdBQUFELGNBQUE7QUFBQSxJQUFBRSxRQUFBO0FBQUEsWUFBQUMsMEJBQUE7QUFBQUQsUUFBQSxDQUFBRSxpQkFBQSxHQUFBRCwwQkFBQTtBQUFBLFlBQUFFLG9CQUFBO0FBQUFILFFBQUEsQ0FBQUksV0FBQSxHQUFBRCxvQkFBQTtBQU1oRSxTQUFTRSxjQUFjO0FBQ3ZCLFNBQVNDLEVBQUU7QUFDWCxTQUFTQyxNQUFNO0FBRWYsT0FBTyxNQUFNQyxPQUFPLEdBQUduQixvQkFBb0IsQ0FBQztFQUMxQ0QsV0FBVztFQUNYaUIsY0FBYztFQUNkSSxZQUFZLEVBQUU7SUFBRUYsTUFBTTtJQUFFRyxPQUFPLEVBQUUsQ0FBQztFQUFFLENBQUM7RUFDckNwQixVQUFVO0VBQ1ZLLElBQUk7RUFDSkssUUFBUTtFQUNSVyxXQUFXLEVBQUVBLENBQUEsS0FBTTtJQUNqQjtJQUNBTCxFQUFFLENBQUNNLFdBQVcsQ0FBQyxDQUFDO0VBQ2xCO0FBQ0YsQ0FBQyxDQUFDIn0=