// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BlockChain is Ownable, ERC20('Block Chain Lab token','BCL') {  //constractでnameとsymbolを決定
    uint256 private _totalSupply = 1000;  //supplyをここで決定

    function mint(uint256 amount) public onlyOwner {
        _mint(msg.sender, amount);
    }

}
