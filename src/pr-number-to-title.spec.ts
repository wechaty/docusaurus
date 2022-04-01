#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import { prNumberToTitle } from '../src/pr-number-to-title.js'

test.skip('pr number to title', async t => {
  const ORG = 'bupt'
  const REPO = 'ai-ml.club'
  const PR = 141
  const EXPECTED_TITLE = 'fix S2E13'

  const title = await prNumberToTitle(ORG, REPO, PR)
  t.equal(title, EXPECTED_TITLE, 'should get the right pr title')
})
