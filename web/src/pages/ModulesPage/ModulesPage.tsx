/* eslint-disable jsx-a11y/iframe-has-title */
const ModulesPage = () => {
  return (
    <>
      <section className="body-font bg-slate-700 text-white ">
        <div className="container  mx-auto flex-col bg-slate-700  py-12">
          <div className=" mb-20 flex  flex-col flex-wrap items-center bg-slate-700 text-center">
            <div className="  flex-col items-center bg-slate-700 text-center">
              <h1 className=" bg-slate-700  text-2xl font-medium text-white">
                Integrating artificial intelligence into your business model
              </h1>
            </div>
          </div>

          <div className=" w-auto flex-col">
            <iframe
              src="https://chatstore1.vercel.app"
              height="700"
              width="700"
            ></iframe>
          </div>
          <div className=" w-auto flex-col">
            <iframe
              src="https://chatstore1.vercel.app"
              height="700"
              width="700"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default ModulesPage
