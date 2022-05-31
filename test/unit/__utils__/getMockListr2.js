import { jest } from '@jest/globals'
import { figures } from 'listr2'

export const getMockListr2 = async () => {
  const mockRunner = jest.fn()
  mockRunner.run = jest.fn()

  jest.unstable_mockModule('listr2', () => ({
    Listr: jest.fn(() => mockRunner),
    figures,
  }))

  return import('listr2')
}
