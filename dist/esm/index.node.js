import * as bcu from 'bigint-crypto-utils';

class PublicKey {
    constructor(e, n) {
        this.e = e;
        this.n = n;
    }
    encrypt(m) {
        return bcu.modPow(m, this.e, this.n);
    }
    verify(s) {
        return bcu.modPow(s, this.e, this.n);
    }
}

class PrivateKey {
    constructor(d, publicKey) {
        this.d = BigInt(d);
        this.publicKey = publicKey;
    }
    decrypt(c) {
        return bcu.modPow(c, this.d, this.publicKey.n);
    }
    sign(m) {
        return bcu.modPow(m, this.d, this.publicKey.n);
    }
}

/**
 * My module description. Please update with your module data.
 *
 * @remarks
 * This module runs perfectly in node.js and browsers
 *
 * @packageDocumentation
 */
class RSA {
    constructor() {
        // Generamos una constante para "e" en módulo phi(n)
        this._E = 65537n;
    }
    async generateRandomKeys(bitLength = 3072) {
        let p, q, n, phi;
        // Generamos el módulo público n = p * q
        do {
            p = await bcu.prime(Math.floor(bitLength / 2) + 1);
            q = await bcu.prime(Math.floor(bitLength / 2));
            n = p * q;
            // Función coeficiente Euler
            phi = (p - 1n) * (q - 1n);
        } while (q === p || bcu.bitLength(n) !== bitLength || !(bcu.gcd(this._E, phi) === 1n));
        const d = bcu.modInv(this._E, phi);
        this.publicKey = new PublicKey(this._E, BigInt(n));
        this.privateKey = new PrivateKey(d, this.publicKey);
        return { publicKey: this.publicKey, privateKey: this.privateKey };
    }
}

export { PrivateKey, PublicKey, RSA };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RzL3B1YmxpY0tleS50cyIsIi4uLy4uL3NyYy90cy9wcml2YXRlS2V5LnRzIiwiLi4vLi4vc3JjL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpudWxsLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztNQUVhLFNBQVM7SUFJcEIsWUFBYSxDQUFTLEVBQUUsQ0FBUztRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ1g7SUFFRCxPQUFPLENBQUUsQ0FBUztRQUNoQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3JDO0lBRUQsTUFBTSxDQUFFLENBQVM7UUFDZixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3JDOzs7TUNkVSxVQUFVO0lBSXJCLFlBQWEsQ0FBUyxFQUFFLFNBQW9CO1FBQzFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO0tBQzNCO0lBRUQsT0FBTyxDQUFFLENBQVM7UUFDaEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDL0M7SUFFRCxJQUFJLENBQUUsQ0FBUztRQUNiLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQy9DOzs7QUNsQkg7Ozs7Ozs7O01BZ0JhLEdBQUc7SUFBaEI7O1FBS0UsT0FBRSxHQUFHLE1BQU0sQ0FBQTtLQW9CWjtJQWxCQyxNQUFNLGtCQUFrQixDQUFFLFNBQVMsR0FBRyxJQUFJO1FBQ3hDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFBOztRQUdoQixHQUFHO1lBQ0QsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNsRCxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDOUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7O1lBR1QsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7U0FDMUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDO1FBRXRGLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0tBQ2xFOzs7OzsifQ==
