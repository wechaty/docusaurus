import https from 'https'
import fetch from 'node-fetch'
import { URL } from 'url'
import AbortController from 'abort-controller'

const NETWORK_TIMEOUT = 30 * 1000 // 30 seconds

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})
const httpsOptions = {
  agent: httpsAgent,
}

/**
 * https://stackoverflow.com/a/30219553/1123955
 * curl -w '%{response_code}' 'https://api.github.com/users/zixiaxxx'
 */
async function isUrlExist (
  strUrl: string,
): Promise<boolean> {
  const url = new URL(strUrl)

  const controller = new AbortController()
  const timer = setTimeout(
    () => controller.abort(),
    NETWORK_TIMEOUT,
  )
  try {
    const baseOptions = {
      signal: controller.signal,
      .../^https/.test(url.protocol) ? httpsOptions : undefined,
    }
    const headOptions = {
      ...baseOptions,
      method: 'HEAD',
    }
    const getOptions = {
      ...baseOptions,
      method: 'GET',
    }

    let response = await fetch(
      url,
      headOptions,
    )

    if (!response.ok) {
      response = await fetch(
        url,
        getOptions
      )
    }

    return response.ok

  } catch (e) {
    console.error(e)
    return false
  } finally {
    clearTimeout(timer)
  }
}

export { isUrlExist }
