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

[index.ts:24](https://github.com/juanelas/node-browser-skel/blob/4d9c5d5/src/ts/index.ts#L24)

___

### privateKey

• `Optional` **privateKey**: [`PrivateKey`](PrivateKey.md)

#### Defined in

[index.ts:21](https://github.com/juanelas/node-browser-skel/blob/4d9c5d5/src/ts/index.ts#L21)

___

### publicKey

• `Optional` **publicKey**: [`PublicKey`](PublicKey.md)

#### Defined in

[index.ts:20](https://github.com/juanelas/node-browser-skel/blob/4d9c5d5/src/ts/index.ts#L20)

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

[index.ts:26](https://github.com/juanelas/node-browser-skel/blob/4d9c5d5/src/ts/index.ts#L26)
