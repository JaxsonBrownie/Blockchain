const crypto = require("crypto");

class Block {
    constructor(index, transactions, prevHash) {
        this.index = index;
        this.transactions = transactions;
        this.prevHash = prevHash;
        this.nonce = 0;
        this.hash = this.createHash();
    }

    createHash() {
        const data = this.index + JSON.stringify(this.transactions) + this.prevHash + this.nonce;
        const hash = crypto.createHash("sha256").update(data).digest("hex");

        return hash;
    }
}
const testBlock = new Block(1, "test transaction", "testprevhash");