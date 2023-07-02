import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ExplorePage = () => {
  return (
    <>
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
              <p>Can you explain in detail this service you offer ?</p>
              <p>What products do you sell ? </p>
              <p>Can i get a price on this item ? </p>
              <p>What are the store hours ? </p>
              <p> Can you recommend a product similar to this one ? </p>
              <p>What payment methods do accept ? </p>
              <p>Can you provide me with the product specifications for ? </p>
              <p>How much for for delivery of this product ? </p>
            </p>
            <h1 className="title-font mb-2 text-2xl font-medium text-white sm:text-3xl">
              Our chat AI can understand over 50,000 questions.
            </h1>
            <h1 className="title-font mb-12 text-2xl font-medium text-white sm:text-3xl">
              based on data provided by your business.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExplorePage
