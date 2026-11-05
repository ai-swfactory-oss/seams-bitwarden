import type { Secret, SecretsManager } from '../index'

export const createFakeSecretsManager = (secrets: readonly Secret[] = []): SecretsManager => ({
  listSecrets: () => secrets,
})
