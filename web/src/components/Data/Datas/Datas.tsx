import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Data/DatasCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteDataMutationVariables, FindDatas } from 'types/graphql'

const DELETE_DATA_MUTATION = gql`
  mutation DeleteDataMutation($id: Int!) {
    deleteData(id: $id) {
      id
    }
  }
`

const DatasList = ({ datas }: FindDatas) => {
  const [deleteData] = useMutation(DELETE_DATA_MUTATION, {
    onCompleted: () => {
      toast.success('Data deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteDataMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete data ' + id + '?')) {
      deleteData({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Data</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.id}>
              <td>{truncate(data.id)}</td>
              <td>{truncate(data.data)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.data({ id: data.id })}
                    title={'Show data ' + data.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editData({ id: data.id })}
                    title={'Edit data ' + data.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete data ' + data.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(data.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DatasList
