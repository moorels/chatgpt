// This file was generated by RedwoodJS
import * as Cell from './UsersCell'
import type { CellProps } from '@redwoodjs/web'
import type { FindUsers, FindUsersVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './UsersCell'

type CellInputs = CellProps<SuccessType, FindUsers, typeof Cell, FindUsersVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
