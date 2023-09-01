import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type { DeleteDataMutationVariables, FindDataById } from 'types/graphql'

const DELETE_DATA_MUTATION = gql`
  mutation DeleteDataMutation($id: Int!) {
    deleteData(id: $id) {
      id
    }
  }
`

interface Props {
  data: NonNullable<FindDataById['data']>
}

const Data = ({ data }: Props) => {
  const [deleteData] = useMutation(DELETE_DATA_MUTATION, {
    onCompleted: () => {
      toast.success('Data deleted')
      navigate(routes.datas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteDataMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete data ' + id + '?')) {
      deleteData({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Data {data.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{data.id}</td>
            </tr>
            <tr>
              <th>Data</th>
              <td>{data.data}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editData({ id: data.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(data.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Data
