export interface Secret {
  readonly key: string
  readonly value: string
}

export interface SecretsManager {
  readonly listSecrets: () => readonly Secret[]
}

export const createSecretsManager = (): SecretsManager => ({
  listSecrets: () => [],
})
