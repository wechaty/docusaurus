
import util         from 'util'
import childProcess from 'child_process'

const exec = util.promisify(childProcess.exec)

type Since =  '1 month ago'
            | '1 week ago'

export interface ChangeOptions  {
  since?: Since,
  limit?: number,
}

async function getChangedFileList (
  options?: ChangeOptions,
): Promise<string[]> {
  /**
   * Git show files that were changed in the last 2 days
   *  https://stackoverflow.com/a/7500276/1123955
   *
   * git log --since="1 month ago" --name-only --pretty=format: | sort | uniq | grep jekyll/_contributors
   */
  const cmdArgList = [
    'git log',
    '--name-only',
    '--pretty=format:',
  ]

  if (options?.since) {
    cmdArgList.push(
      `--since="${options?.since}"`
    )
  }
  cmdArgList.push(
    '| sort',
    '| uniq',
  )

  if (options?.limit) {
    cmdArgList.push(`| head -${options.limit}`)
  }

  const cmd    = cmdArgList.join(' ')
  // console.info(cmd)
  const output = await exec(cmd)

  const changedFileList = output.stdout
    .split('\n')
    .filter(s => !!s)

  return changedFileList
}

export { getChangedFileList }
