import { generateAutoColorNodes } from '../autoColor'

it('autoColor', () => {
  expect(generateAutoColorNodes()).toMatchSnapshot()
})
