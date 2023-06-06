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
      <div className="body-font  bg-slate-800  text-gray-600">
        <header className="body-font bg-slate-800  text-gray-600">
          <div className="  flex flex-col flex-wrap items-center p-5 md:flex-row ">
            <div className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10 bg-blue-500 p-2 text-white"
                viewBox="0 0 32 32"
              >
                <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
              </svg>
              <Link to={routes.homepage()}>
                <span className="ml-3 font-libre text-xl text-white">
                  Chat Gpt
                </span>
              </Link>
            </div>

            <nav className=" flex flex-wrap items-center justify-center text-base md:ml-4">
              <ul>
                <li>
                  <div className="space-x-1 ">
                    <span className=" focus:shadow-outline h-9 rounded-lg bg-blue-500 p-2 text-indigo-100 transition-colors duration-150 hover:bg-blue-700">
                      {isAuthenticated ? (
                        <button onClick={() => logmeout.logOut()}>
                          <span className=" relative inline-flex h-2 w-2 rounded-full bg-gray-100">
                            <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
                          </span>
                          {finaluser}
                          <span className="w-4 p-2"> Logout</span>
                        </button>
                      ) : (
                        <Link
                          className="focus:shadow-outline rounded-lg bg-blue-500 p-2 text-indigo-100 transition-colors duration-150 hover:bg-blue-700"
                          to={routes.login()}
                        >
                          <span className=" relative inline-flex h-2 w-2 rounded-full bg-gray-100">
                            <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
                          </span>
                          {(user = '')}
                          {(welcome = '')}
                          <span className="w-4 p-1"> Login</span>
                        </Link>
                      )}
                    </span>

                    <Link
                      className="focus:shadow-outline rounded-lg bg-blue-500 p-2 text-indigo-100 transition-colors duration-150 hover:bg-blue-700"
                      to={routes.modules()}
                    >
                      <span className=" relative inline-flex h-2 w-2 rounded-full bg-gray-100">
                        <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
                      </span>
                      <span> ChatGPT</span>
                    </Link>
                    {isadmin ? (
                      <Link
                        className="focus:shadow-outline rounded-lg bg-blue-500 p-2 text-indigo-100 transition-colors duration-150 hover:bg-blue-700"
                        to={routes.users()}
                      >
                        <span className=" relative inline-flex h-2 w-2 rounded-full bg-gray-100">
                          <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
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
            <div className="bg-white-500   place-content-center p-2 text-white"></div>

            <div className={styles.typewriter}>
              <h1>Welcome to Chat Gpt</h1>
            </div>
          </div>
          <div className=" focus:shadow-outline m-3 w-60 justify-center rounded-lg p-2 text-center align-middle font-libre text-2xl text-slate-100"></div>
        </header>
      </div>
      <div></div>
      {children}
    </>
  )
}
export default SkelLayout
