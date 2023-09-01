import type { FindDatas } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Datas from 'src/components/Data/Datas'

export const QUERY = gql`
  query FindDatas {
    datas {
      id
      data
    }
  }
`

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
  return <Datas datas={datas} />
}
