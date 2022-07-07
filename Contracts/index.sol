//SPDX-License-Identifier: MIT
pragma solidity >=0.8.15;
 
contract tweets{
    address public owner ; 
    uint256 private counter;

    constructor(){
        counter =0;
        owner = msg.sender; // msg varibale is something we get with every interaction

    }

    struct tweet {
        address tweeter;
        uint256 id;
        string tweettext;
        string tweetImg;
    }


    mapping (uint256 => tweet) tweets;

    function addTweet(
        string memory tweettext,
        string memory tweetImg ) public Payable{ //paybale is function modifier that checks if the certaion condition is met and then only executes the function
        require(msg.value==(1 ether) ,"this transaction will require 1 ether please continue");
        
        }
}

//yet to be completed
