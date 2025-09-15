const crypto = require("crypto");

class Block {
    // define constructor to set up properties
    constructor(index, transactions, prevHash) {
        this.index = index;
        this.transactions = transactions;
        this.prevHash = prevHash;
        this.nonce = 0;
        this.hash = this.createHash();
    }

    // a method to return a hash based on all the properties of the Block
    createHash() {
        const data = this.index + JSON.stringify(this.transactions) + this.prevHash + this.nonce;
        const hash = crypto.createHash("sha256").update(data).digest("hex");

        return hash;
    }

    // a method to "mine" the block based on a given difficulty
    mineBlock(difficulty) {
        const target = "0".repeat(difficulty);

        while (this.hash.substring(0, difficulty) != target) {
            // change the nonce to give a new hash each iteration
            this.nonce ++;
            this.hash = this.createHash();
            console.log("Current hash: " + this.hash);
        }
        console.log("Block mined! Hash: " + this.hash);
    }
}



class BlockChain {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.chain = [];
        this.pendingTransactions = [];
    }
}




const testBlock = new Block(1, "test transaction", "testprevhash");
testBlock.mineBlock(5);

console.log(testBlock);