import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ExplorePage = () => {
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
                      className="  focus:shadow-outline  bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                      to={routes.computer()}
                    >
                      <span className=" relative inline-flex h-2 w-2  bg-green-500">
                        <span className=" absolute inline-flex h-full w-full  bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Computer Store</span>
                    </Link>
                    <Link
                      className="  focus:shadow-outline  bg-gray-500 p-2 font-libre text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                      to={routes.store2()}
                    >
                      <span className=" relative inline-flex h-2 w-2  bg-green-500">
                        <span className=" absolute inline-flex h-full w-full   bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Dog Grooming</span>
                    </Link>
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
                </li>
              </ul>
            </nav>
          </div>
          <div className="mb-20 flex w-full flex-col flex-wrap items-center bg-slate-700 text-center">
            <div className=" flex w-full flex-col flex-wrap items-center bg-slate-700  px-8 text-center">
              <h1 className="title-font mb-2 bg-slate-700 py-8 text-2xl font-medium text-white sm:text-3xl">
                Integrating artificial intelligence into your business model
              </h1>
              <p className="w-full leading-relaxed text-white lg:w-1/2">
                When potential clients ask our expert staff what they can
                achieve with intelligent automation, the simple answer is - the
                opportunities are endless. With so many options on the table,
                it’s often a case of needing to identify how many, not which one
                of our ai intelligent solutions they want to embrace.
              </p>
              <h1 className="title-font mb-2 bg-slate-700 py-4 text-2xl font-medium text-white sm:text-3xl">
                Revolutionize the customer experience with AI
              </h1>

              <p className="w-full leading-relaxed text-white lg:w-1/2">
                Harness the power of generative AI to automatically resolve the
                most customer service inquiries — across more channels and
                languages — with the least amount of effort.
              </p>

              <h1 className="title-font mb-2 text-2xl font-medium text-white sm:text-3xl">
                Get more work done with fewer mistakes
              </h1>
              <p className="w-full leading-relaxed text-white lg:w-1/2">
                Sync AI stands as an innovative digital process automation
                Service that excels in swiftly enhancing, automating, and
                implementing intricate processes to enable more intelligent and
                prompt decision-making. Experience unparalleled operational
                efficiency, cost reductions, and the agility required to tackle
                the upcoming surge of digital disruption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExplorePage