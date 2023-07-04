/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import { MetaTags } from '@redwoodjs/web'

import NewContact from 'src/components/Contact/NewContact'

import Accordion from './Accordion'
const HomepagePage = () => {
  return (
    <>
      <MetaTags
        title="Homepage"
        description="Sync AI Australia See how a Multi AI bot solution can automate digital engagement across your business, lowering your cost to serve and improving customer and employee experience."
      />

      <div className=" bg-slate-700 text-center font-libre text-3xl text-white"></div>

      <section className="body-font bg-slate-700 text-white ">
        <div className="container mx-auto bg-slate-700 px-5 py-24">
          <div className="mb-20 flex w-full flex-col flex-wrap items-center bg-slate-700 text-center">
            <div className=" flex w-full flex-col flex-wrap items-center bg-slate-700  px-8 text-center">
              <h1 className="title-font mb-2 bg-slate-700 py-8 text-2xl font-medium text-white sm:text-3xl">
                Integrating artificial intelligence into your business systems
              </h1>
              <p className="w-full leading-relaxed text-white lg:w-1/2">
                When potential clients ask our expert staff what they can
                achieve with intelligent automation, the simple answer is - the
                opportunities are endless. With so many options on the table,
                it’s often a case of needing to identify how many, not which one
                of our ai intelligent solutions they want to embrace.
              </p>
              <p className="  w-full leading-relaxed text-white lg:w-1/2">
                Our AI solutions can easily be integrated into your existing
                website or application.
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
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-white">
                  AI Consulting
                </h2>

                <p className="h-80 text-base leading-relaxed">
                  Our AI Automation Agency specializes in AI consulting services
                  to help businesses implement AI systems. Our experienced team
                  of AI professionals is well-versed in the latest AI
                  technologies and can provide comprehensive advice on how to
                  increase efficiency and productivity with AI. We provide
                  tailored solutions to meet the individual needs of each
                  company to help them realize the potential of AI.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-white">
                  AI Automated Workflows
                </h2>
                <p className=" h-80 text-base leading-relaxed">
                  We offer AI Automated Workflows to streamline and automate
                  your most complex tasks. Our AI Automated Workflows are
                  designed to help you save time and resources, while allowing
                  you to focus on higher-value activities. Our solutions are
                  tailored to your individual needs, providing you with the most
                  efficient and effective automated workflows available.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-300">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-white">
                  Internal & External Chatbots
                </h2>
                <p className=" h-80 text-base  leading-relaxed">
                  We provide comprehensive services for external and internal
                  chatbots. Our AI powered chatbots are trained on private data
                  to give a personalised Chat-GPT style bot that can be used for
                  both internal and external applications. This enables teams to
                  interact with customers and employees in an efficient and
                  natural manner, improving customer experience and increased
                  employee productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex min-h-screen items-center justify-center bg-slate-700 p-6">
        <div className="container mx-auto max-w-screen-lg">
          <div>
            <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
              Contact Us
            </h1>
            <NewContact />
          </div>
          <section className="body-font relative text-gray-600">
            <div className="mx-auto md:w-2/3 lg:w-1/2">
              <div className="-m-2 flex flex-wrap">
                <div className="text-red mt-8 w-full   p-2 pt-8"></div>
              </div>
            </div>
          </section>
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
                  21 Brindalee Mews Chadstone 3184
                </p>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default HomepagePage
