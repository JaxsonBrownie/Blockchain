const crypto = require("crypto");

function generateKeyPair() {
    const options = {
        modulusLength: 2048,
        publicKeyEncoding: {type: "spki", format: "pem"},
        privateKeyEncoding: {type: "pkcs8", format: "pem"}
    };

    const keyPairs = crypto.generateKeyPairSync("rsa", options);
    return keyPairs;
}

const keys = generateKeyPair();
console.log(keys.privateKey);
console.log(keys.publicKey);