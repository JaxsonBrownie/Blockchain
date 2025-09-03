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

function signMessage(privateKey, message) {
    const signer = crypto.createSign("SHA256");

    signer.update(message);
    return signer.sign(privateKey, "hex");
}

function verifyMessage(publickey, signature, message) {
    const verifier = crypto.createVerify("SHA256");

    verifier.update(message);
    return verifier.verify(publickey, signature, "hex");
}

const keys = generateKeyPair();
const signature = signMessage(keys.privateKey, "{from: Jaxson; to: Bob, amount 20}");
const isValid = verifyMessage(keys.publicKey, signature, "{from: Bob; to: Jaxson, amount 20}");

console.log(isValid);