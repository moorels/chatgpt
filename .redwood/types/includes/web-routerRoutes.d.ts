// This file was generated by RedwoodJS
import { RouteParams, QueryParams } from '@redwoodjs/router'
import { A } from 'ts-toolbelt'


declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    // Only "<Route />" components with a "name" and "path" prop will be populated here.
    newData: (params?: RouteParams<"/datas/new"> & QueryParams) => "/datas/new"
    editData: (params?: RouteParams<"/datas/{id:Int}/edit"> & QueryParams) => "/datas/{id:Int}/edit"
    data: (params?: RouteParams<"/datas/{id:Int}"> & QueryParams) => "/datas/{id:Int}"
    datas: (params?: RouteParams<"/datas"> & QueryParams) => "/datas"
    newUser: (params?: RouteParams<"/users/new"> & QueryParams) => "/users/new"
    editUser: (params?: RouteParams<"/users/{id:Int}/edit"> & QueryParams) => "/users/{id:Int}/edit"
    user: (params?: RouteParams<"/users/{id:Int}"> & QueryParams) => "/users/{id:Int}"
    users: (params?: RouteParams<"/users"> & QueryParams) => "/users"
    members: (params?: RouteParams<"/members"> & QueryParams) => "/members"
    editContact: (params?: RouteParams<"/contacts/{id:Int}/edit"> & QueryParams) => "/contacts/{id:Int}/edit"
    contact: (params?: RouteParams<"/contacts/{id:Int}"> & QueryParams) => "/contacts/{id:Int}"
    newContact: (params?: RouteParams<"/contacts/new"> & QueryParams) => "/contacts/new"
    contacts: (params?: RouteParams<"/contacts"> & QueryParams) => "/contacts"
    helper: (params?: RouteParams<"/help"> & QueryParams) => "/help"
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

