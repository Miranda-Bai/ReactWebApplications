import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'yo5mx0hn',
    dataset: 'production',
  },
  vite: (prevConfig) => {
    return {
      ...prevConfig,
      resolve: {
        ...prevConfig.resolve,
        alias: {
          ...prevConfig.resolve?.alias,
          '@': __dirname,
        },
      },
    }
  },
})
