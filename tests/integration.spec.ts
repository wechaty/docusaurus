#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import { prNumberToTitle } from '../src/pr-number-to-title.js'

import '../src/config.js'
import ciInfo  from 'ci-info'

test.skip('pull request title', async t => {
  if (ciInfo.isPR) {
    const prNum = parseInt(process.env['TRAVIS_PULL_REQUEST'] as string)
    const prTitle = await prNumberToTitle('bupt', 'ai-ml.club', prNum)

    if (prTitle.match(/(oral|poster)/i)) {
      // > 🗣Oral | 📰Poster - Paper Title
      t.ok(prTitle.match(/^(🗣|📰)/), 'Oral or Poster should be started from 🗣 or 📰')
    } else {
      await t.skip('Not a Oral or Poster PR, skipped')
    }
  } else {
    await t.skip('skipped because this test is not ran from a pull request')
  }
})
