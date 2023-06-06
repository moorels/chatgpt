/* eslint-disable react/no-unescaped-entities */
import { MetaTags } from '@redwoodjs/web'

const HomepagePage = () => {
  return (
    <>
      <MetaTags title="Homepage" description="Chat Gpt" />

      <div className="body-font text-center text-3xl">Chat GPT</div>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              Advanced AI Chatbot powered by ChatGPT API
            </h1>
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              We’ve trained a model called ChatGPT which interacts in a
              conversational way. The dialogue format makes it possible for
              ChatGPT to answer followup questions, admit its mistakes,
              challenge incorrect premises, and reject inappropriate requests.
            </p>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
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
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Examples
                </h2>
                <p className="text-base leading-relaxed">
                  "Explain quantum computing in simple terms" <br></br> "Got any
                  creative ideas for a 10 year old’s birthday?" <br></br> "How
                  do I make an HTTP request in Javascript?" →
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
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
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Capabilities
                </h2>
                <p className="text-base leading-relaxed">
                  Remembers what user said earlier in the conversation.<br></br>{' '}
                  Allows user to provide follow-up corrections.<br></br> Trained
                  to decline inappropriate requests.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
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
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Limitations
                </h2>
                <p className="text-base leading-relaxed">
                  May occasionally generate incorrect information.<br></br> May
                  occasionally produce biased content.
                  <br></br>
                  Limited knowledge of world and events after 2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomepagePage
