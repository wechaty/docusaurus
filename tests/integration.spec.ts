#!/usr/bin/env ts-node

import test  from 'tstest'

import fs from 'fs'
import path from 'path'
import util from 'util'

import probeImageSize from 'probe-image-size'
import globCB from 'glob'

import { prNumberToTitle } from '../src/pr-number-to-title'

const glob = util.promisify(globCB)

const isPR = require('is-pr')

test.skip('pull request title', async t => {
  if (isPR) {
    const prNum = parseInt(process.env.TRAVIS_PULL_REQUEST as string)
    const prTitle = await prNumberToTitle('bupt', 'ai-ml.club', prNum)

    if (prTitle.match(/(oral|poster)/i)) {
      // > 🗣Oral | 📰Poster - Paper Title
      t.true(prTitle.match(/^(🗣|📰)/), 'Oral or Poster should be started from 🗣 or 📰')
    } else {
      t.skip('Not a Oral or Poster PR, skipped')
    }
  } else {
    t.skip('skipped because this test is not ran from a pull request')
  }
})

test('', async t => {
  t.skip('tbw')
})

test('', async t => {
  t.skip('tbw')
})

test('', async t => {
  t.skip('tbw')
})

test('', async t => {
  t.skip('tbw')
})

test('', async t => {
  t.skip('tbw')
})

test('', async t => {
  t.skip('tbw')
})

test('', async t => {
  t.skip('tbw')
})

test('', async t => {
  t.skip('tbw')
})

test('', async t => {
  t.skip('tbw')
})

test('', async t => {
  t.skip('tbw')
})
