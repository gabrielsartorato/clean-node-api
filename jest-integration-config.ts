import config from './jest.config'

const configIntegration = {
  ...config,
  testMatch: ['**/*.test.ts']
}

export default configIntegration
