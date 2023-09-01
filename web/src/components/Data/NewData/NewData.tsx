import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DataForm from 'src/components/Data/DataForm'

import type { CreateDataInput } from 'types/graphql'

const CREATE_DATA_MUTATION = gql`
  mutation CreateDataMutation($input: CreateDataInput!) {
    createData(input: $input) {
      id
    }
  }
`

const NewData = () => {
  const [createData, { loading, error }] = useMutation(CREATE_DATA_MUTATION, {
    onCompleted: () => {
      toast.success('Data created')
      navigate(routes.datas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateDataInput) => {
    createData({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Data</h2>
      </header>
      <div className="rw-segment-main">
        <DataForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewData
