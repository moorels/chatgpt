import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const datas: QueryResolvers['datas'] = () => {
  return db.data.findMany()
}

export const data: QueryResolvers['data'] = ({ id }) => {
  return db.data.findUnique({
    where: { id },
  })
}

export const createData: MutationResolvers['createData'] = ({ input }) => {
  return db.data.create({
    data: input,
  })
}

export const updateData: MutationResolvers['updateData'] = ({ id, input }) => {
  return db.data.update({
    data: input,
    where: { id },
  })
}

export const deleteData: MutationResolvers['deleteData'] = ({ id }) => {
  return db.data.delete({
    where: { id },
  })
}
