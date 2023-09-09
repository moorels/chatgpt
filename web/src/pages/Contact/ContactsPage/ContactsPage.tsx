import ContactsCell from 'src/components/Contact/ContactsCell'
import NewContact from 'src/components/Contact/NewContact'

import Particles from '../../../components/Particles'
const ContactsPage = () => {
  return (
    <>
      <div>
        <Particles />
        <ContactsCell />
      </div>
      <div className=" text-slate-700"></div>
      <div className="flex h-screen items-center justify-center ">
        <div className="w-2/3 rounded-lg  p-8 shadow-lg">
          <NewContact />
        </div>
      </div>
    </>
  )
}

export default ContactsPage
