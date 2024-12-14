import { createValidatorDirective } from '@redwoodjs/graphql-server';
export const schema = {
  "kind": "Document",
  "definitions": [{
    "kind": "DirectiveDefinition",
    "description": {
      "kind": "StringValue",
      "value": "Use to skip authentication checks and allow public access.",
      "block": true
    },
    "name": {
      "kind": "Name",
      "value": "skipAuth"
    },
    "arguments": [],
    "repeatable": false,
    "locations": [{
      "kind": "Name",
      "value": "FIELD_DEFINITION"
    }]
  }],
  "loc": {
    "start": 0,
    "end": 116,
    "source": {
      "body": "\n  \"\"\"\n  Use to skip authentication checks and allow public access.\n  \"\"\"\n  directive @skipAuth on FIELD_DEFINITION\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const skipAuth = createValidatorDirective(schema, () => {
  return;
});
export default skipAuth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVWYWxpZGF0b3JEaXJlY3RpdmUiLCJzY2hlbWEiLCJza2lwQXV0aCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZGlyZWN0aXZlcy9za2lwQXV0aC9za2lwQXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlVmFsaWRhdG9yRGlyZWN0aXZlIH0gZnJvbSAnQHJlZHdvb2Rqcy9ncmFwaHFsLXNlcnZlcidcclxuXHJcbmV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXHJcbiAgXCJcIlwiXHJcbiAgVXNlIHRvIHNraXAgYXV0aGVudGljYXRpb24gY2hlY2tzIGFuZCBhbGxvdyBwdWJsaWMgYWNjZXNzLlxyXG4gIFwiXCJcIlxyXG4gIGRpcmVjdGl2ZSBAc2tpcEF1dGggb24gRklFTERfREVGSU5JVElPTlxyXG5gXHJcblxyXG5jb25zdCBza2lwQXV0aCA9IGNyZWF0ZVZhbGlkYXRvckRpcmVjdGl2ZShzY2hlbWEsICgpID0+IHtcclxuICByZXR1cm5cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNraXBBdXRoXHJcbiJdLCJtYXBwaW5ncyI6IkFBRUEsU0FBU0Esd0JBQXdCLFFBQVEsMkJBQTJCO0FBRXBFLE9BQU8sTUFBTUMsTUFBTTtFQUFBO0VBQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBO0FBQUEsQ0FLbEI7QUFFRCxNQUFNQyxRQUFRLEdBQUdGLHdCQUF3QixDQUFDQyxNQUFNLEVBQUUsTUFBTTtFQUN0RDtBQUNGLENBQUMsQ0FBQztBQUVGLGVBQWVDLFFBQVEifQ==