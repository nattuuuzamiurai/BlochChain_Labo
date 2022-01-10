/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('@nomiclabs/hardhat-waffle');

  //privateKeyを入れたままpushしないように
 const privateKey = '' 

 module.exports = {
   solidity: "0.8.0",
   paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
 };
 