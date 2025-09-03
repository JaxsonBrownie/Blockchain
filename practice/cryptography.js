const crypto = require("crypto");

function sha256Hash(message) {
    const hash = crypto.createHash("sha256").update(message).digest("hex");
    return hash;
}

function mineMessage(message, difficulty) {
    const target = "0".repeat(difficulty);

    let nonce = 1;
    let hashedMessage = sha256Hash(message);
    while (hashedMessage.substring(0, difficulty) != target) {
        hashedMessage = sha256Hash(message + nonce);
        nonce ++;
        console.log(nonce);
    }
    console.log("FOUND HASH: " + hashedMessage);
    console.log("NONCE: " + nonce);
}

mineMessage("Gday", 4);