import assert from 'node:assert/strict'
import test from 'node:test'
import { validateRegistration } from './registration.js'

test('requires a useful name and valid email', () => {
  assert.deepEqual(validateRegistration({ name: 'A', email: 'wrong' }), {
    name: 'Enter at least 2 characters.',
    email: 'Enter a valid email address.',
  })
})

test('accepts a complete registration interest form', () => {
  assert.deepEqual(validateRegistration({ name: 'Ada', email: 'ada@example.com' }), {})
})
