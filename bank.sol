pragma solidity >=0.7.0 <0.9.0;

contract Bank {
    int256 balance;

    constructor() {
        balance = 1;
    }

    function getBalance() public view returns (int256) {
        return balance;
    }

    function withdraw(int256 amt) public {
        balance = balance - amt;
    }

    function deposit(int256 amt) public {
        balance = balance + amt;
    }
}
