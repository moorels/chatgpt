import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Store3Page = () => {
  return (
    <>
      <MetaTags
        title="Store1"
        description="Sync AI Australia See how a Multi AI bot solution can automate digital engagement across your business, lowering your cost to serve and improving customer and employee experience."
      />
      <div className="body-font  bg-slate-600  text-gray-600">
        <header className="body-font bg-slate-600  text-gray-600">
          <div className="  flex flex-col   p-3 sm:flex-row lg:flex-row ">
            <ul>
              <div className=" bg-white-500 place-content-center p-1 text-white">
                <Link
                  className="  focus:shadow-outline  bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                  to={routes.computer()}
                >
                  <span className=" relative inline-flex h-2 w-2  bg-green-500">
                    <span className=" absolute inline-flex h-full w-full  bg-gray-100 opacity-75"></span>
                  </span>
                  <span> Computer Store</span>
                </Link>
              </div>
            </ul>

            <div className=" bg-white-500 place-content-center p-1 text-white">
              <Link
                className="  focus:shadow-outline  bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                to={routes.store2()}
              >
                <span className=" relative inline-flex h-2 w-2  bg-green-500">
                  <span className=" absolute inline-flex h-full w-full   bg-gray-100 opacity-75"></span>
                </span>
                <span> Dog Grooming</span>
              </Link>
            </div>
            <div className=" bg-white-500   place-content-center p-1 text-white">
              <Link
                className="  focus:shadow-outline  bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                to={routes.store3()}
              >
                <span className=" relative inline-flex h-2 w-2  bg-green-500">
                  <span className=" absolute inline-flex h-full w-full   bg-gray-100 opacity-75"></span>
                </span>
                <span> Florist</span>
              </Link>
            </div>
          </div>
          <div className=" focus:shadow-outline m-0 w-60 justify-center rounded-lg p-0 text-center align-middle text-2xl text-slate-100"></div>
        </header>
      </div>
      <div>
        <div className=" bg-white  py-2">
          <div className=" h-screen flex-col bg-slate-700  py-1">
            <iframe
              className=" m-0 -mt-[5px] bg-slate-700 p-0"
              title="df"
              src="https://chatstore3.vercel.app"
              height="650"
              width="620"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Store3Page
