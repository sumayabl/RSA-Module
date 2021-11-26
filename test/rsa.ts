describe('testing function helloWorld() with ts file in the test directory', function () {
  const inputs = [14278n, 14591659986550976897544685759767960068n]
  const rsa = new _pkg.RSA()
  for (const input of inputs) {
    describe(`decrypt(encrypt(${input}))`, function () {
      it(`should return "${input}!"`, async function () {
        await rsa.generateRandomKeys(512)
        const ciphertext = (rsa.publicKey as _pkgTypes.PublicKey).encrypt(input)
        const ret = (rsa.privateKey as _pkgTypes.PrivateKey).decrypt(ciphertext)
        chai.expect(ret).to.equal(input)
      })
    })
  }
})
