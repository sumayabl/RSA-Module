# Class: PrivateKey

## Table of contents

### Constructors

- [constructor](PrivateKey.md#constructor)

### Properties

- [d](PrivateKey.md#d)
- [publicKey](PrivateKey.md#publickey)

### Methods

- [decrypt](PrivateKey.md#decrypt)
- [sign](PrivateKey.md#sign)

## Constructors

### constructor

• **new PrivateKey**(`d`, `publicKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `bigint` |
| `publicKey` | [`PublicKey`](PublicKey.md) |

#### Defined in

privateKey.ts:8

## Properties

### d

• **d**: `bigint`

#### Defined in

privateKey.ts:5

___

### publicKey

• **publicKey**: [`PublicKey`](PublicKey.md)

#### Defined in

privateKey.ts:6

## Methods

### decrypt

▸ **decrypt**(`c`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `bigint` |

#### Returns

`bigint`

#### Defined in

privateKey.ts:13

___

### sign

▸ **sign**(`m`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `bigint` |

#### Returns

`bigint`

#### Defined in

privateKey.ts:17
