import type { FindDatas } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindDatas {
    datas {
      id
      data
    }
  }
`

export const DatasList = ({ datas }) => {
  const x = datas.map((data) => data.data)

  const j = x
  console.log(j)
  return j
}

export const Tester = ({ datas }: CellSuccessProps<FindDatas>) => {
  console.log(JSON.stringify(DatasList({ datas })))
  return JSON.stringify(DatasList({ datas }))
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No datas yet. '}
      <Link to={routes.newData()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ datas }: CellSuccessProps<FindDatas>) => {
  return <DatasList datas={datas} />
}
