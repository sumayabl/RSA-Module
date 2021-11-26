import * as bcu from 'bigint-crypto-utils'
import { PublicKey as publickey } from './publicKey'

export class PrivateKey {
  d: bigint
  publicKey: publickey

  constructor (d: bigint, publicKey: publickey) {
    this.d = BigInt(d)
    this.publicKey = publicKey
  }

  decrypt (c: bigint): bigint {
    return bcu.modPow(c, this.d, this.publicKey.n)
  }

  sign (m: bigint): bigint {
    return bcu.modPow(m, this.d, this.publicKey.n)
  }
}
