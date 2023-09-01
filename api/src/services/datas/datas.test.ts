import type { Data } from '@prisma/client'

import { datas, data, createData, updateData, deleteData } from './datas'
import type { StandardScenario } from './datas.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('datas', () => {
  scenario('returns all datas', async (scenario: StandardScenario) => {
    const result = await datas()

    expect(result.length).toEqual(Object.keys(scenario.data).length)
  })

  scenario('returns a single data', async (scenario: StandardScenario) => {
    const result = await data({ id: scenario.data.one.id })

    expect(result).toEqual(scenario.data.one)
  })

  scenario('creates a data', async () => {
    const result = await createData({
      input: { data: 'String' },
    })

    expect(result.data).toEqual('String')
  })

  scenario('updates a data', async (scenario: StandardScenario) => {
    const original = (await data({ id: scenario.data.one.id })) as Data
    const result = await updateData({
      id: original.id,
      input: { data: 'String2' },
    })

    expect(result.data).toEqual('String2')
  })

  scenario('deletes a data', async (scenario: StandardScenario) => {
    const original = (await deleteData({ id: scenario.data.one.id })) as Data
    const result = await data({ id: original.id })

    expect(result).toEqual(null)
  })
})
