let contract;
$(document).ready(function () {
  web3 = new Web3(web3.currentProvider);
  const address = "0x9E8461D5a3218870F611CFc6E422d2F466d3B6F9";
  const abi = [
    {
      inputs: [
        {
          internalType: "int256",
          name: "amt",
          type: "int256",
        },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "int256",
          name: "amt",
          type: "int256",
        },
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getBalance",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  contract = new web3.eth.Contract(abi, address);
  contract.methods
    .getBalance()
    .call()
    .then(function (bal) {
      $("#balance").html(`Balance = ${bal}`);
    });
});

$("#deposit").click(function () {
  const amt = parseInt($("#amount").val());
  web3.eth
    .getAccounts()
    .then(function (accounts) {
      const acc = accounts[0];
      console.log(acc);
      return contract.methods.deposit(amt).send({ from: acc });
    })
    .then((tx) => console.log(tx))
    .catch((err) => console.log(err));
});

$("#withdraw").click(function () {
  const amt = parseInt($("#amount").val());
  web3.eth
    .getAccounts()
    .then(function (accounts) {
      const acc = accounts[0];
      console.log(acc);
      return contract.methods.withdraw(amt).send({ from: acc });
    })
    .then(function (tx) {
      console.log(tx);
    })
    .catch(function (err) {
      console.log(err);
    });
});
