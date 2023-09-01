import type { FindDatas } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

<<<<<<< HEAD
import Datas from 'src/components/Data/Datas'

=======
>>>>>>> 52c0b8cb22f79cb6bbbd061bf8c5c61d14602fe5
export const QUERY = gql`
  query FindDatas {
    datas {
      id
      data
    }
  }
`

<<<<<<< HEAD
=======
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

>>>>>>> 52c0b8cb22f79cb6bbbd061bf8c5c61d14602fe5
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
<<<<<<< HEAD
  return <Datas datas={datas} />
=======
  return <DatasList datas={datas} />
>>>>>>> 52c0b8cb22f79cb6bbbd061bf8c5c61d14602fe5
}
