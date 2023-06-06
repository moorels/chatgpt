// This file was generated by RedwoodJS
import * as Cell from './ContactsCell'
import type { CellProps } from '@redwoodjs/web'
import type { FindContacts, FindContactsVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './ContactsCell'

type CellInputs = CellProps<SuccessType, FindContacts, typeof Cell, FindContactsVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
