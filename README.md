# JPYC Faucet-testnet PJ (Basic Sample Hardhat Project)
## How to start
### Run it on testnet "Georli"
``` shell
npm install
npm run start
```
### Run it locally

パッケージをインストールして、ローカルブロックチェーンを立てる
``` shell
npm install
npx hardhat node
```
デプロイする
``` shell
npm hardhat run scripts/deploy.js --network localhost
```
デプロイ後、tokenaddressの2箇所を更新する
``` javascript
// Faucet.jsx and Tokensend.jsx
const tokenAddress = "your-token-address";
```


### テストネットへ新たにデプロイする場合、
パッケージをインストールして、テストネットへデプロイ
``` shell
npm install
npx hardhat node
```
``` shell
npm hardhat run scripts/deploy.js --network goerli
```
デプロイ後、tokenaddressの2箇所を更新する
``` javascript
// Faucet.jsx and Tokensend.jsx
const tokenAddress = "your-token-address";
```

## 参考サイト
更に不明な点が有ればこちらをご参照下さい！
https://dev.to/richardmelko/ethereum-dapp-crash-course-make-an-erc20-token-faucet-frontend-2m43



