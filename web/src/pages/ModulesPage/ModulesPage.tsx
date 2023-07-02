import { Link, routes } from '@redwoodjs/router'

/* eslint-disable jsx-a11y/iframe-has-title */
const ModulesPage = () => {
  return (
    <>
      <div className="flex-col bg-slate-700  py-2">
        <div className=" bg-slate-700 text-center">
          <div className="  flex-col items-center bg-slate-700 text-center">
            <nav className=" justify-left mb-2 flex flex-wrap items-center px-12 text-base md:ml-4">
              <ul>
                <li>
                  <div className="space-x-1 ">
                    <Link
                      className="  focus:shadow-outline  mb-6 bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                      to={routes.computer()}
                    >
                      <span className=" relative inline-flex h-2 w-2  bg-green-500">
                        <span className=" absolute inline-flex h-full w-full  bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Computer Store</span>
                    </Link>
                    <Link
                      className="  focus:shadow-outline mb-6 bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                      to={routes.store2()}
                    >
                      <span className=" relative inline-flex h-2 w-2  bg-green-500">
                        <span className=" absolute inline-flex h-full w-full   bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Dog Grooming</span>
                    </Link>
                    <Link
                      className="  focus:shadow-outline mb-6 bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                      to={routes.store3()}
                    >
                      <span className=" relative inline-flex h-2 w-2  bg-green-500">
                        <span className=" absolute inline-flex h-full w-full   bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Florist</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" bg-white  py-2">
            <div className="flex-col bg-slate-700  py-1">
              <iframe
                className=" m-0 -mt-[5px] bg-slate-700 p-0"
                src="https://chatstore1.vercel.app"
                height="650"
                width="620"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModulesPage
