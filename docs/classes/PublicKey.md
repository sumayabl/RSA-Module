# Class: PublicKey

## Table of contents

### Constructors

- [constructor](PublicKey.md#constructor)

### Properties

- [e](PublicKey.md#e)
- [n](PublicKey.md#n)

### Methods

- [encrypt](PublicKey.md#encrypt)
- [verify](PublicKey.md#verify)

## Constructors

### constructor

• **new PublicKey**(`e`, `n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `bigint` |
| `n` | `bigint` |

#### Defined in

[publicKey.ts:7](https://github.com/sumayabl/RSA-Module/blob/e6f7066/src/ts/publicKey.ts#L7)

## Properties

### e

• **e**: `bigint`

#### Defined in

[publicKey.ts:4](https://github.com/sumayabl/RSA-Module/blob/e6f7066/src/ts/publicKey.ts#L4)

___

### n

• **n**: `bigint`

#### Defined in

[publicKey.ts:5](https://github.com/sumayabl/RSA-Module/blob/e6f7066/src/ts/publicKey.ts#L5)

## Methods

### encrypt

▸ **encrypt**(`m`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `bigint` |

#### Returns

`bigint`

#### Defined in

[publicKey.ts:12](https://github.com/sumayabl/RSA-Module/blob/e6f7066/src/ts/publicKey.ts#L12)

___

### verify

▸ **verify**(`s`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `bigint` |

#### Returns

`bigint`

#### Defined in

[publicKey.ts:16](https://github.com/sumayabl/RSA-Module/blob/e6f7066/src/ts/publicKey.ts#L16)
