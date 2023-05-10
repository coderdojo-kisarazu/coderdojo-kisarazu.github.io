import getConfig from 'next/config'

const url = (filename: string): string => {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { repositoryName: string }
  }
  return publicRuntimeConfig.repositoryName + filename
}

export default url
