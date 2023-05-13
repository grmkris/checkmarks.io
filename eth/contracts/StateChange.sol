// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract CheckMarksCMS {

    event StateChange(
        address author,
        string data
    );

    function stateChange(string[] calldata data_) external {
        for (uint256 i_ = 0; i_ < data_.length; i_++) {
            emit StateChange(msg.sender, data_[i_]);
        }
    }
}
