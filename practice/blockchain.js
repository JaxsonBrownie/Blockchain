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
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
    }

    // creates the genesis block
    createGenesisBlock() {
        const genesisBlock = new Block(0, [], "");
        return genesisBlock;
    }

    // adds a pending transaction
    addPendingTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    // groups all pending transactions and creates a new block
    createBlock() {
        // get previous block (for its hash)
        const prevBlock = this.chain[this.chain.length - 1];

        // create new block to add to chain
        const newBlock = new Block(this.chain.length, this.pendingTransactions, prevBlock.hash);

        // add new block to the chain (after mining)
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
        this.pendingTransactions = [];
    }
}


const blockChain = new BlockChain(5);

blockChain.addPendingTransaction({"to": "Jaxson", "from": "Kimsa", "amount": 500});
blockChain.addPendingTransaction({"to": "Jaxson", "from": "Kimsa", "amount": 400});
blockChain.addPendingTransaction({"to": "Greg", "from": "Kimsa", "amount": 500});
blockChain.addPendingTransaction({"to": "Jasminka", "from": "Aran", "amount": 500});

blockChain.createBlock();