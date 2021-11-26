/**
 * My module description. Please update with your module data.
 *
 * @remarks
 * This module runs perfectly in node.js and browsers
 *
 * @packageDocumentation
 */

import { PublicKey } from './publicKey'
import { PrivateKey } from './privateKey'
import * as bcu from 'bigint-crypto-utils'

export { PublicKey } from './publicKey'
export { PrivateKey } from './privateKey'

export class RSA {
  publicKey?: PublicKey
  privateKey?: PrivateKey

  // Generamos una constante para "e" en módulo phi(n)
  _E = 65537n

  async generateRandomKeys (bitLength = 3072): Promise<{}> {
    let p, q, n, phi

    // Generamos el módulo público n = p * q
    do {
      p = await bcu.prime(Math.floor(bitLength / 2) + 1)
      q = await bcu.prime(Math.floor(bitLength / 2))
      n = p * q

      // Función coeficiente Euler
      phi = (p - 1n) * (q - 1n)
    } while (q === p || bcu.bitLength(n) !== bitLength || !(bcu.gcd(this._E, phi) === 1n))

    const d = bcu.modInv(this._E, phi)
    this.publicKey = new PublicKey(this._E, BigInt(n))
    this.privateKey = new PrivateKey(d, this.publicKey)
    return { publicKey: this.publicKey, privateKey: this.privateKey }
  }
}
