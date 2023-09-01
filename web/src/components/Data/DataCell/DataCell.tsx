import type { FindDataById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Data from 'src/components/Data/Data'

export const QUERY = gql`
  query FindDataById($id: Int!) {
    data: data(id: $id) {
      id
      data
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Data not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ data }: CellSuccessProps<FindDataById>) => {
  return <Data data={data} />
}
