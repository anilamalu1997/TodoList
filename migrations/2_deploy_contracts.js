const todoList = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(todoList);
};
