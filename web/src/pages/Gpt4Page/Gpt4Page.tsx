import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Particles from '../../components/Particles'
const Gpt4Page = () => {
  return (
    <>
      <div className=" h-screen flex-col   py-1">
        <Particles />
        <div>
          <iframe
            className=" m-0 -mt-[5px]  p-0"
            title="df"
            src="https://gpt4-kohl.vercel.app/"
            height="650"
            width="920"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Gpt4Page
