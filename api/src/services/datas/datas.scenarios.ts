import type { Prisma, Data } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DataCreateArgs>({
  data: {
    one: { data: { data: 'String' } },
    two: { data: { data: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Data, 'data'>
