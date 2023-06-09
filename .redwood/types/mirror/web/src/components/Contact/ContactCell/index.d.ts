// This file was generated by RedwoodJS
import * as Cell from './ContactCell'
import type { CellProps } from '@redwoodjs/web'
import type { FindContactById, FindContactByIdVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './ContactCell'

type CellInputs = CellProps<SuccessType, FindContactById, typeof Cell, FindContactByIdVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
