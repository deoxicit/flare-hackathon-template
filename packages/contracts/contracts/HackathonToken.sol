// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HackathonToken is ERC20, Ownable {
    constructor() ERC20("Hackathon Token", "HTK") Ownable(msg.sender) {
        // Mint 1,000,000 tokens to the contract deployer
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
} 