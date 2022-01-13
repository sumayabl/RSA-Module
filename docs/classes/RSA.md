# Class: RSA

## Table of contents

### Constructors

- [constructor](RSA.md#constructor)

### Properties

- [\_E](RSA.md#_e)
- [privateKey](RSA.md#privatekey)
- [publicKey](RSA.md#publickey)

### Methods

- [generateRandomKeys](RSA.md#generaterandomkeys)

## Constructors

### constructor

• **new RSA**()

## Properties

### \_E

• **\_E**: `bigint`

#### Defined in

[index.ts:22](https://github.com/sumayabl/RSA-Module/blob/e6f7066/src/ts/index.ts#L22)

___

### privateKey

• `Optional` **privateKey**: [`PrivateKey`](PrivateKey.md)

#### Defined in

[index.ts:19](https://github.com/sumayabl/RSA-Module/blob/e6f7066/src/ts/index.ts#L19)

___

### publicKey

• `Optional` **publicKey**: [`PublicKey`](PublicKey.md)

#### Defined in

[index.ts:18](https://github.com/sumayabl/RSA-Module/blob/e6f7066/src/ts/index.ts#L18)

## Methods

### generateRandomKeys

▸ **generateRandomKeys**(`bitLength?`): `Promise`<{}\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bitLength` | `number` | `3072` |

#### Returns

`Promise`<{}\>

#### Defined in

[index.ts:24](https://github.com/sumayabl/RSA-Module/blob/e6f7066/src/ts/index.ts#L24)
