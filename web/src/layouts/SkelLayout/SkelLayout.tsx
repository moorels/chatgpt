import { useState, useEffect } from 'react'
import { useContext } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import { UserContext } from '../../../UserContext'

import styles from './SkelLayout.module.css'
import Timer from './Timer'

type SkelLayoutProps = {
  children?: React.ReactNode
}

const SkelLayout = ({ children }: SkelLayoutProps) => {
  const [isadmin, SetIsAdmin] = useState<boolean | null>(false)

  let { user } = useContext<undefined | any>(UserContext)
  let welcome = ` Welcome: ${user}`

  const finaluser = welcome

  useEffect(() => {
    if (user === 'Admin') {
      SetIsAdmin(true)
    }
  }, [finaluser, user])

  const { isAuthenticated } = useAuth()
  const logmeout = useAuth()
  console.log('test')
  return (
    <>
      <div className="body-font  bg-slate-600  text-gray-600">
        <header className="body-font bg-slate-600  text-gray-600">
          <div className="  flex flex-col flex-wrap items-center p-3 md:flex-row ">
            <div className="title-font mb-0 flex items-center font-medium text-gray-900 md:mb-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10 bg-gray-500 p-2 text-white"
                viewBox="0 0 32 32"
              >
                <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
              </svg>
              <Link to={routes.homepage()}>
                <span className="ml-3 animate-pulse text-xl text-slate-200">
                  Sync AI
                </span>
              </Link>
            </div>

            <nav className=" flex flex-wrap items-center justify-center text-base md:ml-4">
              <ul>
                <li>
                  <div className="space-x-1 ">
                    <span className="focus:shadow-outline h-9 rounded-lg bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600">
                      {isAuthenticated ? (
                        <button onClick={() => logmeout.logOut()}>
                          <span className=" relative inline-flex h-2 w-2 rounded-full bg-gray-100">
                            <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
                          </span>
                          {finaluser}
                          <span className="w-4 p-2"> Logout</span>
                        </button>
                      ) : (
                        <Link className="" to={routes.login()}>
                          <span className=" relative inline-flex h-2 w-2 rounded-full bg-gray-100 ">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100  opacity-75"></span>
                          </span>
                          {(user = '')}
                          {(welcome = '')}
                          <span className="w-4 p-1 font-mono"> Login</span>
                        </Link>
                      )}
                    </span>

                    <Link
                      className="  focus:shadow-outline rounded-lg bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                      to={routes.computer()}
                    >
                      <span className=" relative inline-flex h-2 w-2 rounded-full bg-gray-100">
                        <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Explore</span>
                    </Link>
                    {isadmin ? (
                      <Link
                        className="focus:shadow-outline rounded-lg bg-gray-500 p-2 text-indigo-100 transition-colors duration-150 hover:bg-zinc-900"
                        to={routes.users()}
                      >
                        <span className=" relative inline-flex h-2 w-2 rounded-full bg-gray-100">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 font-libre opacity-75"></span>
                        </span>
                        <span> Users</span>
                      </Link>
                    ) : (
                      <div />
                    )}
                  </div>
                </li>
              </ul>
              <Timer />
            </nav>
            <div className=" bg-white-500   place-content-center p-2 text-white"></div>

            <div className={styles.typewriter}>
              <h1 className=" text-sm text-zinc-100 ">Welcome to Sync AI</h1>
            </div>
          </div>
          <div className=" focus:shadow-outline m-2 w-60 justify-center rounded-lg p-0 text-center align-middle text-2xl text-slate-100"></div>
        </header>
      </div>
      <div></div>
      {children}
    </>
  )
}
export default SkelLayout
