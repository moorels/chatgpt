import { useState, useEffect } from 'react'
import { useContext } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

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
      <MetaTags
        title="AI Automation Services Australia - Empowering Businesses with Intelligent Automation"
        description="Unlock the potential of AI automation services in Australia for businesses. Streamline operations, increase efficiency, and drive growth with our cutting-edge solutions. Experience enhanced productivity, cost savings, and improved customer satisfaction through seamless automation."
      />

      <div className="body-font  bg-slate-600  text-gray-600">
        <header className="body-font bg-slate-600  text-gray-600">
          <div className="  flex flex-col flex-wrap items-center p-3 md:flex-row ">
            <div className="title-font mb-2 flex items-center font-medium text-gray-900 md:mb-0">
              <Link to={routes.homepage()} className="animate-pulse ">
                <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9 22a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9 2a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zM9 22a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm7-7a1 1 0 10-2 0 1 1 0 002 0zm0-4a1 1 0 10-2 0 1 1 0 002 0zm-1-5a1 1 0 110 2 1 1 0 010-2zM2 15a1 1 0 110 2 1 1 0 010-2zm0-4a1 1 0 110 2 1 1 0 010-2zm1-3a1 1 0 10-2 0 1 1 0 002 0zm14-2H7a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1zM7 4a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm7 6h-4v4h4v-4zM8 8v8h8V8H8z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link to={routes.homepage()}>
                <span className="ml-3 text-xl text-slate-200">Sync AI</span>
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
                      to={routes.explore()}
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
