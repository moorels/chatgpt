import type { Prisma, Contact } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: {
        name: 'String',
        company: 'String',
        email: 'String',
        phone: 'String',
        product: 'String',
        message: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        company: 'String',
        email: 'String',
        phone: 'String',
        product: 'String',
        message: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Contact, 'contact'>
