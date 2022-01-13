'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bcu = require('bigint-crypto-utils');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var bcu__namespace = /*#__PURE__*/_interopNamespace(bcu);

class PublicKey {
    constructor(e, n) {
        this.e = e;
        this.n = n;
    }
    encrypt(m) {
        return bcu__namespace.modPow(m, this.e, this.n);
    }
    verify(s) {
        return bcu__namespace.modPow(s, this.e, this.n);
    }
}

class PrivateKey {
    constructor(d, publicKey) {
        this.d = BigInt(d);
        this.publicKey = publicKey;
    }
    decrypt(c) {
        return bcu__namespace.modPow(c, this.d, this.publicKey.n);
    }
    sign(m) {
        return bcu__namespace.modPow(m, this.d, this.publicKey.n);
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
            p = await bcu__namespace.prime(Math.floor(bitLength / 2) + 1);
            q = await bcu__namespace.prime(Math.floor(bitLength / 2));
            n = p * q;
            // Función coeficiente Euler
            phi = (p - 1n) * (q - 1n);
        } while (q === p || bcu__namespace.bitLength(n) !== bitLength || !(bcu__namespace.gcd(this._E, phi) === 1n));
        const d = bcu__namespace.modInv(this._E, phi);
        this.publicKey = new PublicKey(this._E, BigInt(n));
        this.privateKey = new PrivateKey(d, this.publicKey);
        return { publicKey: this.publicKey, privateKey: this.privateKey };
    }
}

exports.PrivateKey = PrivateKey;
exports.PublicKey = PublicKey;
exports.RSA = RSA;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9wdWJsaWNLZXkudHMiLCIuLi8uLi9zcmMvdHMvcHJpdmF0ZUtleS50cyIsIi4uLy4uL3NyYy90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOlsiYmN1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUVhLFNBQVM7SUFJcEIsWUFBYSxDQUFTLEVBQUUsQ0FBUztRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ1g7SUFFRCxPQUFPLENBQUUsQ0FBUztRQUNoQixPQUFPQSxjQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNyQztJQUVELE1BQU0sQ0FBRSxDQUFTO1FBQ2YsT0FBT0EsY0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDckM7OztNQ2RVLFVBQVU7SUFJckIsWUFBYSxDQUFTLEVBQUUsU0FBb0I7UUFDMUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7S0FDM0I7SUFFRCxPQUFPLENBQUUsQ0FBUztRQUNoQixPQUFPQSxjQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDL0M7SUFFRCxJQUFJLENBQUUsQ0FBUztRQUNiLE9BQU9BLGNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUMvQzs7O0FDbEJIOzs7Ozs7OztNQWdCYSxHQUFHO0lBQWhCOztRQUtFLE9BQUUsR0FBRyxNQUFNLENBQUE7S0FvQlo7SUFsQkMsTUFBTSxrQkFBa0IsQ0FBRSxTQUFTLEdBQUcsSUFBSTtRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQTs7UUFHaEIsR0FBRztZQUNELENBQUMsR0FBRyxNQUFNQSxjQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ2xELENBQUMsR0FBRyxNQUFNQSxjQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDOUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7O1lBR1QsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7U0FDMUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJQSxjQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxFQUFFQSxjQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUM7UUFFdEYsTUFBTSxDQUFDLEdBQUdBLGNBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0tBQ2xFOzs7Ozs7OyJ9
