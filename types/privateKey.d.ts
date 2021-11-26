import { PublicKey as publickey } from './publicKey';
export declare class PrivateKey {
    d: bigint;
    publicKey: publickey;
    constructor(d: bigint, publicKey: publickey);
    decrypt(c: bigint): bigint;
    sign(m: bigint): bigint;
}
//# sourceMappingURL=privateKey.d.ts.map