import config from './jest.config'

const configUnit = {
  ...config,
  testMatch: ['**/*.spec.ts']
}

export default configUnit
