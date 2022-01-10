/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('@nomiclabs/hardhat-waffle');
 require("@nomiclabs/hardhat-etherscan");
 require("@nomiclabs/hardhat-etherscan");


  //privateKeyを入れたままpushしないように
 const privateKey = ''

 module.exports = {
  solidity: "0.8.0",
  networks: {
    bsctestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: 'XQUATQI8T741U5P8CGC2QZ4VVR67BHX1WP'
  }
 };
 