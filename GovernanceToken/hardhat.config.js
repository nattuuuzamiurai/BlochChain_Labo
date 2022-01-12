/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('@nomiclabs/hardhat-waffle');
 require("@nomiclabs/hardhat-etherscan");

 var secretsFile =  require("./secrets.json");

  //privateKeyを入れたままpushしないように


 module.exports = {
  solidity: "0.8.0",
  networks: {
    bsctestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [secretsFile.key]
    }
  },
  etherscan: {
    //apiKeyを入れたままpushしないように
    apiKey:  secretsFile.Polygon_API_key
  }
 };
 