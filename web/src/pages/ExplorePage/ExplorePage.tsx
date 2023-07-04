/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ExplorePage = () => {
  return (
    <>
      <MetaTags
        title="Explor"
        description="Sync AI Australia See how a Multi AI bot solution can automate digital engagement across your business, lowering your cost to serve and improving customer and employee experience."
      />

      <div className="body-font  bg-slate-600  text-gray-600">
        <header className="body-font bg-slate-600  text-gray-600">
          <div className="  flex flex-col p-3 sm:flex-row lg:flex-row ">
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
      <div className="h-screen bg-slate-700">
        <div className="mb-20 flex w-full flex-col flex-wrap items-center bg-slate-700 text-center">
          <div className=" flex w-full flex-col flex-wrap items-center bg-slate-700  px-8 text-center">
            <p className="mb-8 mt-8 w-full leading-relaxed text-white lg:w-1/2">
              Our Ai chat technologies are trained on data provided by your
              business. The more data you provide the more accurate the
              responses will be. We can take all your current website, business
              or database data and use it to train your personalised chat AI.
            </p>
            <p className="title-font mb-4 bg-slate-700  text-2xl font-medium text-white sm:text-3xl">
              Explore Our Example Chat AI Stores.
            </p>
            <p className="title-font  bg-slate-700 py-8 font-medium text-white">
              <div className="  flex flex-col p-3 sm:flex-row lg:flex-row ">
                <ul>
                  <div className=" bg-white-500 place-content-center p-3 text-white">
                    <Link
                      className="  focus:shadow-outline  bg-gray-500 p-2  text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                      to={routes.computer()}
                    >
                      <span className=" relative inline-flex h-2 w-2  bg-green-500">
                        <span className=" absolute inline-flex h-full w-full  bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Computer Store</span>
                    </Link>
                  </div>
                </ul>

                <div className=" bg-white-500 place-content-center p-3 text-white">
                  <Link
                    className="  focus:shadow-outline  bg-gray-500 p-2 text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
                    to={routes.store2()}
                  >
                    <span className=" relative inline-flex h-2 w-2  bg-green-500">
                      <span className=" absolute inline-flex h-full w-full  bg-gray-100 opacity-75"></span>
                    </span>
                    <span> Dog Grooming</span>
                  </Link>
                </div>
                <div className=" bg-white-500   place-content-center p-3 text-white">
                  <Link
                    className="  focus:shadow-outline  bg-gray-500 p-2 text-indigo-100 transition-colors duration-150 hover:bg-zinc-600"
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
            </p>
            <p className="w-full leading-relaxed text-white lg:w-1/2">
              Click on the tabs above to explore our example chat AI stores.
            </p>

            <p className="mb-8 w-full leading-relaxed text-white lg:w-1/2">
              Enter questions in relation to the store you are visiting. The
              more detailed information you provide the more precise the
              responses will be. Our chat technologies remember all the
              information you provide and will use it to provide the customer or
              employee with a more personalised experience.
            </p>

            <h1 className="title-font mb-2 text-2xl font-medium text-white sm:text-3xl">
              Example questions to ask:
            </h1>
            <p className="w-full leading-relaxed text-white lg:w-1/2">
              <p>Do you have this item in stock ? </p>
              <p>Can you explain in detail the services you offer ?</p>
              <p>What products do you sell ? </p>
              <p>Can i get a price on this item ? </p>
              <p>Give me a list of your prices ? </p>
              <p>Can you recommend a you best selling products ?</p>
              <p>What payment methods do accept ? </p>
              <p>Can you provide me with the product specifications for ? </p>
              <p>How much for for delivery of this product ? </p>
            </p>
            <h1 className="title-font mb-2 text-2xl font-medium text-white sm:text-3xl">
              Our chat AI can mutate over 500,000 question types .
            </h1>
            <h1 className="title-font mb-12 text-2xl font-medium text-white sm:text-3xl">
              based on data provided by your business.
            </h1>
          </div>
        </div>
        <footer className="body-font bg-slate-700 text-gray-600">
          <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
            <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
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
              <span className="ml-3 items-center text-xl text-white">
                SYNC AI
              </span>
            </a>
            <p className="mt-4 items-center text-sm text-white sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
              © 2023 Sync AI
            </p>
            <span className="mt-4 inline-flex flex-col items-center justify-center text-white sm:ml-auto sm:mt-0 sm:justify-start">
              <p className=" leading-normal">Phone: 0468 609 702</p>
              <p className=" leading-normal">Email: Sales@syncai.com.au</p>
              <p className=" leading-normal">
                21 Brindalee Mews Chadstone VIC 3184
              </p>
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default ExplorePage
