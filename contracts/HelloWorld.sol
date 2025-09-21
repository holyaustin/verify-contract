// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract HelloWorld {
    string public message;

    constructor() {
        message = "Hello Base!";
    }

    function setMessage(string memory _message) public {
        message = _message;
    }
}
