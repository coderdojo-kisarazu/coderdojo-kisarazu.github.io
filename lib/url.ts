import getConfig from 'next/config'

const url = (filename: string, absolute = false): string => {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: {
      schemeFqdn: string
      directory: string
    }
  }
  return absolute
    ? publicRuntimeConfig.schemeFqdn + publicRuntimeConfig.directory + filename
    : publicRuntimeConfig.directory + filename
}

export default url
