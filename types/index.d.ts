/**
 * My module description. Please update with your module data.
 *
 * @remarks
 * This module runs perfectly in node.js and browsers
 *
 * @packageDocumentation
 */
import { PublicKey } from './publicKey';
import { PrivateKey } from './privateKey';
export { PublicKey } from './publicKey';
export { PrivateKey } from './privateKey';
export declare class RSA {
    publicKey?: PublicKey;
    privateKey?: PrivateKey;
    _E: bigint;
    generateRandomKeys(bitLength?: number): Promise<{}>;
}
//# sourceMappingURL=index.d.ts.map