import { describe, expect, it } from 'vitest'

import { createSecretsManager } from '../src/index'
import { createFakeSecretsManager } from '../src/testing/index'

describe('createSecretsManager', () => {
  it('lists no secrets while the seam is a skeleton', () => {
    expect(createSecretsManager().listSecrets()).toEqual([])
  })
})

describe('createFakeSecretsManager', () => {
  it('lists no secrets by default', () => {
    expect(createFakeSecretsManager().listSecrets()).toEqual([])
  })

  it('lists the secrets it was given', () => {
    const secrets = [{ key: 'API_TOKEN', value: 'token' }]
    expect(createFakeSecretsManager(secrets).listSecrets()).toBe(secrets)
  })
})
