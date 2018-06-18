module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    production: {
      host: "bclsya-dns-reg1.westeurope.cloudapp.azure.com",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4600000
    },
    rpc: {
      host: "localhost",
      gas: 21000,
      port: 8545
    },
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  }
};
