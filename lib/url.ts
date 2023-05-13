import getConfig from 'next/config'

const url = (filename: string, absolute = false): string => {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: {
      schemaFqdn: string
      directory: string
    }
  }
  return absolute
    ? publicRuntimeConfig.schemaFqdn + publicRuntimeConfig.directory + filename
    : publicRuntimeConfig.directory + filename
}

export default url
