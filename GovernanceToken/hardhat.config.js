/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('@nomiclabs/hardhat-waffle');

  //privateKeyを入れたままpushしないように
 const privateKey = '' 

 module.exports = {
   solidity: "0.8.0",
   networks: {
     mumbai: {
       url: 'https://matic-mumbai.chainstacklabs.com',
       accounts: [`0x${privateKey}`]
     },

     polygon: {
      url: 'https://matic-mainnet.chainstacklabs.com',
      accounts: [`0x${privateKey}`]
     }
   }
 };
 