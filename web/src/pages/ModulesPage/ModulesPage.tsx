import { Link, routes } from '@redwoodjs/router'
/* eslint-disable jsx-a11y/iframe-has-title */
const ModulesPage = () => {
  return (
    <>
      <div className="flex-col bg-slate-700  py-2">
        <div className=" bg-slate-700 text-center">
          <div className="  flex-col items-center bg-slate-700 text-center">
            <h1 className=" mb-3 bg-slate-700 text-2xl font-medium text-white">
              Integrating artificial intelligence into your business model
            </h1>

            <nav className=" mb-5 flex flex-wrap items-center justify-center text-base md:ml-4">
              <ul>
                <li>
                  <div className="space-x-1 ">
                    <Link
                      className="  focus:shadow-outline rounded-lg bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                      to={routes.explore()}
                    >
                      <span className=" relative inline-flex h-2 w-2 rounded-full bg-gray-100">
                        <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Explore</span>
                    </Link>
                    <Link
                      className="  focus:shadow-outline rounded-lg bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                      to={routes.explore()}
                    >
                      <span className=" relative inline-flex h-2 w-2 rounded-full bg-gray-100">
                        <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Explore</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" bg-white  py-3">
            <div className="flex-col bg-slate-700  py-2">
              <iframe
                className=" m-0 -mt-[9px] bg-slate-700 p-0"
                src="https://chatstore1.vercel.app"
                height="650"
                width="700"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModulesPage
