# seams-bitwarden

Seam for the Bitwarden Secrets Manager: a typed SDK over Bitwarden Secrets Manager, with a fake under `./testing` for consumers' tests.

This repository holds only the guarded skeleton so far: `createSecretsManager` returns a secrets manager whose `listSecrets` lists no secrets, and `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-bitwarden`: the Bitwarden Secrets Manager seam (SDK).

## Licence

MIT
