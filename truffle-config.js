const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    abs_groupofcompanies_membera_membera: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('/Users/asif/Documents/session/2020/April-Blockchain/demo/myblockchainmember.env', 'utf-8'), "https://membera.blockchain.azure.com:3200/5wX3Yt5THXm0AaON52DeY3rR")
    }
  }
};
