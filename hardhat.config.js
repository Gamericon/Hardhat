require("@nomiclabs/hardhat-waffle");
// require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = "df6bc7dee019aa67097a5c1fdc5b9f473a27056c6100f980648739d5d6b03eec"

module.exports = {
  solidity: "0.8.17",
  networks: {
  	Velas: {
  		url: `https://evmexplorer.testnet.velas.com/rpc`,
  		accounts: [`0x${Private_Key}`],
  	}
  }
};
