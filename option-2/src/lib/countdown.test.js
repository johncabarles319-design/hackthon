import assert from 'node:assert/strict'
import test from 'node:test'
import { getCountdown } from './countdown.js'

test('breaks remaining time into calendar-free units', () => {
  assert.deepEqual(getCountdown(90_061_000, 0), {
    days: 1,
    hours: 1,
    minutes: 1,
    seconds: 1,
    complete: false,
  })
})

test('returns a completed state after the target', () => {
  assert.deepEqual(getCountdown(1_000, 2_000), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    complete: true,
  })
})
