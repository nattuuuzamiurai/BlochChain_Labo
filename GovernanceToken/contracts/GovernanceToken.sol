// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BlockChain is Ownable, ERC20('natou','NTT') {  //constractでnameとsymbolを決定
    uint256 private _totalSupply = 100;  //supplyをここで決定
    //string private _name = 'natou';
    //string private _symbol = 'NTT';
}
