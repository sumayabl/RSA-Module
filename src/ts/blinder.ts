import { PublicKey } from ".";
import * as bcu from 'bigint-crypto-utils'

class Blinder {

    //r
    blindfactor: bigint 
    publicKey: PublicKey
    msg: bigint

    constructor(pubKey: PublicKey, msg: bigint){
        this.publicKey = pubKey;
        this.msg = msg;

        do{
            this.blindfactor = bcu.randBetween(pubKey.n - 1n, 65536n);
        }while(bcu.gcd(this.blindfactor, this.publicKey.n) !== 1n )     
    }


    blind () {
        return this.msg * this.publicKey.encrypt(this.blindfactor)%this.publicKey.n
    }

    unblind (blindsign: bigint){
        const signature = blindsign * bcu.modInv(this.blindfactor, this.publicKey.n)% this.publicKey.n;
        if (this.publicKey.verify(signature) !== this.msg){
            throw new Error ("Signature not verified");
        }
        
        return signature
    }

}