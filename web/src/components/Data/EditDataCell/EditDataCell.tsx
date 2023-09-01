import type { EditDataById, UpdateDataInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DataForm from 'src/components/Data/DataForm'

export const QUERY = gql`
  query EditDataById($id: Int!) {
    data: data(id: $id) {
      id
      data
    }
  }
`
const UPDATE_DATA_MUTATION = gql`
  mutation UpdateDataMutation($id: Int!, $input: UpdateDataInput!) {
    updateData(id: $id, input: $input) {
      id
      data
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ data }: CellSuccessProps<EditDataById>) => {
  const [updateData, { loading, error }] = useMutation(UPDATE_DATA_MUTATION, {
    onCompleted: () => {
      toast.success('Data updated')
      navigate(routes.datas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateDataInput, id: EditDataById['data']['id']) => {
    updateData({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Data {data?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DataForm data={data} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
