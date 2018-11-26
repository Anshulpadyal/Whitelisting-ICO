var MySale = artifacts.require("./whitelist.sol");
module.exports = function(deployer) {
  deployer.deploy(MySale);
};
