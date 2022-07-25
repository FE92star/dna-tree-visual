import { generateAutoColorNodes } from '../autoColor'
import { it, expect } from 'vitest'

it('autoColor', () => {
  expect(generateAutoColorNodes()).toMatchSnapshot()
})
