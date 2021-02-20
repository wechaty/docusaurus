const URL_WHITE_LIST_REGEX = [
  /badge\.fury\.io/i,
  /dockeri\.co\/image/i,
  /github\.com\/.*\/workflows\//i,
  /githubusercontent\.com/i,
  /gstatic\.com/i,
  /herokucdn\.com/i,
  /images\.microbadger\.com/i,
  /img\.shields\.io/i,
  /pepy\.tech\/badge/i,
  /sourcerer\.io/i,
  /wechaty\.github\.io/i,
  /wechaty\.js\.org/i,
]

const isWhiteListedRemoteUrl = (url: string) => URL_WHITE_LIST_REGEX.some(regex => regex.test(url))

const not = (func: (...args: any[]) => boolean) => (...args: any) => !func(...args)
const isNotWhiteListedRemoteUrl = not(isWhiteListedRemoteUrl)

export {
  isWhiteListedRemoteUrl,
  isNotWhiteListedRemoteUrl,
}
