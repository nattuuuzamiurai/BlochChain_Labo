# BlochChain_Labo

ブロック研究所用の開発リポジトリです。

# 使用コマンド一覧

hardhatの環境構築
```bash
$npm init -y
$npm install -D hardhat  
$npm install -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```
hardhatの使用コマンド
```bash
$npx hardhat compile
$npx hardhat test
$npx hardhat run scripts/deploy.js --network network名
$npx hardhat verify 'verifyするコントラクトアドレス' --network bsctestnet
```
hardhatのlocal環境
```bash
$npx hardhat node
$npx hardhat run scripts/deploy.js --network localhost
```

privateKeyとapiKeyを入れたままpushしないように気を付けてください。
近いうちにpushしても反映されないように修正入れます。