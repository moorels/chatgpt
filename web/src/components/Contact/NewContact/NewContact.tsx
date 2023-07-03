import type { CreateContactInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ContactForm from 'src/components/Contact/ContactForm'

const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const NewContact = () => {
  const [createContact, { loading, error }] = useMutation(
    CREATE_CONTACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Contact created')
        navigate(routes.homepage())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateContactInput) => {
    createContact({ variables: { input } })
  }

  return (
    <div className=" bg-slate-600">
      <header className="rw-segment-header bg-slate-600">
        <h2 className="rw-heading rw-heading-secondary bg-slate-600 text-white">
          Leave a Message
        </h2>
      </header>
      <div className="rw-segment-main bg-slate-600 text-white">
        <ContactForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewContact
