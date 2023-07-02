// This file was generated by RedwoodJS
import { RouteParams, QueryParams } from '@redwoodjs/router'
import { A } from 'ts-toolbelt'


declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    // Only "<Route />" components with a "name" and "path" prop will be populated here.
    newUser: (params?: RouteParams<"/users/new"> & QueryParams) => "/users/new"
    editUser: (params?: RouteParams<"/users/{id:Int}/edit"> & QueryParams) => "/users/{id:Int}/edit"
    user: (params?: RouteParams<"/users/{id:Int}"> & QueryParams) => "/users/{id:Int}"
    users: (params?: RouteParams<"/users"> & QueryParams) => "/users"
    members: (params?: RouteParams<"/members"> & QueryParams) => "/members"
    explore: (params?: RouteParams<"/explore"> & QueryParams) => "/explore"
    computer: (params?: RouteParams<"/computer"> & QueryParams) => "/computer"
    store2: (params?: RouteParams<"/store2"> & QueryParams) => "/store2"
    store3: (params?: RouteParams<"/store3"> & QueryParams) => "/store3"
    homepage: (params?: RouteParams<"/"> & QueryParams) => "/"
    login: (params?: RouteParams<"/login"> & QueryParams) => "/login"
    signup: (params?: RouteParams<"/AdminSignup"> & QueryParams) => "/AdminSignup"
    forgotPassword: (params?: RouteParams<"/forgot-password"> & QueryParams) => "/forgot-password"
    resetPassword: (params?: RouteParams<"/reset-password"> & QueryParams) => "/reset-password"
  }
}

