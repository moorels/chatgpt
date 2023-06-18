// This file was generated by RedwoodJS
import * as Cell from './UserCell'
import type { CellProps } from '@redwoodjs/web'
import type { FindUserById, FindUserByIdVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './UserCell'

type CellInputs = CellProps<SuccessType, FindUserById, typeof Cell, FindUserByIdVariables>

export default function (props: CellInputs): ReturnType<SuccessType>